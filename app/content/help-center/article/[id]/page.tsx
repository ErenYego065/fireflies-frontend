"use client";

import { sofiaPro } from "@/app/fonts";
import { serialize } from "@/app/tools/serializer";
import { BackButton, ShareIcon } from "@/components/icons/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { ShareDialog } from "@/components/dialogs/share-dialog";

export default function Article({ params }: any) {
  const [article, setArticle] = useState<any>(null);
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [hasFeedback, setHasFeedback] = useState(
    Cookies.get(`feedback_${params.id}`) === "true",
  );

  const onSearch = (data: any) => {
    router.push(`/content/help-center/search?search=${data.search}`);
  };

  const onArticleFeedback = (isHelpful: number) => {
    fetch(
      `${process.env.NEXT_PUBLIC_CMS_URL}/api/articles/${params.id}/feedback`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback: isHelpful }),
      },
    ).then((res) => {
      if (res.ok) {
        toast("Feedback submitted successfully", {
          type: "success",
        });
      }

      Cookies.set(`feedback_${params.id}`, "true");
      setHasFeedback(true);
    });
  };

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_CMS_URL}/api/articles/${params.id}?depth=2`,
    )
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, []);

  const title = article?.topic
    .split("-")
    .map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  return (
    <div className="flex flex-col gap-6">
      <div className={`flex flex-col justify-between gap-4 lg:flex-row`}>
        <div className="flex flex-row items-center gap-4">
          <BackButton />
          <h1
            className={`p-4 text-5xl font-semibold text-black/70 lg:text-6xl ${sofiaPro.className}`}
          >
            {title}
          </h1>
        </div>
        <form
          className={`flex flex-row items-center gap-4 lg:w-[24rem]`}
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
          />
          <button
            type="submit"
            className="flex items-center justify-center rounded-lg bg-[#00ADB5] p-2 text-white"
          >
            Search
          </button>
        </form>
      </div>
      {article && (
        <div className="lg:rounded-[2rem] lg:bg-gradient-to-b lg:from-white lg:to-[#00ADB52D]/40 lg:p-12 lg:px-24 lg:shadow-xl">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-[#00ADB5]">
              {article?.title}
            </h2>
            <p className="text-black/50">{article?.excerpt}</p>
          </div>

          <div className="my-6 flex flex-row justify-between border-b-2 border-t-2 border-black/20 py-6">
            <div className="flex flex-row gap-2">
              <Avatar>
                <AvatarImage src={article?.user?.image || ""} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center gap-1">
                <p className="text-xs text-black/50">
                  Written By{" "}
                  <span className="font-semibold text-black/50">
                    {article?.user?.name}
                  </span>
                </p>
                <p className="text-xs text-black/50">
                  Updated At{" "}
                  <span className="font-semibold text-black/50">
                    {format(article?.updatedAt, "dd/MM/yyyy")}
                  </span>{" "}
                </p>
              </div>
            </div>
            <ShareDialog
              triggerRef={
                <button className="flex flex-row items-center justify-center gap-4 text-sm">
                  <p className="text-black/50">Share: </p>
                  <ShareIcon />
                </button>
              }
            />
          </div>

          <div className="lg:my-12">{serialize(article?.content || [])}</div>

          {!hasFeedback && (
            <div className="my-6 flex flex-col items-center justify-center gap-4 border-t-2 border-black/20 py-8">
              <h4 className="text-lg font-semibold text-[#00ADB5]">
                Was this article helpful?
              </h4>

              <div className="flex flex-row gap-6">
                <button
                  className="flex w-[124px] items-center justify-center rounded-lg border border-black/20 bg-[#00ADB5] p-2 text-white"
                  onClick={() => onArticleFeedback(1)}
                >
                  Yes, Thanks
                </button>
                <button
                  className="flex w-[124px] items-center justify-center rounded-lg border border-black/20 bg-white p-2 text-black"
                  onClick={() => onArticleFeedback(0)}
                >
                  Not Really
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
