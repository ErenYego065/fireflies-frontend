"use client";

import { nunito } from "@/app/fonts";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Layout({ children }: any) {
  const { register, handleSubmit, setValue, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        toast("Request submitted successfully", {
          type: "success",
        });
        reset();
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.error(err);
        toast("Failed to submit request", {
          type: "error",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <div
      className={`flex flex-col p-4 ${nunito.className} gap-6 bg-gradient-to-t from-white to-[#00ADB52D]/40 lg:p-12 lg:px-24`}
    >
      {children}
      <div
        id="submission"
        className="mt-12 bg-gradient-to-b from-white to-[#00ADB52D]/40 p-8 shadow-xl"
      >
        <h3 className="text-start text-3xl font-semibold text-black/70">
          Submit a request
        </h3>

        <form
          className="my-4 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex w-full flex-col gap-1">
              <label htmlFor="name" className="font-bold">
                Your Name
              </label>
              <Input
                type="text"
                id="name"
                placeholder="Type your name here"
                className="border-1 w-full rounded-lg border-black/20 bg-white/70 p-2"
                {...register("name")}
                required
                defaultValue=""
              />
            </div>

            <div className="flex w-full flex-col gap-1">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <Input
                type="email"
                id="email"
                placeholder="Type your email here"
                className="border-1 w-full rounded-lg border-black/20 bg-white/70 p-2"
                {...register("email")}
                required
                defaultValue=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex w-full flex-col gap-1">
              <label htmlFor="topic" className="font-bold">
                Choose Topic
              </label>
              <Select
                {...register("topic")}
                name="topic"
                onValueChange={(e) => {
                  setValue("topic", e);
                }}
                required
                defaultValue=""
              >
                <SelectTrigger
                  className="w-full rounded-lg border border-black/20 bg-white/70 p-2 text-black"
                  {...register("topic")}
                >
                  <SelectValue placeholder="Select your topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gettingStarted">
                    Getting Started
                  </SelectItem>
                  <SelectItem value="creating">Account Issues</SelectItem>
                  <SelectItem value="buying">Wallet Connection</SelectItem>
                  <SelectItem value="selling">Transaction Problems</SelectItem>
                  <SelectItem value="partner">Booking Issues</SelectItem>
                  <SelectItem value="developers">Rewards & Staking</SelectItem>
                  <SelectItem value="other">NFT & Exclusive Offers</SelectItem>
                  <SelectItem value="other">Security Concerns</SelectItem>
                  <SelectItem value="other">Technical Glithces</SelectItem>
                  <SelectItem value="other">Platform Navigation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex w-full flex-col gap-1">
              <label htmlFor="priority" className="font-bold">
                Choose Priority
              </label>
              <Select
                {...register("priority")}
                name="priority"
                onValueChange={(e) => {
                  setValue("priority", e);
                }}
                required
                defaultValue=""
              >
                <SelectTrigger
                  className="w-full rounded-lg border border-black/20 bg-white/70 p-2 text-black"
                  {...register("priority")}
                >
                  <SelectValue placeholder="Select your priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="font-bold">
              Description
            </label>
            <Textarea
              id="email"
              placeholder="Type here"
              className="border-1 w-full rounded-lg border-black/20 bg-white/70 p-2"
              {...register("description")}
              required
              defaultValue=""
            />
          </div>

          <button
            type="submit"
            className="flex w-48 items-center justify-center self-end rounded-lg bg-[#00ADB5] p-2 text-white"
            disabled={isSubmitting}
          >
            Send Your Request
          </button>
        </form>
      </div>
    </div>
  );
}
