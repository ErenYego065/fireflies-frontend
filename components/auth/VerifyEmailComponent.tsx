import {
  Card,
  CardContent,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from "@/components/ui/button"

interface VerifyEmailComponentData {
  email: string;
  setVerifySuccess: (success: boolean) => void;
}

interface VerifyEmailComponentFormData {
  code: string
}

const verifyCodeSchema = yup.object().shape({
  code: yup.string().max(6, "Invalida code").required()
})

const VerifyEmailComponent = ({ email, setVerifySuccess }: VerifyEmailComponentData) => {
  const form = useForm<VerifyEmailComponentFormData>({
    resolver: yupResolver(verifyCodeSchema)
  })

  const onSubmit = async (data: VerifyEmailComponentFormData) => {
    const { code } = data
    try {
      const response = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, code })
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      setVerifySuccess(true)
    } catch (e) {
      console.log("Verification failed")
    }
  }
  return (
    <Card
      className="px-5 py-0 pt-5 flex flex-col gap-2 font-[family-name:var(--font-nunito)]
        lg:w-[496px]"
    >
      <CardTitle className="font-bold text-center text-[32px] text-neutral-900">
        Verify Email
      </CardTitle>
      <CardDescription className="font-semibold text-sm text-[#1E1E1E]">
        We have sent a link to your email with the verification code.
      </CardDescription>
      <CardContent className="mx-0 px-0 mb-0 pb-5 mt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-lg font-bold text-[#0A0A0B]">Verification Code</FormLabel>
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
            <div className="flex flex-row justify-between items-center">
              <span className="text-sm font-bold text-[#0A0A0B]">Code sent!</span>
              <Button variant="link" className="text-sm font-bold text-[#00ADB5]">Resend</Button>
            </div>
            <Button type="submit" className="w-full mt-4 h-9 bg-[#00ADB5] text-sm font-semibold rounded-xl">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default VerifyEmailComponent