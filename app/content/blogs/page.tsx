"use client";

import { BlogCard, LatestCard } from "@/components/blogs/Card";
import { useEffect, useState } from "react";
import moment from "moment";
import { useSession } from "next-auth/react";
import qs from "qs";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/app/api/cms";
import Loading from "@/app/loading";

export default function Blogs() {
  const [selected, setSelected] = useState("All");
  const [totalPage, setTotalPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);
  const [blogs, setBlogs] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [search, setSearch] = useState("");
  const [allBlogs, setAllBlogs] = useState<any>([]);

  const onPageChange = (page: number) => {
    if (page < 1 || page > totalPage) return;
    setSelectedPage(page);
  };

  const onSearch = (query: string) => {
    setSearch(query);
    if (query == "") {
      setBlogs(allBlogs);
      setTotalPage(Math.ceil(allBlogs.length / 6));
      return;
    }
    const newBlogs = allBlogs.filter((blog: any) =>
      blog.title.toLowerCase().includes(query.toLowerCase()),
    );
    setTotalPage(Math.ceil(newBlogs.length / 6));
    setBlogs(newBlogs);
  };

  const onFilterChange = (category: string) => {
    let newBlogs;
    if (category == "All") {
      newBlogs = allBlogs;
    } else {
      newBlogs = allBlogs.filter((blog: any) => blog.category == category);
    }
    setSelected(category);
    setTotalPage(Math.ceil(newBlogs.length / 6));
    setBlogs(newBlogs);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => await getBlogs(0),
  });

  useEffect(() => {
    if (data === undefined) return;
    setAllBlogs(data.docs);
    setBlogs(data.docs);
    setTotalPage(Math.ceil(data?.docs?.length / 6));
    const categories = data?.docs?.map((blog: any) => blog.category);
    setCategories(Array.from(new Set(categories)));
  }, [data]);

  if (isLoading) return <Loading />;

  if (error) return <div>Error</div>;

  // useEffect(() => {
  //   const query = {
  //     status: {
  //       equals: "published",
  //     },
  //   };

  //   const stringifiedQuery = qs.stringify(
  //     {
  //       where: query,
  //     },
  //     {
  //       addQueryPrefix: true,
  //     }
  //   );

  //   fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blogs${stringifiedQuery}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       allBlogs = data.docs;
  //       setBlogs(data.docs);
  //       setTotalPage(Math.ceil(data.docs.length / 6));
  //       const categories = data.docs.map((blog: any) => blog.category);
  //       setCategories(Array.from(new Set(categories)));
  //     })
  //     .catch((err) => {
  //       allBlogs = [];
  //       setBlogs([]);
  //       setError(err);
  //     });
  // }, []);

  return (
    <div>
      <div className="m-auto flex flex-col gap-8 p-4">
        <div className="flex flex-col gap-4">
          <div className="font-sofiapro flex flex-col gap-4 rounded-2xl bg-gradient-to-t from-white to-[#00ADB52D]/40 p-4 py-12 text-start text-black lg:gap-8 lg:px-12">
            <div className="flex flex-row items-center justify-between">
              <h1 className="px-2 text-5xl font-bold text-black/80 lg:text-8xl">
                Blog
              </h1>
              <a
                href="/content/blogs/submission"
                className="w-28 rounded-xl bg-gradient-to-r from-black/60 to-black px-4 py-1 text-center text-sm text-white lg:w-32 lg:self-start lg:py-2 lg:text-lg"
              >
                Write Blog
              </a>
            </div>

            <p className="border-l-4 border-black/60 px-2 text-lg text-black/60 lg:ml-2 lg:text-2xl">
              Explore the latest trends, project updates, and technical deep
              dives in the Fireflies ecosystem. Join our mission to redefine
              decentralized finance!
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-8 md:flex-row md:justify-between">
                <div className="flex flex-col gap-2">
                  <p className="font-sofiapro">Categories</p>
                  <div className="flex flex-row flex-wrap gap-2">
                    <Chip
                      key={"All"}
                      text={"All"}
                      selected={selected == "All"}
                      onClick={() => onFilterChange("All")}
                    />
                    {categories.map((category: any) => (
                      <Chip
                        key={category}
                        text={category}
                        selected={selected == category}
                        onClick={() => onFilterChange(category)}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 lg:w-[48rem]">
                  <p className="font-sofiapro">Search Blogs</p>
                  <div className="flex flex-row gap-2">
                    <input
                      placeholder="I want to read about..."
                      className="w-full rounded-2xl border-2 px-4"
                      onChange={(e) => onSearch(e.target.value)}
                    />
                    <button className="font-sofiapro w-[95px] rounded-2xl bg-gradient-to-r from-black/80 to-primary px-4 text-white">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Featured */}
            {allBlogs?.length > 0 && search == "" && selected == "All" && (
              <div className="font-sofiapro flex lg:w-3/5">
                <div
                  className={`relative flex w-full flex-col gap-4 rounded-2xl bg-cover bg-center pt-32 lg:h-full lg:justify-end lg:pt-0`}
                  style={{
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_CMS_URL}${allBlogs[0]?.cover_image?.url || ""})`,
                  }}
                >
                  <div className="absolute left-0 top-0 z-0 h-full w-full rounded-2xl bg-gradient-to-b from-black/0 to-black/80"></div>
                  <div className="z-10 flex flex-col gap-4 p-8">
                    <div className="flex flex-row items-center gap-4">
                      <div className="inline-block rounded-full bg-gradient-to-r from-primary to-black/40 px-2 py-1 text-xs uppercase text-white">
                        Featured
                      </div>
                      <p className="text-xs text-white/60">
                        {moment(allBlogs[0]?.published_at).format(
                          "MMMM D, YYYY",
                        )}
                      </p>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {allBlogs[0]?.title}
                    </h3>
                    <p className="text-sm text-white">{allBlogs[0]?.excerpt}</p>
                    <a
                      href={`/content/blogs/${allBlogs[0]?.id}`}
                      className="font-sofiapro w-28 self-end rounded-2xl bg-white px-4 py-1 text-sm text-black hover:cursor-pointer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Latest */}
            {allBlogs?.length > 0 && search == "" && selected == "All" && (
              <div className="font-sofiapro lg:w-2/5">
                <div className="relative flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-primary to-black/60 px-4 py-8 lg:gap-0 lg:py-2">
                  <h3 className="p-4 text-2xl font-bold text-white">
                    Latest Updates from Fireflies
                  </h3>
                  <div className="flex flex-col gap-4 p-2 lg:gap-2">
                    {allBlogs.slice(1, 4).map((blog: any) => (
                      <LatestCard
                        id={blog.id}
                        title={blog.title}
                        excerpt={blog.excerpt}
                        date={blog.published_at}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* All Blogs */}
          <div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {blogs
                ?.slice(6 * (selectedPage - 1), 6 * selectedPage)
                .map((blog: any) => (
                  <BlogCard
                    id={blog.id}
                    category={blog.category}
                    title={blog.title}
                    excerpt={blog.excerpt}
                    date={blog.published_at}
                    imageUrl={`${process.env.NEXT_PUBLIC_CMS_URL}${blog?.cover_image?.url}`}
                  />
                ))}
            </div>

            <div className="flex flex-row justify-center gap-4 p-8 lg:gap-12">
              {/* Previous */}
              <div
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 p-2 hover:cursor-pointer"
                onClick={() => onPageChange(selectedPage - 1)}
              >
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L1 5L5 9"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              {new Array(totalPage || 1).fill(0).map((_, index) => (
                <div
                  className={`flex h-[40px] w-[40px] items-center justify-center rounded-full p-2 ${selectedPage == index + 1 ? "bg-primary text-white" : "bg-secondary text-black"} hover:cursor-pointer`}
                  onClick={() => onPageChange(index + 1)}
                >
                  {index + 1}
                </div>
              ))}

              {/* Next */}
              <div
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 p-2 hover:cursor-pointer"
                onClick={() => onPageChange(selectedPage + 1)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip({ key, text, selected, onClick }: any) {
  return (
    <div
      key={key}
      className={`${selected ? "bg-white text-primary" : "border-2 border-white bg-primary text-white"} font-sofiapro self-center rounded-full px-3 py-1 text-sm uppercase hover:cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
