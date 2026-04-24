import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Vaibhav | Portfolio",
  description: "Senior Full Stack Developer & Designer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${plusJakartaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
