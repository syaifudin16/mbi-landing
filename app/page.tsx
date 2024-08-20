import Announcement from "@/components/Announcement";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import TestimonialsStats from "@/components/TestimonialsStats";
export default function Home() {
  return (
    <>
      <Announcement />
      <Header />
      <Hero />
      <Testimonials />
      <TestimonialsStats />
      <CallToAction />
      <Footer />
    </>
  );
}
