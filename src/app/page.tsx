import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { AtmosphereSection } from "@/components/AtmosphereSection/AtmosphereSection";
import { CoffeeBackground } from "@/shared/CoffeeBackground";
import { OurMenu } from "@/components/OurMenu/OurMenu";
import { About } from "@/components/About/About";
import { Gallery } from "@/components/Gallery/Gallery";
import { Reviews } from "@/components/Reviews/Reviews";
import { Footer } from "@/components/Footer/Footer";
import { CoffeeQuiz } from "@/components/CoffeeQuiz/CoffeeQuiz";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CoffeeBackground
          backgroundColor="transparent"
          iconColor="#7c6440"
          opacity={5}
          size={30}
          spacing={400}
        />
        <Hero />
        <AtmosphereSection />
        <OurMenu />
        <About />
        <Gallery />
        <Reviews />
        <CoffeeQuiz />
      </main>
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
