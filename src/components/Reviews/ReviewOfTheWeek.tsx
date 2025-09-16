import Image from "next/image";
import { Quote } from "lucide-react";
import { StarRating } from "./StarRating";

export const ReviewOfTheWeek = () => (
  <div className="mb-16">
    <div className="max-w-4xl mx-auto">
      <h4 className="text-2xl font-serif font-semibold text-sage-green mb-8 text-center">
        Відгук тижня
      </h4>
      <div className="bg-gradient-to-r from-warm-brown to-sage-green rounded-2xl p-8 text-center shadow-xl relative overflow-hidden">
        <div className="absolute top-4 right-4 text-warm-white/20">
          <Quote className="w-12 h-12" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
              alt="Марія П."
              width={64}
              height={64}
              className="w-16 h-16 rounded-full mr-4 border-4 border-warm-white shadow-lg"
            />
            <div className="text-left">
              <h5 className="text-xl font-serif font-semibold text-warm-white mb-1">
                Марія П.
              </h5>
              <div className="flex items-center">
                <div className="flex mr-2">
                  <StarRating rating={5} />
                </div>
                <span className="text-warm-white/80 text-sm">5 днів тому</span>
              </div>
            </div>
          </div>
          <blockquote className="text-xl text-warm-white font-medium mb-6 leading-relaxed italic">
            &ldquo;Кава для душі - це не просто назва, це справді місце, де моя
            душа знаходить спокій. Я приходжу сюди вже два роки, і кожного разу
            чую себе частиною цієї більшої родини. Кожен відвідувач - це друг,
            кожен баріста - майстер своєї справи. І кава... кава тут справді для
            душі.&rdquo;
          </blockquote>
          <div className="inline-block bg-warm-white/20 text-warm-white px-4 py-2 rounded-full text-sm font-medium">
            🏆 Відгук тижня
          </div>
        </div>
      </div>
    </div>
  </div>
);
