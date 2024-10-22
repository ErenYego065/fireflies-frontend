"use client";

import Image from "next/image";
import { sofiaPro } from "./fonts";

export default function Error() {
  return (
    <div className="m-auto flex h-[100vh] w-full flex-col items-center justify-center gap-12">
      <Image
        src="/images/fetching.png"
        alt="loading"
        width={720}
        height={720}
      />
      <h1 className={`text-6xl ${sofiaPro.className} font-bold`}>
        Oops! Something went wrong.
      </h1>
    </div>
  );
}
