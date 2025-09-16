import { ReviewCard } from "./ReviewCard";
import { Review } from "./Reviews";

interface ExistingReviewsProps {
  reviews: Review[];
}

export const ExistingReviews: React.FC<ExistingReviewsProps> = ({
  reviews,
}) => (
  <div className="lg:col-span-2">
    <h4
      className="text-2xl font-serif font-semibold text-sage-green mb-8 text-center"
      data-testid="existing-reviews-title"
    >
      Що кажуть наші гості
    </h4>
    <div className="grid md:grid-cols-2 gap-6">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  </div>
);
