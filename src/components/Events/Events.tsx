"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, Users } from "lucide-react";
import { Container } from "@/shared/Container";
import { EventsModal } from "./EventsModal";
import { categoryIcons, categoryNames, upcomingEvents } from "./ConstEvents";

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  price: string;
  category: string;
  maxParticipants: number;
  currentParticipants: number;
}

export const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [formattedDates, setFormattedDates] = useState<Record<number, string>>(
    {}
  );

  useEffect(() => {
    const newFormatted: Record<number, string> = {};
    upcomingEvents.forEach((event) => {
      const date = new Date(event.date);
      newFormatted[event.id] = date.toLocaleDateString("uk-UA", {
        day: "numeric",
        month: "long",
        weekday: "long",
      });
    });
    setFormattedDates(newFormatted);
  }, []);

  const handleRegisterClick = (event: Event): void => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="events" className="bg-sage-green/10">
        <Container className="px-4 py-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-warm-brown mb-6">
              Акції та події
            </h3>
            <p className="text-xl text-dark-text max-w-2xl mx-auto">
              Приєднуйтесь до наших особливих заходів та відкривайте нові грані
              кавової культури
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event) => {
              const IconComponent =
                categoryIcons[event.category as keyof typeof categoryIcons];
              const progressPercentage =
                (event.currentParticipants / event.maxParticipants) * 100;

              return (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-warm-brown/10 rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-warm-brown" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-warm-brown mb-1">
                          {event.title}
                        </h4>
                        <span className="text-sm bg-sage-green/20 text-sage-green px-3 py-1 rounded-full">
                          {
                            categoryNames[
                              event.category as keyof typeof categoryNames
                            ]
                          }
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-dark-text mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-dark-text">
                      <Calendar className="w-4 h-4 mr-3 text-warm-brown" />
                      <span className="font-medium">
                        {formattedDates[event.id] ?? ""}
                      </span>
                    </div>

                    <div className="flex items-center text-dark-text">
                      <Clock className="w-4 h-4 mr-3 text-warm-brown" />
                      <span>
                        {event.time} • {event.duration}
                      </span>
                    </div>

                    <div className="flex items-center text-dark-text">
                      <Users className="w-4 h-4 mr-3 text-warm-brown" />
                      <span>
                        Учасників: {event.currentParticipants}/
                        {event.maxParticipants}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-dark-text">
                        Заповнення місць:
                      </span>
                      <span className="text-sm font-medium text-warm-brown">
                        {Math.round(progressPercentage)}%
                      </span>
                    </div>
                    <div className="w-full bg-cream rounded-full h-2">
                      <div
                        className="bg-sage-green h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-sage-green">
                        {event.price}
                      </span>
                    </div>

                    <button
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        event.currentParticipants >= event.maxParticipants
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-warm-brown text-warm-white hover:bg-warm-brown/90 shadow-lg hover:shadow-xl"
                      }`}
                      disabled={
                        event.currentParticipants >= event.maxParticipants
                      }
                      onClick={() => handleRegisterClick(event)}
                    >
                      {event.currentParticipants >= event.maxParticipants
                        ? "Місць немає"
                        : "Зареєструватись"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <EventsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={selectedEvent}
      />
    </>
  );
};
