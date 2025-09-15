import { Heart } from "lucide-react";

interface AtmosphereCardProps {
  className?: string;
}

export const AtmosphereCard = ({ className }: AtmosphereCardProps) => {
  return (
    <div
      className={`bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-cream/50 transform transition-all duration-500 ${className}`}
    >
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-sage-green to-warm-brown rounded-full flex items-center justify-center shadow-lg">
          <Heart className="w-8 h-8 text-white" aria-hidden="true" />
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-warm-brown mb-6 text-center">
        Наша унікальна атмосфера
      </h2>

      <div className="space-y-4">
        <p className="text-dark-text leading-relaxed text-center">
          У нас кожна чашка готується за авторськими рецептами наших досвідчених
          бариста. М&apos;яка джазова музика створює ідеальний фон для розмов,
          роботи чи просто насолоди моментом.
        </p>
        <p className="text-dark-text leading-relaxed text-center">
          Ми використовуємо виключно натуральні продукти та органічні
          інгредієнти, щоб кожен ковток приносив не тільки задоволення, а й
          користь для вашого здоров&apos;я.
        </p>
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
