"use client";

import { nunito, sofiaPro } from "@/app/fonts";
import { useEffect, useState } from "react";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Glossary() {
  const [glossary, setGlossary] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/glossaries?limit=100`)
      .then((res) => res.json())
      .then((data) => setGlossary(data.docs));
  }, []);

  return (
    <div
      className={`flex flex-col p-4 ${nunito.className} gap-6 bg-gradient-to-t from-white to-[#00ADB52D]/40 py-8 lg:p-12 lg:px-24`}
    >
      <div className="flex flex-row items-center gap-2">
        <h1
          className={`text-5xl font-semibold text-black/80 lg:text-6xl ${nunito.className}`}
        >
          Glossary
        </h1>
      </div>

      <div className="grid grid-cols-8 flex-row items-center gap-2 px-2 lg:flex lg:justify-around">
        {alphabet.map((letter) => (
          <a
            key={letter}
            href={`#${letter}`}
            className="flex h-10 w-7 items-center justify-center rounded-lg border-2 border-black/20 bg-white py-[4px] text-center text-lg font-semibold"
          >
            {letter}
          </a>
        ))}
      </div>

      {alphabet.map(
        (letter) =>
          glossary.filter((g) => g.title.startsWith(letter)).length > 0 && (
            <div
              key={letter}
              className="flex flex-row items-start gap-4"
              id={letter}
            >
              <span className="flex h-10 w-7 items-center justify-center self-start rounded-lg border-2 border-black/20 bg-white p-[4px] text-center text-lg font-bold">
                {letter}
              </span>
              <div className="flex w-full flex-col items-center gap-4 lg:grid lg:grid-cols-3 lg:items-start">
                {glossary
                  .filter((item) => item.title.startsWith(letter))
                  .map((item) => (
                    <GlossaryCard
                      key={item.title}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
              </div>
            </div>
          )
      )}
    </div>
  );
}

interface GlossaryCardProps {
  title: string;
  description: string;
}

function GlossaryCard({ title, description }: GlossaryCardProps) {
  return (
    <div
      key={title}
      className="group w-full shadow-none aria-expanded:shadow-lg"
      aria-expanded="false"
      onClick={(e) => {
        e.currentTarget.ariaExpanded = (
          e.currentTarget.ariaExpanded === "false"
        ).toString();
      }}
    >
      <div>
        <h2 className="rounded-lg bg-[#FAFAFA] p-2 text-xl font-bold text-black/80 drop-shadow-none group-aria-expanded:rounded-b-none group-aria-expanded:border-b-2">
          {title}
        </h2>
        <p className="hidden rounded-b-lg bg-white p-2 text-lg text-black/60 group-aria-expanded:block">
          {description}
        </p>
      </div>
    </div>
  );
}
