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

interface VerifyEmailComponentData {
  token: string;
}

interface VerifyEmailComponentFormData {
  password: string;
  confirmPassword: string;
  token: string;
}

const resetPasswordSchema = yup.object().shape({
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
  token: yup.string(),
});

const ResetPasswordComponent = ({ token }: VerifyEmailComponentData) => {
  const router = useRouter();

  const form = useForm<any>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: VerifyEmailComponentFormData) => {
    const { password } = data;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/users/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password, token }),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast("Password reset successfully", {
        type: "success",
      });

      router.push("/");
    } catch (e) {
      console.error(e);
      toast("Failed to verify email", {
        type: "error",
      });
    }
  };

  return (
    <Card className="flex flex-col gap-2 px-5 py-0 pt-5 font-[family-name:var(--font-nunito)] lg:w-[496px]">
      <CardTitle className="text-center text-[32px] font-bold text-neutral-900">
        Reset Password
      </CardTitle>
      <CardDescription className="text-sm font-semibold text-[#1E1E1E]">
        Please enter your new password. Password must be at least 8 characters,
        including an uppercase letter, a lowercase letter, a number, and a
        special character.
      </CardDescription>
      <CardContent className="mx-0 mb-0 mt-6 px-0 pb-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-lg font-bold text-[#0A0A0B]">
                    New Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-lg"
                      placeholder="Enter verification code"
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
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-lg font-bold text-[#0A0A0B]">
                    Confirm New Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-lg"
                      placeholder="Enter verification code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="mt-4 h-9 w-full rounded-xl bg-[#00ADB5] text-sm font-semibold"
            >
              Confirm
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ResetPasswordComponent;
