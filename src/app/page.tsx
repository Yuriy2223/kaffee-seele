import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { AtmosphereSection } from "@/components/AtmosphereSection/AtmosphereSection";
import { CoffeeBackground } from "@/shared/CoffeeBackground";
import { OurMenu } from "@/components/OurMenu/OurMenu";
import { About } from "@/components/About/About";

export default function Home() {
  return (
    <>
      <CoffeeBackground
        backgroundColor="transparent"
        iconColor="#7c6440"
        opacity={5}
        size={30}
        spacing={400}
      />
      <Header />
      <main>
        <Hero />
        <AtmosphereSection />
        <OurMenu />
        <About />
      </main>
    </>
  );
}
