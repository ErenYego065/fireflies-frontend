"use client";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface ForgotPasswordFormData {
  email: string;
}

const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
});

const ForgotPasswordComponent = () => {
  const router = useRouter();

  const form = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_CMS_URL}/api/users/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    toast("Verification code sent successfully. Please check your email", {
      type: "success",
    });

    router.push("/");
  };

  return (
    <Card className="flex flex-col gap-2 px-5 py-0 pt-5 font-[family-name:var(--font-nunito)] lg:w-[496px]">
      <CardTitle className="text-[32px] text-neutral-900">
        Forgot Password
      </CardTitle>
      <CardDescription className="text-sm font-semibold text-[#1E1E1E]">
        Please enter your email address, we will send verification code to your
        email
      </CardDescription>
      <CardContent className="mx-0 mb-0 px-0 pb-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-lg font-bold">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-lg"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="mt-[60px] h-9 w-full rounded-xl bg-[#00ADB5] text-sm font-semibold"
            >
              Send Code
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ForgotPasswordComponent;
