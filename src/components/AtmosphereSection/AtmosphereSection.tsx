"use client";

import { useState, useEffect } from "react";
import { Container } from "@/shared/Container";
import { AtmosphereCard } from "./AtmosphereCard";
import { QuoteCard } from "./QuoteCard";
import { Statistics } from "./Statistics";

export const AtmosphereSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="atmosphere"
      className="bg-gradient-to-b from-cream/20 to-warm-white/30 py-10 relative overflow-hidden"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <AtmosphereCard />
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            <QuoteCard />
          </div>
        </div>

        <Statistics isVisible={isVisible} className="mt-16 delay-700" />
      </Container>
    </section>
  );
};
