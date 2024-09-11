import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PrelineScript from "@/components/PrelineScript";
import "./globals.css";
import Announcement from "@/components/Announcement";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MBI Amanatul Ummah",
  description: "MBI Amanatul Ummah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      <PrelineScript />
    </html>
  );
}
