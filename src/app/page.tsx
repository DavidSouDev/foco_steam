import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Testimonials from "@/components/Testimonials";
import Plans from "@/components/Plans";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <About />
        <Featured />
        <Testimonials />
        <Plans />
      </main>
      <Footer />
    </>
  );
}
