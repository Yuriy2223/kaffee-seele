import { Quote } from "lucide-react";
import { Review } from "./Reviews";
import { StarRating } from "./StarRating";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg relative">
    <Quote className="absolute top-4 right-4 text-warm-brown/20 w-8 h-8" />
    <div className="flex items-center mb-4">
      <div>
        <h5 className="font-semibold text-warm-brown">{review.name}</h5>
        <div className="flex items-center mt-1">
          <div>
            <StarRating rating={review.rating} />
          </div>
          <span className="ml-2 text-sm text-dark-text">{review.date}</span>
        </div>
      </div>
    </div>
    <p className="text-dark-text leading-relaxed">{review.text}</p>
  </div>
);
