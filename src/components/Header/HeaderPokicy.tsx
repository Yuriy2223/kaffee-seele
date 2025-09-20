"use client";

import Link from "next/link";
import { Logo } from "../Logo/Logo";
import { Container } from "@/shared/Container";
import { ArrowLeft } from "lucide-react";

export const HeaderPokicy = () => {
  return (
    <header className="sticky top-0 bg-warm-white/90 backdrop-blur-sm shadow-sm z-50">
      <Container className="py-4 px-4 max-md:px-1">
        <nav className="flex items-center justify-between">
          <Logo />
          <Link
            href="/"
            className="flex items-center space-x-2 px-4 py-2 max-md:px-1 max-md:spase-x-1 rounded-lg transition-all hover:bg-sage-green bg-muted text-warm-brown hover:text-warm-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="max-md:text-sm">На головну</span>
          </Link>
        </nav>
      </Container>
    </header>
  );
};
