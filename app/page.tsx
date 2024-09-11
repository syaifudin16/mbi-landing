import Hero from "@/components/Hero";
import Objectives from "@/components/Objectives";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TestimonialsStats from "@/components/TestimonialsStats";
import Universities from "@/components/Universities";

export const metadata = {
  title: "MBI Amanatul Ummah",
  description:
    "Selamat Datang di MBI Amanatul Ummah. Madrasah Bertaraf Internasional Paling Unggul di Indonesia",
  keywords:
    "MA Unggulan, Amanatul Ummah, MBI, MBI Amanatul Ummah, Sekolah Menengah Atas, Pendidikan, Pesantren, Unggulan",
  author: "MBI Amanatul Ummah",
  robots: "index, follow",
  charset: "UTF-8",
  openGraph: {
    type: "website",
    url: "https://mbi-au.sch.id",
    title: "MBI Amanatul Ummah",
    description:
      "Selamat Datang di MBI Amanatul Ummah. Madrasah Bertaraf Internasional Paling Unggul di Indonesia",
    images: [
      {
        url: "https://mbi-au.sch.id/logo.png",
        width: 500,
        height: 500,
        alt: "Logo MBI Amanatul Ummah",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Objectives />
      <Services />
      <TestimonialsStats />
      <Universities />
    </>
  );
}
