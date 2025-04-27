import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mobicures - Crack Happens. We’ll Take Care of It.",
  description: "Get fast, reliable, and professional doorstep repair services for mobiles, laptops, tablets, TVs, and more. Book a certified technician to your home today — easy booking, affordable pricing, and trusted service you can rely on.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="  w-screen h-auto min-h-screen bg-gradient-to-r from-[#D0F0F7] to-[#1A1F71]" > */}
        {/* <div> */}
        <Navbar />
      
        {children}

    {/* </div> */}
        
      </body>
    </html>
  );
}
