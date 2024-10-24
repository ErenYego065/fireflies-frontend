"use client";

import { useEffect, useState } from "react";
import React, { Fragment } from "react";
import moment from "moment";
import { BlogCard } from "@/components/blogs/Card";
import { serialize } from "@/app/tools/serializer";
import { useQuery } from "@tanstack/react-query";
import { getBlog, getBlogs } from "@/app/api/cms";
import Loading from "@/app/loading";
import Error from "@/app/error";

export default function Blog({ params }: { params: { id: string } }) {
  const [blog, setBlog] = useState<any>(null);
  const [blogs, setBlogs] = useState<any>([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["blogs"],
    retry: 0,
    queryFn: async () => {
      const blog = await getBlog(params.id);
      const blogs = await getBlogs(3);

      return { blog, blogs };
    },
  });

  useEffect(() => {
    if (data !== undefined) {
      setBlog(data?.blog);
      setBlogs(data?.blogs.docs);
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.error(error);
    return <Error />;
  }

  return (
    <div className="mt-8 flex flex-col gap-8 p-4 lg:m-auto lg:mt-12 lg:w-4/5">
      <div className="flex flex-col gap-4">
        <h1 className="font-sofiapro text-center text-4xl font-bold lg:text-6xl">
          {blog?.title}
        </h1>
        <h2 className="text-md font-nunito text-center font-thin lg:px-64">
          {blog?.excerpt}
        </h2>
        <img
          src={`${process.env.NEXT_PUBLIC_CMS_URL}${blog?.cover_image?.url}`}
          alt={blog?.title}
          className="h-[12rem] w-full rounded-3xl object-cover object-center py-2 lg:m-auto lg:h-[50rem] lg:w-4/5"
        />
        <div className="flex flex-row items-center justify-between lg:m-auto lg:w-4/5 lg:px-4">
          <div>
            <p className="text-xs text-black/50">By {blog?.user?.name}</p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="font-nunito rounded-full bg-gradient-to-b from-[#CCEDEE] to-[#FAFAFA] px-4 py-1 text-[10px] font-bold text-black lg:text-xs">
              {blog?.category}
            </div>
            <p className="text-[10px] text-black/50 lg:text-xs">
              {moment(blog?.published_at).format("MMMM D, YYYY")}
            </p>
          </div>
        </div>
        <div className="lg:my-12">{serialize(blog?.content || [])}</div>
        {blog?.tags !== undefined && (
          <div className="flex flex-row gap-2 font-semibold">
            {blog?.tags
              .split(",")
              .map((tag: any) => <p className="text-[#00ADB5]">{`#${tag}`}</p>)}
          </div>
        )}
      </div>

      <div className="my-4 flex flex-col gap-4">
        <h3 className="font-sofiapro text-4xl font-bold">Related Blogs</h3>
        <div className="overflow:scroll flex flex-col gap-4 lg:flex-row lg:gap-8">
          {blogs.map((blog: any) => (
            <BlogCard
              id={blog.id}
              category={blog.category}
              title={blog.title}
              excerpt={blog.excerpt}
              date={blog.published_at}
              imageUrl={`${process.env.NEXT_PUBLIC_CMS_URL}${blog.cover_image?.url}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
