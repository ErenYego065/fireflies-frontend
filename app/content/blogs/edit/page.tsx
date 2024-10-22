"use client";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BlogEditor from "@/components/blogs/BlogEditorComponent";
import Link from "next/link";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface BlogFormData {
  title: string;
  snippet: string;
  category?: string;
  tags?: string;
  acceptTerms: boolean;
}

const categories = ["defi", "community", "tech", "partnerships", "travel"];

const BlogSchema = yup.object().shape({
  title: yup
    .string()
    .max(70, "Title characters should be less than 70")
    .required(),
  snippet: yup
    .string()
    .max(170, "Snippet characters should be less than 170")
    .required(),
  category: yup.string().oneOf(categories),
  tags: yup.string(),
  acceptTerms: yup
    .boolean()
    .required("You must accept the terms and conditions")
    .oneOf([true], "You must accept the terms and conditions"),
});

const BlogEdit = () => {
  const form = useForm<BlogFormData>({
    resolver: yupResolver(BlogSchema),
  });

  const onSubmit = (data: BlogFormData) => {};

  return (
    <div className="mx-[18px] mt-6">
      <div className="flex flex-col gap-5">
        <Link
          href="/content/blogs"
          className="flex flex-row items-center gap-[10px]"
        >
          <Image
            src="/images/blogs/backward.svg"
            alt="backward"
            height={24}
            width={24}
          />
          <span className="font-[family-name:var(--font-nunito)] text-[18px] font-bold leading-6 text-[#00ADB5]">
            back
          </span>
        </Link>
        <h1 className="font-[family-name:var(--font-sofia)] text-[40px] font-bold leading-10">
          Create Blog
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="font-[family-name:var(--font-nunito)]">
                  <FormLabel className="bold text-lg leading-6 text-[#0A0A0B]">
                    Title
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type your title here"
                      className="px-[10px] py-[6px] placeholder:text-[16px] placeholder:leading-[22px] placeholder:text-[#5A5555]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-[#5A5555]">
                    Enter a captivating headline.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="snippet"
              render={({ field }) => (
                <FormItem className="mt-[18px] font-[family-name:var(--font-nunito)]">
                  <FormLabel className="bold text-lg leading-6 text-[#0A0A0B]">
                    Snippet
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type your snippet here"
                      className="px-[10px] py-[6px] placeholder:text-[16px] placeholder:leading-[22px] placeholder:text-[#5A5555]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-[#5A5555]">
                    Provide a brief and engaging summary of the blog post.
                    Maximum 170 character
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <BlogEditor />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="mt-[18px] font-[family-name:var(--font-nunito)]">
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-[210px] rounded-xl text-sm font-bold text-[#0A0A0B]">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent className="text-sm text-[#0A0A0B]">
                        <SelectItem value={categories[0]}>
                          DeFi & Tokenomics
                        </SelectItem>
                        <SelectItem value={categories[1]}>
                          Community & Event
                        </SelectItem>
                        <SelectItem value={categories[2]}>
                          Tech & Development
                        </SelectItem>
                        <SelectItem value={categories[3]}>
                          Partnerships & Collaborations
                        </SelectItem>
                        <SelectItem value={categories[4]}>Travel</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem className="mt-[18px] font-[family-name:var(--font-nunito)]">
                  <FormLabel className="bold text-lg leading-6 text-[#0A0A0B]">
                    Tags
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your snippet here"
                      className="px-[10px] py-[6px] placeholder:text-[16px] placeholder:leading-[22px] placeholder:text-[#5A5555]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-[#5A5555]">
                    Add keywords for better reach.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }) => (
                <FormItem className="my-7 flex flex-row items-start space-x-3 space-y-0 font-[family-name:var(--font-nunito)]">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-[14px] leading-[14px] text-[#393E46]">
                    Check this box to proceed. By checking, you agree to our
                    <Link href="#" className="text-[#00ADB5]">
                      {" "}
                      Terms and Conditions
                    </Link>
                  </FormLabel>
                </FormItem>
              )}
            />
            <div className="flex w-full flex-row justify-end">
              <Button
                type="submit"
                className="h-8 w-[84px] self-end rounded-xl bg-[#00ADB5] font-[family-name:var(--font-nunito)] text-sm font-semibold"
              >
                Post Blog
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BlogEdit;
