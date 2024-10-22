"use client";

import { nunito, sofiaPro } from "@/app/fonts";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

let allDocuments: any = [];

export default function Glossary() {
  const [documents, setDocuments] = useState([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/documents`)
      .then((res) => res.json())
      .then((data) => {
        allDocuments = data.docs;
        setDocuments(data.docs);
      })
      .catch((err) => console.error(err));
  }, []);

  const onSearch = (data: any) => {
    const search = data.search;
    if (search === "") {
      setDocuments(allDocuments);
    } else {
      const filtered = allDocuments.filter((doc: any) =>
        doc.alt.toLowerCase().includes(search.toLowerCase())
      );
      setDocuments(filtered);
    }
  };

  return (
    <div
      className={`flex flex-col p-4 ${nunito.className} gap-6 bg-gradient-to-t from-white to-[#00ADB52D]/40 lg:p-12 lg:px-24`}
    >
      <h1
        className={`mt-4 text-5xl font-semibold text-black/70 lg:text-6xl ${sofiaPro.className}`}
      >
        Documents
      </h1>
      <form className={`flex flex-row gap-4`} onSubmit={handleSubmit(onSearch)}>
        <Input
          {...register("search")}
          placeholder="Search"
          className="w-full bg-white"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onSearch({ search: e.currentTarget.value });
            }
          }}
        />
        <button
          type="submit"
          className="flex items-center justify-center rounded-lg bg-[#00ADB5] p-2 text-white"
        >
          Search
        </button>
      </form>

      <div className="flex flex-col gap-4">
        {documents.map((doc: any) => (
          <DocumentCard
            key={doc.id}
            title={doc.alt}
            size={doc.filesize}
            path={doc.url}
          />
        ))}
      </div>
    </div>
  );
}

interface DocumentCardProps {
  title: string;
  size: number;
  path: string;
}

function DocumentCard({ title, size, path }: DocumentCardProps) {
  return (
    <div className="flex flex-col justify-center rounded-lg bg-gradient-to-b from-white to-[#00ADB52D]/40 p-4 shadow-lg lg:flex-row lg:items-center lg:gap-4">
      <div className="mb-4 flex flex-row justify-between lg:mx-8 lg:mb-0 lg:w-full">
        <p>{title}</p>
        <p>{`${Math.ceil(size / 1000)}KB`}</p>
      </div>
      <a
        href={`${process.env.NEXT_PUBLIC_CMS_URL}${path}`}
        target="_blank"
        className="flex flex-row items-center gap-4 self-center hover:cursor-pointer"
      >
        <p className="text-lg font-bold">Download</p>
        <svg
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 17H14V15H0M14 6H10V0H4V6H0L7 13L14 6Z" fill="#0A0A0B" />
        </svg>
      </a>
    </div>
  );
}
