import { Nunito } from "next/font/google";
import localFont from "next/font/local";

export const sofiaPro = localFont({
  src: [
    {
      path: "./fonts/sofiaPro/SofiaProBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/sofiaPro/SofiaProSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/sofiaPro/SofiaProRegular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  weight: "100, 900",
  variable: "--font-sofia",
});

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});
