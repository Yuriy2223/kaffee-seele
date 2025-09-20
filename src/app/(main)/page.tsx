import { Hero } from "@/components/Hero/Hero";
import { Atmosphere } from "@/components/Atmosphere/Atmosphere";
import { OurMenu } from "@/components/OurMenu/OurMenu";
import { About } from "@/components/About/About";
import { Gallery } from "@/components/Gallery/Gallery";
import { Reviews } from "@/components/Reviews/Reviews";
import { CoffeeQuiz } from "@/components/CoffeeQuiz/CoffeeQuiz";
import { CoffeeOrigins } from "@/components/CoffeeOrigins/CoffeeOrigins";
import { Events } from "@/components/Events/Events";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
