"use client";

import { useState } from "react";
import { Heart, Star, Coffee, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

const teamMembers = [
  {
    id: 1,
    name: "Олександр",
    position: "Головний баріста",
    description:
      "Майстер кави з 8-річним досвідом. Створює неперевершені смакові композиції",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    specialty: "Еспресо і авторські суміші",
    favoriteCoffee: "Ефіопська Сідамо",
    quote: "Кожна чашка кави - це маленька історія",
    experience: "8 років",
    achievements: ["Чемпіон латте-арту 2022", "Сертифікований Q-грейдер"],
    hobbies: ["Подорожі", "Фотографія", "Дегустація кави"],
  },
  {
    id: 2,
    name: "Марія",
    position: "Шеф-кондитер",
    description:
      "Творець наших фірмових десертів. Кожне тістечко - це маленький витвір мистецтва",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    specialty: "Авторські десерти і випічка",
    favoriteCoffee: "Карамельний капучино",
    quote: "Солодощі роблять світ кращим",
    experience: "6 років",
    achievements: ["Кондитер року 2021", "Автор кулінарної книги"],
    hobbies: ["Малювання", "Садівництво", "Кулінарні експерименти"],
  },
  {
    id: 3,
    name: "Іван",
    position: "Менеджер залу",
    description:
      "Гарантує, що кожен гість відчує себе як вдома. Завжди готовий допомогти",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    specialty: "Гостинність та обслуговування",
    favoriteCoffee: "Класичний американо",
    quote: "Посмішка - найкращий інгредієнт сервісу",
    experience: "5 років",
    achievements: ["Найкращий менеджер 2020", "Експерт з клієнтського сервісу"],
    hobbies: ["Читання", "Велосипедні прогулянки", "Вивчення мов"],
  },
  {
    id: 4,
    name: "Софія",
    position: "Баріста-стажер",
    description:
      "Молодий і талановитий спеціаліст. Вивчає секрети кавового мистецтва",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    specialty: "Латте-арт і альтернативні методи заварювання",
    favoriteCoffee: "V60 з колумбійських зерен",
    quote: "Кожен день навчаюсь чомусь новому",
    experience: "2 роки",
    achievements: [
      "Студентка кавової академії",
      "Переможець місцевого конкурсу латте-арту",
    ],
    hobbies: ["Йога", "Музика", "Подорожі"],
  },
  {
    id: 5,
    name: "Андрій",
    position: "Обжарювальник кави",
    description:
      "Майстер обжарювання, який розкриває унікальний смак кожного зерна",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    specialty: "Обжарювання та створення сумішей",
    favoriteCoffee: "Світле обжарювання з Гватемали",
    quote: "Обжарювання - це мистецтво і наука одночасно",
    experience: "10 років",
    achievements: [
      "Сертифікований обжарювальник",
      "Консультант міжнародних кавових брендів",
    ],
    hobbies: ["Хімія", "Мотоцикли", "Рибалка"],
  },
];

export const TeamCarousel = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleCardFlip = (id: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div
      className="relative w-full max-w-7xl mx-auto"
      data-testid="team-carousel"
    >
      <div className="text-center mb-12">
        <h4 className="text-3xl font-serif font-bold text-sage-green mb-4">
          Наша команда
        </h4>
        <p className="text-lg text-dark-text max-w-2xl mx-auto">
          Познайомтесь з нашими талановитими співробітниками, які створюють
          магію кави щодня
        </p>
      </div>

      <div className="relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          speed={2000}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".team-swiper-button-next",
            prevEl: ".team-swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          className="team-swiper"
          breakpoints={{
            320: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            768: {
              slidesPerView: "auto",
              spaceBetween: 30,
            },
          }}
        >
          {teamMembers.map((member) => {
            const isFlipped = flippedCards.has(member.id);

            return (
              <SwiperSlide key={member.id} className="!w-80 !h-96 max-sm:!w-70">
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => handleCardFlip(member.id)}
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className={`w-full h-full transition-transform duration-700 relative ${
                      isFlipped ? "rotate-y-180" : ""
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={320}
                          height={240}
                          className="w-full h-60 object-cover"
                        />

                        <div className="absolute -top-2 left-4 w-16 h-4 bg-yellow-100/80 rotate-12 shadow-sm rounded-sm"></div>
                        <div className="absolute -top-2 right-4 w-12 h-4 bg-yellow-100/80 -rotate-12 shadow-sm rounded-sm"></div>

                        <div className="absolute top-3 right-3 bg-white/90 rounded-full p-1.5 shadow-md">
                          <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="text-center">
                          <h5 className="text-xl font-serif font-bold text-warm-brown mb-2">
                            {member.name}
                          </h5>
                          <p className="text-sage-green font-medium text-sm mb-3">
                            {member.position}
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {member.description}
                          </p>
                          <p className="text-xs italic text-warm-brown/80 font-light">
                            {member.quote}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 bg-gradient-to-br from-sage-green/10 to-warm-brown/10 rounded-2xl shadow-xl overflow-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <div className="p-6 h-full flex flex-col">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-4">
                            <Coffee className="w-8 h-8 text-white" />
                          </div>
                          <h5 className="text-xl font-serif font-bold text-warm-brown">
                            {member.name}
                          </h5>
                        </div>

                        <div className="space-y-3 text-sm flex-1">
                          <div>
                            <span className="font-semibold text-sage-green block mb-1">
                              Спеціальність:
                            </span>
                            <p className="text-gray-600 text-xs leading-relaxed">
                              {member.specialty}
                            </p>
                          </div>

                          <div>
                            <span className="font-semibold text-sage-green block mb-1">
                              Улюблена кава:
                            </span>
                            <p className="text-gray-600 text-xs">
                              {member.favoriteCoffee}
                            </p>
                          </div>

                          <div>
                            <span className="font-semibold text-sage-green block mb-1">
                              Досвід:
                            </span>
                            <p className="text-gray-600 text-xs">
                              {member.experience}
                            </p>
                          </div>

                          <div>
                            <span className="font-semibold text-sage-green block mb-1">
                              Досягнення:
                            </span>
                            <div className="space-y-1">
                              {member.achievements.map((achievement, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start text-xs"
                                >
                                  <Star className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600 leading-tight">
                                    {achievement}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <span className="font-semibold text-sage-green block mb-1">
                              Хобі:
                            </span>
                            <p className="text-gray-600 text-xs leading-relaxed">
                              {member.hobbies.join(", ")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button className="team-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
          <ChevronLeft className="w-6 h-6 text-warm-brown group-hover:text-sage-green transition-colors" />
        </button>

        <button className="team-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
          <ChevronRight className="w-6 h-6 text-warm-brown group-hover:text-sage-green transition-colors" />
        </button>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-500 italic">
          Клікніть на картку, щоб дізнатися більше про члена команди
        </p>
      </div>
    </div>
  );
};
