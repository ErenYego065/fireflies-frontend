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
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

interface VerifyEmailComponentFormData {
  code: string;
}

const verifyCodeSchema = yup.object().shape({
  code: yup.string().required("Verification code is required"),
});

const VerifyEmailComponent = () => {
  const router = useRouter();
  const param = useSearchParams();

  const token = param.get("token");
  const uid = param.get("uid");

  const form = useForm<VerifyEmailComponentFormData>({
    resolver: yupResolver(verifyCodeSchema),
  });

  if (token !== "" || token !== undefined) {
    form.setValue("code", token as string);
  }

  const onSubmit = async (data: VerifyEmailComponentFormData) => {
    const { code } = data;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/users/verify/${code}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      await signIn("credentials", {
        uid,
        callbackUrl: "/",
      });

      router.push("/signin");
    } catch (e) {
      console.log("Verification failed");
    }
  };

  return (
    <Card className="flex flex-col gap-2 px-5 py-0 pt-5 font-[family-name:var(--font-nunito)] lg:w-[496px]">
      <CardTitle className="text-center text-[32px] font-bold text-neutral-900">
        Verify Email
      </CardTitle>
      <CardDescription className="text-sm font-semibold text-[#1E1E1E]">
        We have sent a link to your email with the verification code.
      </CardDescription>
      <CardContent className="mx-0 mb-0 mt-6 px-0 pb-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-lg font-bold text-[#0A0A0B]">
                    Verification Code
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
            <div className="flex flex-row items-center justify-between">
              <span className="text-sm font-bold text-[#0A0A0B]">
                Code sent!
              </span>
              <Button
                variant="link"
                className="text-sm font-bold text-[#00ADB5]"
              >
                Resend
              </Button>
            </div>
            <Button
              type="submit"
              className="mt-4 h-9 w-full rounded-xl bg-[#00ADB5] text-sm font-semibold"
            >
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default VerifyEmailComponent;
