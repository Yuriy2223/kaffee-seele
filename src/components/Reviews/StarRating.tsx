import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: string;
  spacing?: string;
  onRatingChange?: (rating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  onRatingChange,
  size = "w-5 h-5",
  spacing,
}) => {
  return (
    <div
      className={`flex ${spacing ?? ""}`}
      role="img"
      aria-label={`Оцінка: ${rating} з 5 зірок`}
    >
      {Array.from({ length: 5 }, (_, i) => {
        const starValue = i + 1;
        const isActive = starValue <= rating;

        const handleClick = () => {
          if (onRatingChange) {
            onRatingChange(rating === starValue ? 0 : starValue);
          }
        };

        const handleKeyDown = (e: React.KeyboardEvent<SVGSVGElement>) => {
          if (!onRatingChange) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onRatingChange(rating === starValue ? 0 : starValue);
          }
        };

        return (
          <Star
            key={starValue}
            className={`${size} transition-colors ${
              isActive ? "text-yellow-500 fill-current" : "text-gray-300"
            } ${onRatingChange ? "cursor-pointer hover:text-yellow-400" : ""}`}
            onClick={onRatingChange ? handleClick : undefined}
            aria-label={`${starValue} ${
              isActive ? "заповнена" : "порожня"
            } зірка`}
            role={onRatingChange ? "button" : "presentation"}
            tabIndex={onRatingChange ? 0 : -1}
            onKeyDown={onRatingChange ? handleKeyDown : undefined}
          />
        );
      })}
    </div>
  );
};
