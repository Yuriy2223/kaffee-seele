"use client";

import { useState, useMemo, useCallback } from "react";
import { Coffee } from "lucide-react";
import { Container } from "@/shared/Container";
import { coffeeOrigins } from "./ConstCoffeeOrigins";
import { CoffeeBackground } from "@/shared/CoffeeBackground";

export const CoffeeOrigins = () => {
  const [selectedOrigin, setSelectedOrigin] = useState<number | null>(null);
  const [hoveredOrigin, setHoveredOrigin] = useState<number | null>(null);

  const selectedOriginData = useMemo(() => {
    return selectedOrigin
      ? coffeeOrigins.find((o) => o.id === selectedOrigin)
      : null;
  }, [selectedOrigin]);

  const handleOriginSelect = useCallback(
    (originId: number) => {
      setSelectedOrigin(selectedOrigin === originId ? null : originId);
    },
    [selectedOrigin]
  );

  const handleMarkerHover = useCallback((originId: number) => {
    setHoveredOrigin(originId);
  }, []);

  const handleMarkerLeave = useCallback(() => {
    setHoveredOrigin(null);
  }, []);

  return (
    <section
      id="coffee-origins"
      className="relative bg-white"
      aria-label="Карта походження нашої кави"
    >
      <CoffeeBackground />
      <Container className="px-4 py-10">
        <div className="text-center mb-10">
          <h3 className="text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Карта походження нашої кави
          </h3>
          <p className="text-xl text-dark-text max-w-2xl mx-auto">
            Дізнайтеся більше про походження кавових зерен, які ми
            використовуємо у наших напоях
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative mb-16">
            <div className="bg-gradient-to-b from-sage-green/10 to-warm-brown/10 rounded-2xl p-4 sm:p-8 shadow-lg">
              <div className="relative w-full h-64 sm:h-80 bg-cream/30 rounded-xl overflow-hidden">
                <svg
                  viewBox="0 0 100 60"
                  className="w-full h-full"
                  role="img"
                  aria-label="Карта світу з кавовими регіонами"
                >
                  <path
                    d="M10,20 Q20,15 30,25 Q40,30 35,40 Q25,45 15,35 Q5,30 10,20 Z"
                    fill="var(--sage-green)"
                    opacity="0.3"
                  />
                  <path
                    d="M45,15 Q55,10 70,20 Q80,25 75,35 Q70,40 60,35 Q50,30 45,15 Z"
                    fill="var(--sage-green)"
                    opacity="0.3"
                  />
                  <path
                    d="M20,45 Q35,40 45,50 Q40,55 25,52 Q15,50 20,45 Z"
                    fill="var(--sage-green)"
                    opacity="0.3"
                  />
                </svg>

                {coffeeOrigins.map((origin) => {
                  const IconComponent = origin.icon;
                  return (
                    <button
                      key={origin.id}
                      className={`absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-warm-brown focus:ring-offset-2 ${
                        hoveredOrigin === origin.id ||
                        selectedOrigin === origin.id
                          ? "bg-warm-brown text-warm-white scale-125 shadow-lg"
                          : "bg-warm-white text-warm-brown border-2 border-warm-brown hover:scale-110"
                      }`}
                      style={{
                        left: `${origin.coordinates.x}%`,
                        top: `${origin.coordinates.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      onMouseEnter={() => handleMarkerHover(origin.id)}
                      onMouseLeave={handleMarkerLeave}
                      onClick={() => handleOriginSelect(origin.id)}
                      aria-label={`Вибрати регіон ${origin.country}, ${origin.region}`}
                      aria-pressed={selectedOrigin === origin.id}
                      tabIndex={0}
                    >
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-1">
              <h4 className="text-xl sm:text-2xl font-semibold text-sage-green mb-4 sm:mb-6">
                Наші постачальники
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {coffeeOrigins.map((origin) => (
                  <button
                    key={origin.id}
                    className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-warm-brown focus:ring-offset-2 ${
                      selectedOrigin === origin.id
                        ? "bg-warm-brown text-warm-white shadow-lg"
                        : "bg-warm-white hover:bg-cream/50"
                    }`}
                    onClick={() => handleOriginSelect(origin.id)}
                    aria-label={`Переглянути деталі про ${origin.country}, ${origin.region}`}
                    aria-pressed={selectedOrigin === origin.id}
                    tabIndex={0}
                  >
                    <div className="flex items-center mb-2">
                      <origin.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-3" />
                      <h5 className="font-semibold text-sm sm:text-base">
                        {origin.country}
                      </h5>
                    </div>
                    <p className="text-xs sm:text-sm opacity-90">
                      {origin.region}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              {selectedOrigin ? (
                <div className="bg-warm-white rounded-2xl p-6 sm:p-8 shadow-lg">
                  {selectedOriginData && (
                    <>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-warm-brown/10 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
                          <selectedOriginData.icon className="w-6 h-6 sm:w-8 sm:h-8 text-warm-brown" />
                        </div>
                        <div>
                          <h4 className="text-2xl sm:text-3xl font-bold text-warm-brown mb-2">
                            {selectedOriginData.country}
                          </h4>
                          <p className="text-base sm:text-lg text-sage-green font-medium">
                            {selectedOriginData.region}
                          </p>
                        </div>
                      </div>

                      <p className="text-dark-text mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                        {selectedOriginData.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <div>
                          <h5 className="font-semibold text-base sm:text-lg text-warm-brown mb-4">
                            Характеристики смаку
                          </h5>
                          <ul className="space-y-2">
                            {selectedOriginData.characteristics.map(
                              (char, index) => (
                                <li
                                  key={index}
                                  className="flex items-center text-dark-text text-sm sm:text-base"
                                >
                                  <div className="w-2 h-2 bg-sage-green rounded-full mr-3 flex-shrink-0"></div>
                                  {char}
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-base sm:text-lg text-warm-brown mb-4">
                            Деталі вирощування
                          </h5>
                          <div className="space-y-3 text-dark-text text-sm sm:text-base">
                            <div className="flex justify-between">
                              <span className="font-medium">Висота:</span>
                              <span>{selectedOriginData.altitude}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Збір врожаю:</span>
                              <span className="text-right">
                                {selectedOriginData.harvest}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Обробка:</span>
                              <span className="text-right">
                                {selectedOriginData.processing}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Сорти:</span>
                              <span className="text-right">
                                {selectedOriginData.varieties.join(", ")}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-sage-green/10 rounded-xl">
                        <h5 className="font-semibold text-base sm:text-lg text-sage-green mb-4">
                          У наших напоях
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {selectedOriginData.ourBlends.map((blend, index) => (
                            <span
                              key={index}
                              className="bg-warm-brown text-warm-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                            >
                              {blend}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="bg-warm-white rounded-2xl p-6 sm:p-8 shadow-lg text-center">
                  <Coffee className="w-12 h-12 sm:w-16 sm:h-16 text-warm-brown/30 mx-auto mb-4 sm:mb-6" />
                  <h4 className="text-xl sm:text-2xl font-semibold text-warm-brown mb-4">
                    Оберіть регіон на карті
                  </h4>
                  <p className="text-dark-text text-sm sm:text-base">
                    Клікніть на маркер або назву країни, щоб дізнатися більше
                    про походження наших зерен
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
