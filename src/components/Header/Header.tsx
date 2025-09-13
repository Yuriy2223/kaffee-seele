"use client";

import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { MobileMenuButton } from "./MobileMenuButton";
import { Container } from "@/shared/Container";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-warm-white/95 backdrop-blur-sm shadow-sm z-50">
      <Container className="py-4">
        <nav className="flex items-center justify-between">
          <Logo />
          <DesktopNav onClick={scrollToSection} />
          <MobileMenuButton
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen(!isMenuOpen)}
          />

          {isMenuOpen && <MobileNav onClick={scrollToSection} />}
        </nav>
      </Container>
    </header>
  );
};
