import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: string;
  onRatingChange?: (rating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  onRatingChange,
  size = "w-5 h-5",
}) => {
  return (
    <div className="flex" role="img" aria-label={`Оцінка: ${rating} з 5 зірок`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${size} transition-colors ${
            i < rating ? "text-yellow-500 fill-current" : "text-gray-300"
          } ${onRatingChange ? "cursor-pointer hover:text-yellow-400" : ""}`}
          onClick={onRatingChange ? () => onRatingChange(i + 1) : undefined}
          aria-label={`${i + 1} ${i < rating ? "заповнена" : "порожня"} зірка`}
          role={onRatingChange ? "button" : "presentation"}
          tabIndex={onRatingChange ? 0 : -1}
          onKeyDown={
            onRatingChange
              ? (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onRatingChange(i + 1);
                  }
                }
              : undefined
          }
        />
      ))}
    </div>
  );
};
