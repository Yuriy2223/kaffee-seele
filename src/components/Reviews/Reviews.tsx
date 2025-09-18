"use client";

import React, { useState, useCallback, useMemo } from "react";
import { StarRating } from "./StarRating";
import { ReviewOfTheWeek } from "./ReviewOfTheWeek";
import { ExistingReviews } from "./ExistingReviews";
import { ReviewForm } from "./ReviewForm";
import { existingReviews } from "./const";
import { toast } from "react-toastify";
import { Container } from "@/shared/Container";

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface ReviewFormData {
  name: string;
  rating: number;
  text: string;
  photo?: string;
}

export const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(existingReviews);

  const reviewStats = useMemo(() => {
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating =
      reviews.length > 0 ? (totalRating / reviews.length).toFixed(1) : "0.0";
    return { averageRating, totalReviews: reviews.length };
  }, [reviews]);

  const checkForDuplicate = useCallback(
    (reviewData: ReviewFormData): boolean => {
      return reviews.some(
        (review) =>
          review.name.toLowerCase() === reviewData.name.trim().toLowerCase() &&
          review.text.toLowerCase() === reviewData.text.trim().toLowerCase()
      );
    },
    [reviews]
  );

  const handleAddReview = useCallback(
    async (reviewData: ReviewFormData) => {
      try {
        if (checkForDuplicate(reviewData)) {
          toast.error("Схожий відгук вже існує. Спробуйте написати щось інше.");
          return;
        }

        await new Promise((resolve) => setTimeout(resolve, 1500));

        const newReview: Review = {
          id: Date.now(),
          name: reviewData.name.trim(),
          rating: reviewData.rating,
          text: reviewData.text.trim(),
          date: new Date().toISOString().split("T")[0],
        };

        setReviews((prev) => [newReview, ...prev]);

        toast.success(
          "Дякуємо за відгук! Ваш відгук допоможе нам стати ще кращими"
        );
      } catch {
        toast.error("Сталася помилка при додаванні відгуку. Спробуйте ще раз.");
      }
    },
    [checkForDuplicate]
  );

  return (
    <section id="reviews" className="bg-cream/20">
      <Container className="px-4 py-10">
        <div className="text-center mb-10">
          <h3 className="text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Відгуки наших гостей
          </h3>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center">
              <StarRating
                rating={Math.round(parseFloat(reviewStats.averageRating))}
              />
              <span className="ml-2 text-2xl font-bold text-warm-brown">
                {reviewStats.averageRating}
              </span>
              <span className="ml-2 text-dark-text">
                ({reviewStats.totalReviews} відгуків)
              </span>
            </div>
          </div>
          <p className="text-xl text-dark-text max-w-2xl mx-auto">
            Нам важлива ваша думка про нас
          </p>
        </div>
        <ReviewOfTheWeek />
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <ExistingReviews reviews={reviews} />
          <ReviewForm onSubmit={handleAddReview} />
        </div>
      </Container>
    </section>
  );
};
