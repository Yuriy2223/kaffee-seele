"use client";

import Link from "next/link";
import { Coffee, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          <div className="bg-sage-green/30 rounded-3xl shadow-xl p-8 md:p-12 text-center border border-muted">
            <div className="relative mb-8">
              <div className="relative">
                <h1 className="text-8xl md:text-9xl font-bold text-warm-brown select-none">
                  404
                </h1>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Coffee className="h-8 w-8 md:h-10 md:w-10 text-warm-brown" />
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-sage-green mb-4">
              Сторінку не знайдено
            </h2>

            <p className="text-lg text-foreground/80 mb-8">
              Ця сторінка десь загубилася, як кавове зерно в великому мішку
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/"
                className="flex items-center space-x-2 px-6 py-3 bg-warm-brown/70 hover:bg-warm-brown text-warm-white rounded-lg transition-all duration-300 min-w-[160px] justify-center"
              >
                <Home className="h-5 w-5" />
                <span>На головну</span>
              </Link>

              <button
                onClick={handleGoBack}
                className="flex items-center space-x-2 px-6 py-3 bg-cream hover:bg-warm-brown text-warm-brown hover:text-warm-white rounded-lg transition-colors duration-300 min-w-[160px] justify-center"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Назад</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
