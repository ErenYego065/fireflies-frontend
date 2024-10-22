import { Card, CardContent, CardTitle } from "@/components/ui/card";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FacebookButtonComponent from "./FacebookButtonComponent";
import GoogleButtonComponent from "./GoogleButtonComponent";
import { signIn } from "next-auth/react";

interface SignInFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

const signInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  rememberMe: yup.boolean().optional(),
});

const onSubmit = async (data: SignInFormData) => {
  const { email, password } = data;

  try {
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/content/home",
    });
  } catch (e) {
    console.error("Login Failed:", e);
  }
};

const SignInComponent = ({ error }: any) => {
  const form = useForm<SignInFormData>({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  return (
    <Card className="flex flex-col gap-2 px-5 py-0 pt-5 font-[family-name:var(--font-nunito)] lg:w-[496px]">
      <CardTitle className="text-center text-[32px] text-neutral-900">
        Welcome Back!
      </CardTitle>
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-lg font-bold">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <span className="text-sm text-red-500">
              {error != "" && "Invalid email or password"}
            </span>
            <div className="flex flex-row items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="my-4 flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      Remember me
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Link
                href="/forgot-password"
                className="text-sm font-semibold text-[#00ADB5]"
              >
                Forgot Password
              </Link>
            </div>
            <Button
              type="submit"
              className="h-9 w-full rounded-xl bg-[#00ADB5] text-sm font-semibold"
            >
              Login
            </Button>
          </form>
        </Form>
        <div className="my-4 text-center text-sm font-semibold">
          Don't have an account?
          <Link href="/register" className="text-[#00ADB5]">
            {" "}
            Register Now
          </Link>
        </div>
        <div className="relative mx-1 text-center">
          <span className="relative z-10 bg-white px-5 text-neutral-600">
            Or login with
          </span>
          <div className="absolute inset-x-0 top-1/2 h-px bg-neutral-600"></div>
        </div>
        <div className="mt-2 flex w-full justify-between gap-3">
          <FacebookButtonComponent />
          <GoogleButtonComponent />
        </div>
      </CardContent>
    </Card>
  );
};

export default SignInComponent;
