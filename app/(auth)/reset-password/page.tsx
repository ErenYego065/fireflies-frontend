"use client";

import ResetPasswordComponent from "@/components/auth/ResetPasswordComponent";
import { useSearchParams } from "next/navigation";

const SignIn = () => {
  const qp = useSearchParams();
  const token = qp.get("token") || "";

  return <ResetPasswordComponent token={token} />;
};

export default SignIn;
