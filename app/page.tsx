import About from "@/components/about/About";
import Certifications from "@/components/certifications/Certifications";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Experience from "@/components/experience/Experience";
import Hero_section from "@/components/home/Hero_section";
import Testimonial_Section from "@/components/testimonials/TestimonialSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero_section />
      <About />
      <Certifications />
      <Experience />
      <Testimonial_Section />
      <Footer />
    </div>
  );
}
