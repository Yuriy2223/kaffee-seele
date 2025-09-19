import { Instagram, Facebook, Send } from "lucide-react";
import { contactInfo } from "@/constants/contactInfo";

export const FooterSocial = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-lg sm:text-xl font-semibold text-warm-white border-b border-warm-white/30 pb-2 text-center">
        Слідкуйте за нами
      </h4>

      <div className="space-y-4">
        <p className="text-warm-white/80 text-sm sm:text-base leading-relaxed">
          Першими дізнавайтеся про новинки, акції та події у нашій кав&apos;ярні
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <a
            href={contactInfo.instagram}
            className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg p-3 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group flex items-center justify-center space-x-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Перейти на нашу сторінку в Instagram"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
            <span className="font-medium text-sm">Instagram</span>
          </a>

          <a
            href={contactInfo.facebook}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-3 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group flex items-center justify-center space-x-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Перейти на нашу сторінку в Facebook"
          >
            <Facebook className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
            <span className="font-medium text-sm">Facebook</span>
          </a>

          <a
            href={contactInfo.telegram}
            className="bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg p-3 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group flex items-center justify-center space-x-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написати нам в Telegram"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
            <span className="font-medium text-sm">Telegram</span>
          </a>
        </div>
      </div>
    </div>
  );
};
