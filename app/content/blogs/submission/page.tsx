"use client";

import RichTextExample from "@/components/slate/RichTextEditor";
import { Input } from "@/components/ui/input";
import { MenuItem, Select } from "@mui/material";
import { getCsrfToken, useSession } from "next-auth/react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"; // Register the plugins
import { auth } from "@/auth";
import { getToken } from "next-auth/jwt";
import Cookies from "js-cookie";
import { sofiaPro } from "@/app/fonts";
import { CaretLeft } from "@/components/icons/Icons";
import { redirect, useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

registerPlugin(FilePondPluginImagePreview);

const schema = yup
  .object({
    title: yup.string().max(70).required(),
    excerpt: yup.string().max(175).required(),
    content: yup.array().required(),
    category: yup.string().required(),
    tags: yup.string().required(),
    cover_image: yup.string().required(),
  })
  .required();

export default function Page() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { data: session } = useSession();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onChange = (value: any) => {
    setValue("content", value);
  };

  const onSubmit = (data: any) => {
    if (session === null || session === undefined) {
      toast("You need to be logged in to post a blog.", {
        type: "error",
      });
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        toast("Blog submitted successfully.", {
          type: "success",
        });

        setIsDialogOpen(true);
      })
      .catch((error) => {
        console.error(error);
        toast("Failed to post blog. Please contact support", {
          type: "error",
        });
      });
  };

  const initialValue: any[] = [
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ];

  return (
    <div className="lg:px-42 flex flex-col gap-8 p-8 lg:px-48">
      <div className="flex flex-col items-start justify-center gap-6">
        <div
          className="flex flex-row items-center gap-4 text-lg hover:cursor-pointer"
          onClick={() => {
            router.back();
          }}
        >
          <CaretLeft />
          <span className="font-normal text-[#00ADB5]">back</span>
        </div>
        <h1
          className={`px-2 text-5xl font-bold text-black/80 lg:text-8xl ${sofiaPro.className}`}
        >
          Create Blog
        </h1>
      </div>
      <form
        className="font-nunito flex flex-col gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="cover" className="text-lg font-bold">
            Cover Image
          </label>
          <FilePond
            name="file"
            required
            server={{
              process: {
                url: `${process.env.NEXT_PUBLIC_CMS_URL}/api/media`,
                method: "POST",
                headers: {
                  Authorization: `Bearer ${Cookies.get("token")}`,
                },
                onload: (res) => {
                  const obj = JSON.parse(res);
                  setValue("cover_image", obj.doc.id);
                  return obj.doc.id;
                },
              },
            }}
          />
        </div>
        <div>
          <label htmlFor="title" className="text-lg font-bold">
            Title*
          </label>
          <span className="mx-4 text-red-500">
            {errors.title ? errors.title.message : ""}
          </span>
          <Input
            {...register("title")}
            type="text"
            id="title"
            name="title"
            className="my-2 w-full rounded-lg border border-black/20 p-2"
            placeholder="Type your title here"
          />

          <span className="text-black/60">Enter a captivating headline.</span>
        </div>
        <div>
          <label htmlFor="excerpt" className="text-lg font-bold">
            Snippet
          </label>
          <span className="mx-4 text-red-500">
            {errors.excerpt ? errors.excerpt.message : ""}
          </span>
          <Input
            {...register("excerpt")}
            type="text"
            id="excerpt"
            name="excerpt"
            className="my-2 w-full rounded-lg border border-black/20 p-2"
            placeholder="Type your snippet here"
          />
          <span className="text-black/60">
            Provide a brief and engaging summary of the blog post. Maximum 170
            character.
          </span>
        </div>
        <div>
          <label htmlFor="content" className="text-lg font-bold">
            Content
          </label>
          <span className="mx-4 text-red-500">
            {errors.content ? errors.content.message : ""}
          </span>
          <RichTextExample initialValue={initialValue} onChange={onChange} />
          <span className="text-black/60">
            Paste or write your blog content.
          </span>
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="text-lg font-bold">
            Category
          </label>
          <Select
            {...register("category")}
            id="category"
            name="category"
            className="h-12 w-48 rounded-lg border border-black/20"
            defaultValue="Travel"
          >
            <MenuItem value="Travel">Travel</MenuItem>
            <MenuItem value="Community & Events">Community & Events</MenuItem>
            <MenuItem value="Defi & Tokenomics">DeFi & Tokenomics</MenuItem>
            <MenuItem value="tech & development">Tech & Development</MenuItem>
            <MenuItem value="partnetship & collaborations">
              Partnership & Collaborations
            </MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Select>
          <span className="text-black/60">
            Paste or write your blog content.
          </span>
        </div>
        <div>
          <label htmlFor="tags" className="text-lg font-bold">
            Tags
          </label>
          <span className="mx-4 text-red-500">
            {errors.tags ? errors.tags.message : ""}
          </span>
          <div className="relative">
            <textarea
              {...register("tags")}
              id="tags"
              name="tags"
              className={`my-2 w-full rounded-lg border border-black/20 p-2`}
              placeholder="Type your tags here separated by commas. Example: travel,adventure,fun"
            />
          </div>
          <span className="text-black/60">
            Paste or write your blog content.
          </span>
        </div>
        <button
          className="flex self-end rounded-lg bg-[#00ADB5] p-2 px-[40px] text-white"
          type="submit"
        >
          Post Blog
        </button>
        <Dialog open={isDialogOpen}>
          <DialogContent className="bg-white">
            <DialogHeader className="flex flex-col gap-4">
              <DialogTitle className="text-center text-xl">
                Thank You for Your Submission!
              </DialogTitle>
              <DialogDescription className="text-center text-black">
                Your blog post has been successfully submitted and is now under
                review by our admin team.
              </DialogDescription>
              <DialogDescription className="text-md text-center font-bold text-black">
                What to Expect Next
              </DialogDescription>
              <DialogDescription className="text-black">
                <ul className="list-inside list-disc">
                  <li>
                    You will receive a notification once your submission is
                    approved or if any changes are needed.
                  </li>
                  <li>
                    If approved, your blog will be published on the timeline for
                    everyone to read!
                  </li>
                </ul>
              </DialogDescription>
            </DialogHeader>
            <button
              className="w-full rounded-lg bg-[#00ADB5] py-1 text-center text-white"
              onClick={() => {
                router.push("/content/blogs");
              }}
            >
              Continue
            </button>
          </DialogContent>
        </Dialog>{" "}
      </form>
    </div>
  );
}
