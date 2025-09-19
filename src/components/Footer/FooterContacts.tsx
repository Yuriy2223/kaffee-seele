import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { contactInfo } from "@/constants/contactInfo";

export const FooterContacts = () => {
  return (
    <div className="md:col-span-1 space-y-6">
      <h4 className="text-lg sm:text-xl font-semibold text-warm-white border-b border-warm-white/30 pb-2 text-center">
        Контакти
      </h4>

      <div className="space-y-3">
        <div className="bg-warm-white/8 rounded-lg p-3 sm:p-4 border border-warm-white/10">
          <div className="flex items-start space-x-3 mb-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-sage-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="text-warm-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-warm-white font-semibold text-sm sm:text-base">
                {contactInfo.address}
              </p>
              <p className="text-warm-white/80 text-xs sm:text-sm">
                {contactInfo.city}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href={contactInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Переглянути адресу на карті: ${contactInfo.address}, ${contactInfo.city}`}
              className="w-full md:w-2xs bg-sage-green text-warm-white px-3 py-2 rounded-lg font-medium hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group text-sm"
            >
              <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Знайти нас</span>
            </a>
          </div>
        </div>

        <div className="bg-warm-white/8 rounded-lg p-3 sm:p-4 border border-warm-white/10 hover:bg-warm-white/12 transition-colors duration-200">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-warm-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="text-warm-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <a
                href={`tel:${contactInfo.phone?.replace(/[^\d+]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white font-semibold text-sm sm:text-base"
              >
                {contactInfo.phone}
              </a>
              <p className="text-warm-white/60 text-xs">
                Приймаємо дзвінки щодня
              </p>
            </div>
          </div>
        </div>

        <div className="bg-warm-white/8 rounded-lg p-3 sm:p-4 border border-warm-white/10 hover:bg-warm-white/12 transition-colors duration-200">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-warm-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="text-warm-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <a
                href={`mailto:${contactInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white font-semibold text-sm sm:text-base break-all"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-warm-white/8 rounded-lg p-3 sm:p-4 border border-warm-white/10 hover:bg-warm-white/12 transition-colors duration-200">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-warm-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="text-warm-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-warm-white font-semibold text-sm sm:text-base">
                {contactInfo.workHoursWeek}
              </p>
              <p className="text-warm-white/60 text-xs">
                Працюємо без вихідних
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
