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
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import VerifySuccessComponent from "./VerificationSuccessComponent";

interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const RegisterSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters long"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  acceptTerms: yup
    .boolean()
    .required("You must accept the terms and conditions")
    .oneOf([true], "You must accept the terms and conditions"),
});

const RegisterComponent = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const form = useForm<RegisterFormData>({
    resolver: yupResolver(RegisterSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    const { fullName, email, password } = data;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role: "user",
            name: fullName,
            email,
            password,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast("Registration Successful", {
        type: "success",
      });

      router.push("/verify-email");
    } catch (error) {
      toast("Registration Failed", {
        type: "error",
      });

      console.error(error);
    }
  };

  return (
    <Card className="flex flex-col gap-2 px-5 py-0 pt-5 font-[family-name:var(--font-nunito)] lg:w-[496px]">
      <CardTitle className="text-[32px] text-neutral-900">Register</CardTitle>
      <CardContent className="mx-0 mb-0 px-0 pb-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }: any) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-lg font-bold">Fullname</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-lg"
                      placeholder="Enter your full name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }: any) => (
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
              render={({ field }: any) => (
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }: any) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-lg font-bold">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Re-Enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }: any) => (
                <FormItem className="my-1 flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    Check this box to proceed. By checking, you agree to our
                    <Link href="#" className="text-[#00ADB5]">
                      {" "}
                      Terms and Conditions
                    </Link>
                  </FormLabel>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="h-9 w-full rounded-xl bg-[#00ADB5] text-sm font-semibold"
            >
              Register
            </Button>
          </form>
        </Form>
        <div className="mt-2 text-sm font-semibold">
          Have an account?
          <Link href="/signin" className="text-[#00ADB5]">
            {" "}
            Login
          </Link>
        </div>
        <div className="relative mx-1 text-center">
          <span className="relative z-10 bg-white px-5 text-neutral-600">
            Or Register with
          </span>
          <div className="absolute inset-x-0 top-1/2 h-px bg-neutral-600"></div>
        </div>
        <div className="mt-2 flex flex-row gap-3">
          <FacebookButtonComponent />
          <GoogleButtonComponent />
        </div>
      </CardContent>
    </Card>
  );
};

export default RegisterComponent;
