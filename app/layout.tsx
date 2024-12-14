import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DarkMode from "@/components/shared/DarkMode";
import CurvedMenu from "@/components/shared/Menu";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "@BHAGESH_BANSODE",
  description: "Welcome to my Zone and Know about me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className="fixed z-[8989] px-20 w-full ">
        <DarkMode/>
        <CurvedMenu/>
        </div>
        {children}
      </body>
    </html>
  );
}
