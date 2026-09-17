import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Plans from "@/components/Plans";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Plans />
      </main>
      <Footer />
    </>
  );
}
