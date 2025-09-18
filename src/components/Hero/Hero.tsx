"use client";

import { Container } from "@/shared/Container";
import { useCallback, useState, useEffect } from "react";
import { Heart, Coffee } from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";

export const Hero = () => {
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showElements, setShowElements] = useState(false);
  const [showSteamHeart, setShowSteamHeart] = useState(false);
  const firstLine = "Ласкаво просимо до";
  const secondLine = "'Кава для душі'";
  const BACKGROUND_IMAGE_URL =
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080";

  useEffect(() => {
    if (currentIndex1 < firstLine.length) {
      const timeout = setTimeout(() => {
        setDisplayText1((prev) => prev + firstLine[currentIndex1]);
        setCurrentIndex1((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (currentIndex1 === firstLine.length) {
      const timeout = setTimeout(() => setShowSecondLine(true), 300);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex1, firstLine]);

  useEffect(() => {
    if (showSecondLine && currentIndex2 < secondLine.length) {
      const timeout = setTimeout(() => {
        setDisplayText2((prev) => prev + secondLine[currentIndex2]);
        setCurrentIndex2((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (showSecondLine && currentIndex2 === secondLine.length) {
      const timeout = setTimeout(() => {
        setShowElements(true);
        const heartTimeout = setTimeout(() => setShowSteamHeart(true), 500);
        return () => clearTimeout(heartTimeout);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex2, showSecondLine, secondLine.length]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleMenuClick = useCallback(() => {
    scrollToSection("menu");
  }, [scrollToSection]);

  const handleContactClick = useCallback(() => {
    scrollToSection("contact");
  }, [scrollToSection]);

  return (
    <section id="home" className="bg-cream/40">
      <Container className="flex items-center justify-center relative">
        <div
          className="h-[500px] md:h-[600px] lg:h-[800px] w-full flex flex-col items-center justify-center relative"
          style={{
            backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          role="banner"
          aria-label="Головна секція сайту кав'ярні"
        >
          <AnimatedLogo show={showElements} showSteam={showSteamHeart} />

          <div className="relative z-10 text-center text-warm-white px-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-shadow-lg">
              <div className="relative">
                <div>
                  {displayText1}
                  {currentIndex1 < firstLine.length && (
                    <span
                      className="animate-pulse text-warm-white"
                      aria-hidden="true"
                    >
                      |
                    </span>
                  )}
                </div>

                <div className="mt-2">
                  {displayText2}
                  {showSecondLine && currentIndex2 < secondLine.length && (
                    <span
                      className="animate-pulse text-warm-white"
                      aria-hidden="true"
                    >
                      |
                    </span>
                  )}
                </div>
              </div>
            </h1>

            <p
              className={`text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-100 transition-all duration-1000 delay-500 ${
                showElements
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Ваш острівець спокою у вирі міста
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center transition-all duration-1000 delay-1000 ${
                showElements
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <button
                onClick={handleMenuClick}
                className="relative bg-warm-brown/50 backdrop-blur-sm text-warm-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg transition-all duration-800 shadow-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-sage-green/50 focus:ring-offset-2 focus:ring-offset-transparent overflow-hidden group"
                aria-label="Переглянути меню кав'ярні"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sage-green to-warm-brown opacity-0 group-hover:opacity-100 transition-opacity duration-800 rounded-full" />
                <span className="relative z-10">Переглянути меню</span>
              </button>
              <button
                onClick={handleContactClick}
                className="relative bg-sage-green/50 backdrop-blur-sm text-warm-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg transition-all duration-800 shadow-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-warm-brown/50 focus:ring-offset-2 focus:ring-offset-transparent overflow-hidden group"
                aria-label="Перейти до контактної інформації"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-warm-brown to-sage-green opacity-0 group-hover:opacity-100 transition-opacity duration-800 rounded-full" />
                <span className="relative z-10">Зв&apos;язатися з нами</span>
              </button>
            </div>

            {showElements && (
              <>
                <div className="absolute top-40 right-10 animate-float hidden md:block">
                  <Heart className="w-5 h-5 text-white/70" aria-hidden="true" />
                </div>
                <div
                  className="absolute bottom-35 left-10 animate-float hidden md:block"
                  style={{ animationDelay: "1s" }}
                >
                  <Coffee
                    className="w-5 h-5 text-white/70"
                    aria-hidden="true"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
