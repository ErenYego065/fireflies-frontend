"use client";

import SignInComponent from "@/components/auth/SignInComponent";
import { useSearchParams } from "next/navigation";

const SignIn = () => {
  const qp = useSearchParams();
  const error = qp.get("error") || "";

  return <SignInComponent error={error} />;
};

export default SignIn;
