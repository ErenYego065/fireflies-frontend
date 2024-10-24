"use client";

import { sofiaPro } from "@/app/fonts";
import { BackButton, ShareIcon } from "@/components/icons/Icons";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import qs from "qs";
import { useSearchParams } from "next/navigation";
import { ShareDialog } from "@/components/dialogs/share-dialog";

export default function Page({ params }: any) {
  const qp = useSearchParams();
  const searchParam = qp.get("search") || "";

  const { register, handleSubmit } = useForm();
  const [articles, setArticles] = useState<any>([]);
  const [search, setSearch] = useState(searchParam);

  let query = {};

  if (params.slug === "search") {
    query = {
      title: {
        contains: search,
      },
    };
  } else {
    query = {
      topic: {
        equals: params.slug,
      },
    };
  }

  useEffect(() => {
    const stringifiedQuery = qs.stringify(
      {
        where: query,
      },
      {
        addQueryPrefix: true,
      },
    );
    fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/articles${stringifiedQuery}`)
      .then((res) => res.json())
      .then((data) => setArticles(data.docs));
  }, [search]);

  const onSearch = (data: any) => {
    setSearch(data.search);
  };

  const title = params.slug
    .split("-")
    .map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  return (
    <div className="flex flex-col gap-4">
      <div className={`flex flex-row justify-between gap-6`}>
        <div className="flex flex-row items-center gap-4">
          <BackButton />
          <h1
            className={`p-4 text-5xl font-semibold text-black/70 lg:text-6xl ${sofiaPro.className}`}
          >
            {title}
          </h1>
        </div>
        <form
          className={`flex w-[24rem] flex-row items-center gap-4`}
          onSubmit={handleSubmit(onSearch)}
        >
          <Input
            {...register("search")}
            placeholder="Search"
            className="w-full bg-white"
            onKeyUp={(e: any) => {
              if (e.key === "Enter") {
                onSearch({ search: e.currentTarget.value });
              }
            }}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <button
            type="submit"
            className="flex items-center justify-center rounded-lg bg-[#00ADB5] p-2 text-white"
          >
            Search
          </button>
        </form>
      </div>
      {articles.length === 0 ? (
        <p className="mt-12 text-center text-2xl font-semibold text-black/70">
          No articles founds
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {articles.map((article: any) => (
            <ContentCard
              author={article.user.name}
              id={article.id}
              title={article.title}
              description={article.excerpt}
              tags={article.tags?.split(",")}
              helpfulCount={article.helpfulCount}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface ContentCardProps {
  id: string;
  author: string;
  title: string;
  description: string;
  tags: string[];
  helpfulCount: number;
}

function ContentCard({
  id,
  author,
  title,
  description,
  tags,
  helpfulCount,
}: ContentCardProps) {
  return (
    <div className="relative flex flex-col rounded-md bg-gradient-to-b from-white to-[#00ADB52D]/40 p-4 shadow-xl lg:p-8">
      <a href={`/content/help-center/article/${id}`}>
        <h4 className="mr-24 text-2xl font-semibold text-black/70 md:pr-48">
          {title}
        </h4>
        <p className="mr-24 text-black/80 lg:mr-48">{author}</p>
        <p className="mt-4 text-black/80 md:pr-48">{description}</p>
      </a>
      <div className="mt-8 flex flex-row gap-2">
        {tags?.map((tag) => (
          <Badge className="rounded-sm bg-[#00ADB5] p-1 font-normal text-white">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="absolute right-4 flex h-[86px] w-[80px] flex-col items-center rounded-md bg-gradient-to-r from-[#505D65] from-15% to-primary to-90% p-2 px-4 text-white lg:right-10">
        <p className="mb-2">HELPFUL</p>
        <p className="text-xl font-bold">{helpfulCount}</p>
      </div>
      <ShareDialog
        triggerRef={
          <button className="absolute bottom-4 right-4 rounded-lg border p-1 lg:bottom-8 lg:right-10">
            <ShareIcon />
          </button>
        }
      />
    </div>
  );
}
