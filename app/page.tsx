import Hero from "@/components/Hero";
import Objectives from "@/components/Objectives";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TestimonialsStats from "@/components/TestimonialsStats";
import Universities from "@/components/Universities";
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
