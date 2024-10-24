import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const VerifyEmailPromptComponent = () => {
  const router = useRouter();
  return (
    <Card className="pt-5 font-[family-name:var(--font-nunito)] lg:w-[496px]">
      <CardContent className="flex flex-col items-center">
        <Image
          src="/images/auth/success.svg"
          alt="success"
          width={80}
          height={80}
        />
        <div className="mt-[10px] text-4xl font-bold text-[#2B2829]">
          Account Created
        </div>
        <Button
          onClick={() => router.push("/signin")}
          className="mt-10 h-9 w-full rounded-xl bg-[#00ADB5] font-semibold text-[#FAFAFA]"
        >
          Confirm
        </Button>
      </CardContent>
    </Card>
  );
};

export default VerifyEmailPromptComponent;
