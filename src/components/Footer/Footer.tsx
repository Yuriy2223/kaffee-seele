"use client";

import { Container } from "@/shared/Container";
import { FooterBrand } from "./FooterBrand";
import { FooterContacts } from "./FooterContacts";
import { FooterSocial } from "./FooterSocial";
import { FooterBottomBar } from "./FooterBottomBar";
import { CoffeeBackground } from "@/shared/CoffeeBackground";

export const Footer = () => {
  return (
    <footer className="relative bg-warm-brown">
      <CoffeeBackground
        backgroundColor="transparent"
        iconColor="#faf9f6"
        opacity={5}
        size={20}
        spacing={400}
      />
      <Container className="text-warm-white py-10 px-6 max-sm:px-4 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
          <div className="grid grid-cols-1 gap-8">
            <FooterBrand />
            <FooterSocial />
          </div>
          <FooterContacts />
        </div>

        <FooterBottomBar />
      </Container>
    </footer>
  );
};
