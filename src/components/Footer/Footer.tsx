"use client";

import { Container } from "@/shared/Container";
import { FooterBrand } from "./FooterBrand";
import { FooterContacts } from "./FooterContacts";
import { FooterSocial } from "./FooterSocial";
import { FooterBottomBar } from "./FooterBottomBar";

export const Footer = () => {
  return (
    <footer className="bg-warm-brown">
      <Container className="text-warm-white py-10 px-6 max-sm:px-4">
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
