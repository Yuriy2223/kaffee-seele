"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Coffee, ArrowRight, RotateCcw } from "lucide-react";
import { coffeeRecommendations, quizQuestions } from "./ConstCoffeeQuiz";
import { Container } from "@/shared/Container";

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
    icon: React.ComponentType<{ className?: string }>;
    weight: Record<string, number>;
  }[];
}

export interface CoffeeRecommendation {
  name: string;
  description: string;
  flavor: string;
  strength: string;
  price: string;
  image: string;
  characteristics: string[];
  perfectFor: string[];
}

export const CoffeeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const recommendation = useMemo(() => {
    if (!showResult || Object.keys(answers).length === 0) return null;

    const weights: Record<string, number> = {};

    quizQuestions.forEach((question) => {
      const selectedOption = question.options.find(
        (opt) => opt.id === answers[question.id]
      );
      if (selectedOption) {
        Object.entries(selectedOption.weight).forEach(([key, value]) => {
          weights[key] = (weights[key] || 0) + value;
        });
      }
    });

    let bestMatch = coffeeRecommendations[0];
    let bestScore = 0;

    coffeeRecommendations.forEach((coffee) => {
      let score = 0;

      if (weights.light && coffee.strength === "Легка-середня") score += 3;
      if (weights.balanced && coffee.strength === "Середня") score += 3;
      if (weights.strong && coffee.strength === "Висока") score += 3;
      if (weights.fruity && coffee.flavor.includes("фруктов")) score += 3;
      if (weights.nutty && coffee.flavor.includes("горіхов")) score += 3;
      if (weights.sweet && coffee.flavor.includes("карамельн")) score += 2;
      if (weights.premium && coffee.name.includes("Блю Маунтін")) score += 4;
      if (
        (weights.specialty && coffee.price.includes("180")) ||
        coffee.price.includes("195")
      )
        score += 2;

      if (score > bestScore) {
        bestScore = score;
        bestMatch = coffee;
      }
    });

    return bestMatch;
  }, [answers, showResult]);

  const handleAnswer = (questionId: number, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));

    if (currentQuestion < quizQuestions.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setIsAnimating(false);
  };

  const currentQ = quizQuestions[currentQuestion];

  return (
    <section
      id="coffee-quiz"
      className="bg-gradient-to-r from-sage-green/10 to-warm-brown/10"
    >
      <Container className="px-4 py-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-warm-brown mb-6">
            Знайдіть свою ідеальну каву
          </h3>
          <p className="text-xl text-dark-text max-w-2xl mx-auto">
            Пройдіть наш персональний тест і отримайте рекомендацію кави, яка
            ідеально підходить саме вам
          </p>
        </div>

        {showResult && recommendation ? (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 animate-slideUp">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-sage-green to-warm-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-warm-brown mb-4">
                Ваша ідеальна кава!
              </h3>
              <p className="text-dark-text">
                На основі ваших відповідей, ми підібрали для вас найкращий
                варіант
              </p>
            </div>

            <div className="bg-gradient-to-r from-sage-green/10 to-warm-brown/10 rounded-2xl p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Image
                  src={recommendation.image}
                  alt={recommendation.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />

                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-serif font-bold text-warm-brown mb-2">
                    {recommendation.name}
                  </h4>
                  <p className="text-dark-text mb-4 leading-relaxed">
                    {recommendation.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-sage-green">
                        Смак:
                      </span>
                      <p className="text-dark-text">{recommendation.flavor}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-sage-green">
                        Міцність:
                      </span>
                      <p className="text-dark-text">
                        {recommendation.strength}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-sage-green mb-2">
                    ₴{recommendation.price}
                  </div>
                  <button
                    className="bg-warm-brown text-warm-white px-6 py-3 rounded-full hover:bg-warm-brown/90 transition-colors"
                    aria-label={`Замовити ${recommendation.name}`}
                  >
                    Замовити
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h5 className="font-serif font-semibold text-lg text-warm-brown mb-4">
                Характеристики:
              </h5>
              <div className="flex flex-wrap gap-2 mb-4">
                {recommendation.characteristics.map((char, index) => (
                  <span
                    key={index}
                    className="bg-cream/50 text-dark-text px-3 py-1 rounded-full text-sm"
                  >
                    {char}
                  </span>
                ))}
              </div>

              <h5 className="font-serif font-semibold text-lg text-sage-green mb-4">
                Ідеально для:
              </h5>
              <div className="flex flex-wrap gap-2">
                {recommendation.perfectFor.map((use, index) => (
                  <span
                    key={index}
                    className="bg-sage-green/10 text-sage-green px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={restartQuiz}
                className="inline-flex items-center space-x-2 bg-sage-green text-warm-white px-6 py-3 rounded-full hover:bg-sage-green/90 transition-colors"
                aria-label="Пройти тест знову"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Пройти тест знову</span>
              </button>
            </div>
          </div>
        ) : (
          <div
            className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8"
            data-testid="coffee-quiz"
          >
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-dark-text">
                  Питання {currentQuestion + 1} з {quizQuestions.length}
                </span>
                <span className="text-sm text-sage-green font-medium">
                  {Math.round(
                    ((currentQuestion + 1) / quizQuestions.length) * 100
                  )}
                  %
                </span>
              </div>
              <div className="w-full bg-cream/50 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-sage-green to-warm-brown h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      ((currentQuestion + 1) / quizQuestions.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            <div
              className={`transition-all duration-300 ${
                isAnimating
                  ? "opacity-0 transform translate-x-4"
                  : "opacity-100 transform translate-x-0"
              }`}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-warm-brown/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Coffee className="w-8 h-8 text-warm-brown" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-warm-brown mb-4">
                  {currentQ.question}
                </h3>
              </div>

              <div className="space-y-4">
                {currentQ.options.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleAnswer(currentQ.id, option.id)}
                      className="w-full p-4 bg-warm-white border border-cream hover:border-sage-green rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                      aria-label={`Вибрати відповідь: ${option.text}`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-sage-green/10 group-hover:bg-sage-green group-hover:text-white rounded-full flex items-center justify-center transition-colors">
                          <IconComponent className="w-6 h-6 text-sage-green group-hover:text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="font-medium text-dark-text group-hover:text-warm-brown transition-colors">
                            {option.text}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-sage-green opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
