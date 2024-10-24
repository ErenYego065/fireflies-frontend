"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const goToLogin = () => {
    router.push("/signin");
  };

  return (
    <>
      <div className="px-9 py-[18px] shadow-xl">
        <div className="flex flex-row items-center justify-between">
          <Navigations />
          <Image
            src="/images/layout/hamburger.svg"
            alt="hamburger"
            width={40}
            height={40}
            className="md:hidden"
          />
          <div className="hidden flex-row gap-5 md:flex">
            {!session && (
              <Button
                className="rounded-full border border-[#393E46] bg-white px-7 py-[13px] text-[14px] font-bold leading-[14px] text-[#393E46]"
                onClick={goToLogin}
              >
                Login
              </Button>
            )}
            <ConnectButton />
            {session && (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={session?.user?.image || ""} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() =>
                      signOut({ callbackUrl: "/", redirect: true })
                    }
                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

function Navigations() {
  const { data: session } = useSession()
  return (
    <div className="flex flex-row gap-8">
      <Link href="/content/home">
        <Image src="/images/layout/logo.svg" alt="logo" width={76} height={0} />
      </Link>
      <div className="hidden flex-row items-center gap-[30px] font-[family-name:var(--font-nunito)] text-sm font-bold text-[#5A616C] md:flex">
        {/* <Link
          href=""
          className="decoration-[#13AFB6] underline-offset-8 active:underline"
        >
          About
        </Link>
        <Link
          href="/content/rewards"
          className="decoration-[#13AFB6] underline-offset-8 active:underline"
        >
          Rewards
        </Link>
        <Link
          href=""
          className="decoration-[#13AFB6] underline-offset-8 active:underline"
        >
          Tokenomics
        </Link>
        <Link
          href="/content/blogs"
          className="decoration-[#13AFB6] underline-offset-8 active:underline"
        >
          Blogs
        </Link>
        <Link
          href="/content/glossary"
          className="decoration-[#13AFB6] underline-offset-8 active:underline"
        >
          Glossary
        </Link>
        <Link
          href="/content/help-center"
          className="decoration-[#13AFB6] underline-offset-8 active:underline"
        >
          Help Center
        </Link>
        <Link
          href="https://fireflies.com"
          target="blank"
          className="decoration-[#13AFB6] underline-offset-8 active:underline"
        >
          Fireflies.com
        </Link> */}
        <Link
          href=""
          className="decoration-[#13AFB6] underline-offset-8 active:underline"
        >
          About
        </Link>
        <Link
          href="/content/rewards"
          className="decoration-[#13AFB6] underline-offset-8 active:underline"
        >
          Rewards
        </Link>
        {!session && <Link
          href="#tokenomics"
          className="decoration-[#13AFB6] underline-offset-8 active:underline"
        >
          Tokenomics
        </Link>}
        {!session && <Link
          href="/content/glossary"
          className="decoration-[#13AFB6] underline-offset-8 active:underline"
        >
          Roadmap
        </Link>}
        <Link
          href="/content/blogs"
          className="decoration-[#13AFB6] underline-offset-8 active:underline"
        >
          Blogs
        </Link>
        {!session && <Link
          href="/content/help-center"
          className="decoration-[#13AFB6] underline-offset-8 active:underline"
        >
          FAQ
        </Link>}
        <Link
          href="https://fireflies.com"
          target="blank"
          className="decoration-[#13AFB6] underline-offset-8 active:underline"
        >
          Fireflies.com
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
