import { Abril_Fatface, Nunito } from "next/font/google";

export const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-Abril_Fatface",
  display: "swap",
});

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-Nunito",
  preload: true,
  display: "swap",
});
