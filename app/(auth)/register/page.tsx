"use client"

import RegisterComponent from "@/components/auth/RegisterComponent"
import VerifyEmailComponent from "@/components/auth/VerifyEmailComponent"
import { useState } from "react"
import VerifySuccessComponent from "@/components/auth/VerificationSuccessComponent"

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [verifySuccess, setVerifySuccess] = useState<boolean>(false);
  return (
    <>
      {
        verifySuccess ? <VerifySuccessComponent /> :
        !email ? 
          <RegisterComponent setEmail={setEmail} /> : 
          <VerifyEmailComponent email={email} setVerifySuccess={setVerifySuccess}/>
      }
    </>
  )
}

export default Register