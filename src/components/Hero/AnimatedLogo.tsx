import { Heart, Coffee } from "lucide-react";

interface AnimatedLogoProps {
  show: boolean;
  showSteam: boolean;
}

export const AnimatedLogo = ({ show, showSteam }: AnimatedLogoProps) => {
  return (
    <div
      className={`relative z-10 mb-6 transition-all duration-1000 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="relative">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-warm-brown/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border-2 border-white/20 transform transition-all duration-500">
          <Coffee
            className="w-8 h-8 md:w-10 md:h-10 text-white"
            aria-hidden="true"
          />
        </div>

        <div className="absolute -top-8 left-1/3 transform -translate-x-1/2">
          {showSteam && (
            <div className="relative">
              <div className="absolute">
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-8 bg-gradient-to-t from-white/40 to-transparent rounded-full animate-steam"
                    style={{
                      left: `${i * 3}px`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <div
                className="absolute -top-8 left-1 animate-fadeInHeart"
                style={{ animationDelay: "1.5s" }}
              >
                <Heart
                  className="w-6 h-6 text-sage-green fill-current animate-pulse"
                  aria-hidden="true"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
