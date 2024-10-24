import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  SocialDiscordIcon,
  SocialFacebookIcon,
  SocialInstagramIcon,
  SocialTwitterIcon,
  SocialXIcon,
} from "@/components/icons/socials";
import { Input } from "../ui/input";
import { toast } from "react-toastify";
import { CopyIcon } from "../icons/Icons";
import { ReactElement } from "react";

export const ShareDialog = ({ triggerRef }: any) => (
  <Dialog>
    <DialogTrigger asChild>{triggerRef}</DialogTrigger>
    <DialogContent className="bg-white">
      <DialogHeader className="flex flex-col gap-4">
        <DialogTitle className="text-center text-xl">
          Share this article
        </DialogTitle>
        <DialogDescription className="text-center text-black">
          If you like this article share is with your friend. they will thank
          you later
        </DialogDescription>
        <DialogDescription className="flex flex-row items-center justify-center gap-4 text-black">
          <a href="#">
            <SocialFacebookIcon />
          </a>
          <a href="#">
            <SocialTwitterIcon />
          </a>
          <a href="#">
            <SocialXIcon />
          </a>
          <a href="#">
            <SocialDiscordIcon />
          </a>
          <a href="#">
            <SocialInstagramIcon />
          </a>
        </DialogDescription>
        <DialogDescription className="flex flex-row items-center gap-2">
          <Input
            value="https://fireflies.com"
            className="w-full bg-white"
            readOnly={true}
          />
          <button
            className="rounded-lg border border-black/10 p-3"
            onClick={() => {
              navigator.clipboard.writeText("https://fireflies.com");
              toast("Copied to clipboard", {
                type: "success",
              });
            }}
          >
            <CopyIcon />
          </button>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);
