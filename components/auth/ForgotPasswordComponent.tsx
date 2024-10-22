"use client"

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

interface ForgotPasswordFormData {
  email: string;
}

const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
})

const ForgotPasswordComponent = () => {
  const form = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: ""
    }
  })

  const onSubmit = async (data: ForgotPasswordFormData) => {
    console.log("Forgot Password link clicked")
  }
  return (
    <Card
      className="px-5 py-0 pt-5 flex flex-col gap-2 font-[family-name:var(--font-nunito)]
        lg:w-[496px]"
    >
      <CardTitle className="text-[32px] text-neutral-900">
        Forgot Password
      </CardTitle>
      <CardDescription className="text-sm text-[#1E1E1E] font-semibold">
        Please enter your email address, we will send verification code to your email
      </CardDescription>
      <CardContent className="mx-0 px-0 mb-0 pb-5">
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
            <Button type="submit" className="w-full mt-[60px] h-9 bg-[#00ADB5] text-sm font-semibold rounded-xl">Send Code</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default ForgotPasswordComponent