"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { contactInfo } from "@/constants/contactInfo";
import { LogoDecorative } from "../Logo/LogoDecorative";
import {
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Send,
  Facebook,
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 500);
  }, [onClose]);

  const handleLinkClick = useCallback(() => {
    setTimeout(() => {
      handleClose();
    }, 500);
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen, handleClose]);

  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-white/60 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          aria-describedby="contact-modal-desc"
        >
          <div
            ref={modalRef}
            className={`relative bg-warm-white rounded-3xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-hidden border-2 border-sage-green/30 transition-all duration-300 ${
              isVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-8"
            }`}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full text-warm-brown hover:text-sage-green transition-colors"
              aria-label="Закрити модальне вікно контактної інформації"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="p-8 pb-6 text-center transition-all duration-700 delay-100">
              <h2
                id="contact-modal-title"
                className="text-2xl font-bold bg-clip-text text-warm-brown mb-2 mt-3"
              >
                Зв&apos;яжіться з нами
              </h2>
              <p className="text-sage-green text-sm" id="contact-modal-desc">
                Ваша затишна кав&apos;ярня у самому серці міста
              </p>
            </div>

            <ul className="px-8 pb-8 space-y-4 overflow-y-auto">
              <li>
                <a
                  href={`tel:${contactInfo.phone?.replace(/[^\d+]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="group flex items-center gap-3 rounded-2xl p-4 bg-muted-green transition-all duration-300 hover:shadow-md"
                  aria-label={`Подзвонити за номером ${contactInfo.phone}`}
                >
                  <div className="p-4 rounded-full bg-sage-green transition-colors duration-300 group-hover:bg-warm-brown">
                    <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-warm-brown font-semibold mb-1 uppercase">
                      Телефон
                    </p>
                    <p className="text-lg text-warm-brown font-semibold transition-colors duration-300 group-hover:text-sage-green max-md:text-base">
                      {contactInfo.phone}
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="group flex items-center gap-3 rounded-2xl p-4 bg-muted-green transition-all duration-300 hover:shadow-md"
                  aria-label={`Написати на електронну пошту ${contactInfo.email}`}
                >
                  <div className="p-4 rounded-full bg-sage-green transition-colors duration-300 group-hover:bg-warm-brown">
                    <Mail className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-warm-brown font-semibold mb-1 uppercase">
                      Пошта
                    </p>
                    <p className="text-lg text-warm-brown font-semibold transition-colors duration-300 group-hover:text-sage-green max-md:text-base">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={contactInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="group flex items-center gap-3 rounded-2xl p-4 bg-muted-green transition-all duration-300 hover:shadow-md"
                  aria-label={`Переглянути адресу на карті: ${contactInfo.address}, ${contactInfo.city}`}
                >
                  <div className="p-4 rounded-full bg-sage-green transition-colors duration-300 group-hover:bg-warm-brown">
                    <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-warm-brown font-semibold mb-1 uppercase">
                      АДРЕСА
                    </p>
                    <p className="text-lg text-warm-brown font-semibold transition-colors duration-300 group-hover:text-sage-green max-md:text-base">
                      {contactInfo.address}
                      <br />
                      {contactInfo.city}
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <div className="group flex items-center gap-3 rounded-2xl p-4 bg-muted-green transition-all duration-300 hover:shadow-md">
                  <div className="p-4 rounded-full bg-sage-green transition-colors duration-300 group-hover:bg-warm-brown">
                    <Clock className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-warm-brown font-semibold mb-1 uppercase">
                      ГОДИНИ РОБОТИ
                    </p>
                    <p className="text-lg text-warm-brown font-semibold transition-colors duration-300 group-hover:text-sage-green max-md:text-base">
                      {contactInfo.workHoursWeek}
                    </p>
                  </div>
                </div>
              </li>

              <div className="bg-muted-green rounded-2xl p-6 text-center">
                <p className="text-sm font-semibold text-warm-brown mb-4">
                  Слідкуйте за нами в соціальних мережах
                </p>

                <div className="flex justify-center gap-4">
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-3 rounded-2xl text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                    aria-label="Перейти на нашу сторінку в Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>

                  <a
                    href={contactInfo.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-2xl text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                    aria-label="Написати нам в Telegram"
                  >
                    <Send className="w-6 h-6" />
                  </a>

                  <a
                    href={contactInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-2xl text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                    aria-label="Перейти на нашу сторінку в Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="transition-all duration-700 delay-700">
                <div className="bg-muted-green rounded-2xl p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <LogoDecorative />
                  </div>
                  <p className="text-3xl font-bold text-warm-brown mb-1">
                    Завітайте до нас!
                  </p>
                </div>
              </div>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
