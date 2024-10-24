import Image from "next/image";
import { sofiaPro } from "./fonts";

export default function Loading() {
  return (
    <div className="m-auto mt-12 flex h-[80vh] w-[50vw] flex-col items-center justify-center gap-12 p-8">
      <Image
        src="/images/fetching.png"
        alt="loading"
        width={720}
        height={720}
      />
      <h1 className={`text-6xl ${sofiaPro.className} font-bold`}>
        Page Not Found.
      </h1>
    </div>
  );
}
