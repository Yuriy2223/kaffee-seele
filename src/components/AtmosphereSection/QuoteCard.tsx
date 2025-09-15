"use client";

import { useState, useEffect } from "react";
import { Coffee } from "lucide-react";

const quotes = [
  {
    text: "Кава - це мова сама по собі",
    author: "Жак Керуак",
  },
  {
    text: "Життя занадто коротке для поганої кави",
    author: "Народна мудрість",
  },
  {
    text: "Кава робить нас суворими, серйозними та філософськими",
    author: "Джонатан Свіфт",
  },
  {
    text: "Без моєї ранкової кави я схожий на висохлу козу",
    author: "Йоганн Себастьян Бах",
  },
  {
    text: "Кава - це спільна мова для всього світу",
    author: "Джон Стюарт",
  },
  {
    text: "Спершу кава, потім світ",
    author: "Девід Лінч",
  },
  {
    text: "Кава пробуджує душу і відкриває розум",
    author: "Арабське прислів'я",
  },
  {
    text: "Добра кава - це задоволення, погана кава - краща за відсутність кави",
    author: "Енцо Феррарі",
  },
];

export const QuoteCard = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-cream/50 transform transition-all duration-500">
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-sage-green to-warm-brown rounded-full flex items-center justify-center shadow-lg">
          <Coffee className="w-8 h-8 text-white" aria-hidden="true" />
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-serif font-semibold text-warm-brown mb-6 text-center">
        Мудрість в чашці кави
      </h3>

      <div className="text-center space-y-4">
        <blockquote className="text-dark-text leading-relaxed text-center">
          {currentQuote.text}
        </blockquote>

        <cite className="text-warm-brown font-medium text-center block">
          — {currentQuote.author}
        </cite>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <div
          className="w-2 h-2 bg-sage-green rounded-full animate-pulse"
          aria-hidden="true"
        ></div>
        <div
          className="w-2 h-2 bg-warm-brown rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
          aria-hidden="true"
        ></div>
        <div
          className="w-2 h-2 bg-sage-green rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
};
