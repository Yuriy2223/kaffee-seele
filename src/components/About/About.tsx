"use client";

import { Leaf, Heart, Users, Coffee } from "lucide-react";
import Image from "next/image";
import { Container } from "@/shared/Container";
import { TeamCarousel } from "./TeamCarousel";

export const About = () => {
  return (
    <section id="about" className="bg-cream/10">
      <Container className="px-4 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-warm-brown mb-8">
            Про нас
          </h3>
          <div className="mb-10">
            <h4 className="text-2xl font-semibold text-sage-green mb-6">
              Наша історія
            </h4>
            <p className="text-lg text-dark-text leading-relaxed mb-6">
              Все почалося з мрії створити справжній острівець спокою у вирі
              міста. У 2020 році, коли світ зупинився, ми зрозуміли, як важливо
              мати місце, де можна відчути себе як вдома. Тоді народилася ідея
              &quot;Кави для душі&quot;.
            </p>
            <p className="text-lg text-dark-text leading-relaxed">
              Кожен куточок нашої кав&apos;ярні створювався з любов&apos;ю та
              увагою до деталей. Ми обрали найкращі сорти кави з різних куточків
              світу, розробили унікальні рецепти десертів та створили атмосферу,
              де кожен відвідувач стає частиною нашої великої родини.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Image
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Баріста за роботою"
              width={400}
              height={300}
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />

            <Image
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Кавові зерна"
              width={400}
              height={300}
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />

            <Image
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Затишний куточок кав'ярні"
              width={400}
              height={300}
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
          </div>

          <div className="mb-10">
            <TeamCarousel />
          </div>

          <div className="mb-10">
            <h4 className="text-2xl font-semibold text-sage-green mb-8 text-center">
              Кавові історії
            </h4>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-warm-brown/10 rounded-full flex items-center justify-center mr-4">
                    <Coffee className="w-6 h-6 text-warm-brown" />
                  </div>
                  <h5 className="font-semibold text-lg text-warm-brown">
                    Походження еспресо
                  </h5>
                </div>
                <p className="text-dark-text text-sm leading-relaxed">
                  Знаєте, що еспресо з&apos;явився в Італії на початку 20
                  століття? Слово &quot;espresso&quot; означає
                  &quot;приготований на замовлення&quot;. Кожна наша чашка
                  еспресо готується персонально для вас за традиційною
                  італійською технологією.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sage-green/10 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-sage-green" />
                  </div>
                  <h5 className="font-semibold text-lg text-sage-green">
                    Мистецтво латте-арту
                  </h5>
                </div>
                <p className="text-dark-text text-sm leading-relaxed">
                  Латте-арт не просто прикраса — це спосіб передати емоції через
                  каву. Наші баристи вивчають це мистецтво роками, щоб кожна
                  ваша чашка капучино чи латте була не тільки смачною, а й
                  красивою.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-warm-brown/10 rounded-full flex items-center justify-center mr-4">
                    <Leaf className="w-6 h-6 text-warm-brown" />
                  </div>
                  <h5 className="font-semibold text-lg text-warm-brown">
                    Етіопські корені
                  </h5>
                </div>
                <p className="text-dark-text text-sm leading-relaxed">
                  Кава була відкрита в Етіопії понад 1000 років тому пастухом
                  Калді, який помітив, що його кози стають енергійнішими після
                  поїдання певних ягід. Ми використовуємо етіопські зерна в
                  наших авторських сумішах.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sage-green/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-sage-green" />
                  </div>
                  <h5 className="font-semibold text-lg text-sage-green">
                    Кава об&apos;єднує
                  </h5>
                </div>
                <p className="text-dark-text text-sm leading-relaxed">
                  У різних культурах кава — це символ гостинності та
                  спілкування. В Туреччині наречений повинен був навчитися
                  готувати каву для батьків нареченої. Ми продовжуємо цю
                  традицію створення зв&apos;язків через каву.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-semibold text-sage-green mb-4">
              Наші цінності
            </h4>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <Leaf className="w-8 h-8 text-sage-green mb-3" />
                <h5 className="font-semibold mb-2">Екологічність</h5>
                <p className="text-sm text-dark-text">
                  Використовуємо органічні інгредієнти та підтримуємо сталий
                  розвиток
                </p>
              </div>
              <div>
                <Heart className="w-8 h-8 text-warm-brown mb-3" />
                <h5 className="font-semibold mb-2">Якість</h5>
                <p className="text-sm text-dark-text">
                  Кожна чашка готується з любов&apos;ю та увагою до деталей
                </p>
              </div>
              <div>
                <Users className="w-8 h-8 text-sage-green mb-3" />
                <h5 className="font-semibold mb-2">Спільнота</h5>
                <p className="text-sm text-dark-text">
                  Створюємо простір для зустрічей та спілкування
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
