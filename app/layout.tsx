import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const sofiaPro = localFont({
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

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fireflies • Travel Enlightened",
  description:
    "Using the official website of Fireflies®, you can book your accommodation, flight, transfer and tickets for local activities. At the same time, you can also arrange your car rental and travel insurance. Here, you can also find discounted accommodation offers that you can book at a lower price compared to the prices of another global booking portal. On fireflies.com, the official website of Fireflies®, more than 1,200,000 accommodation offers are available from all over the world. The Fireflies® trademark is the property of Swiss Halley AG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sofiaPro.variable} ${nunito.variable}`}>
        <ToastContainer position="bottom-right" />
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
