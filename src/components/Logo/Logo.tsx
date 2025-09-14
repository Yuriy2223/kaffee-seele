"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coffee, Leaf } from "lucide-react";

export const Logo = () => {
  const pathname = usePathname();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (pathname === "/") {
    return (
      <button onClick={scrollTop} className="flex items-center space-x-3">
        <div
          className="w-12 h-12 bg-warm-brown rounded-full flex 
          items-center justify-center relative"
        >
          <Coffee className="text-warm-white w-6 h-6" />
          <div
            className="absolute -top-1 -right-1 w-4 h-4 bg-sage-green rounded-full
            flex items-center justify-center"
          >
            <Leaf className="text-warm-white w-2 h-2" />
          </div>
        </div>
        <h1 className="text-xl font-semibold text-warm-brown">Кава для душі</h1>
      </button>
    );
  }

  return (
    <Link href="/" className="flex items-center space-x-3">
      <div
        className="w-12 h-12 bg-warm-brown rounded-full flex 
        items-center justify-center relative"
      >
        <Coffee className="text-warm-white w-6 h-6" />
        <div
          className="absolute -top-1 -right-1 w-4 h-4 bg-sage-green rounded-full
          flex items-center justify-center"
        >
          <Leaf className="text-warm-white w-2 h-2" />
        </div>
      </div>
      <h1 className="text-xl font-semibold text-warm-brown">Кава для душі</h1>
    </Link>
  );
};
