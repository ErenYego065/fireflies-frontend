"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { signIn } from "next-auth/react"

const FacebookButtonComponent = () => {
  return (
    <Button 
      className="flex flex-1 my-1 border rounded border-[#00ADB5] bg-[#FAFAFA]  justify-center items-center"
      onClick={() => signIn("facebook")}
    >
      <Image 
        src="/images/auth/facebook-icon.svg" 
        alt="facebook"
        className="block"
        width={24}
        height={24}
      />
    </Button>
  )
}

export default FacebookButtonComponent