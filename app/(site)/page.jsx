// Page: 'Home Page'
import HeroSection from "./components/HeroSection";
import Heading from "./components/Heading";

export default function Home() {

  return (
    <section className="container py-10 md:py-[60px] lg:py-20">
      <HeroSection heading="testProjekt" tag="This is the homepage!" />
    </section>
  );
}
