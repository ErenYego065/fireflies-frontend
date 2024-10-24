"use client";

import SignInComponent from "@/components/auth/SignInComponent";
import VerifyEmailComponent from "@/components/auth/VerifyEmailComponent";
import { useSearchParams } from "next/navigation";

const SignIn = () => {
  const qp = useSearchParams();
  const error = qp.get("error") || "";

  return <VerifyEmailComponent />;
};

export default SignIn;
