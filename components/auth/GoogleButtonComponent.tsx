"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { signIn } from "next-auth/react"

const GoogleButtonComponent = () => {
  return (
    <Button 
      className="flex flex-1 my-1 border rounded border-[#00ADB5] bg-[#FAFAFA]  justify-center items-center"
      onClick={() => signIn("google", {callbackUrl: "/content/home"})}
    >
      <Image 
        src="/images/auth/google-icon.svg" 
        alt="facebook"
        className="block"
        width={24}
        height={24}
      />
    </Button>
  )
}

export default GoogleButtonComponent