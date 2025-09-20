import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Atmosphere } from "@/components/Atmosphere/Atmosphere";
import { CoffeeBackground } from "@/shared/CoffeeBackground";
import { OurMenu } from "@/components/OurMenu/OurMenu";
import { About } from "@/components/About/About";
import { Gallery } from "@/components/Gallery/Gallery";
import { Reviews } from "@/components/Reviews/Reviews";
import { Footer } from "@/components/Footer/Footer";
import { CoffeeQuiz } from "@/components/CoffeeQuiz/CoffeeQuiz";
import { CoffeeOrigins } from "@/components/CoffeeOrigins/CoffeeOrigins";
import { Events } from "@/components/Events/Events";
import { ToastContainer } from "react-toastify";

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
      <Hero />
      <Atmosphere />
      <OurMenu />
      <About />
      <Gallery />
      <CoffeeQuiz />
      <CoffeeOrigins />
      <Events />
      <Reviews />

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
