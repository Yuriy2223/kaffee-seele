"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          <div className="bg-muted-green rounded-3xl shadow-xl p-8 md:p-12 text-center border border-muted">
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto bg-destructive rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-12 w-12 text-warm-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-warm-brown mb-4">
              Упс! Щось пішло не так
            </h1>

            <p className="text-lg text-foreground/80 mb-2">
              Здається, сталася помилка під час завантаження сторінки
            </p>

            <p className="text-sm text-foreground/60 mb-8">
              Не хвилюйтесь, ми вже працюємо над вирішенням цієї проблеми
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={reset}
                className="flex items-center space-x-2 px-6 py-3 bg-cream hover:bg-warm-brown text-warm-brown hover:text-warm-white rounded-lg transition-all duration-300 min-w-[160px] justify-center"
              >
                <RefreshCw className="h-5 w-5" />
                <span>Спробувати знову</span>
              </button>

              <Link
                href="/"
                className="flex items-center space-x-2 px-6 py-3 bg-warm-brown/70 hover:bg-warm-brown text-warm-white rounded-lg transition-all duration-300 min-w-[160px] justify-center"
              >
                <Home className="h-5 w-5" />
                <span>На головну</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
