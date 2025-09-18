import { useState } from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Send } from "lucide-react";
import { StarRating } from "./StarRating";
import { PhotoUpload } from "./PhotoUpload";
import { ReviewFormData } from "./Reviews";

interface ReviewFormProps {
  onSubmit: (formData: ReviewFormData) => Promise<void>;
}

const schemaReviewForm: yup.ObjectSchema<ReviewFormData> = yup.object({
  name: yup
    .string()
    .required("Вкажіть ваше ім'я")
    .min(5, "Ім'я має містити мінімум 5 символів"),
  rating: yup
    .number()
    .min(1, "Виберіть оцінку")
    .max(5, "Максимальна оцінка — 5")
    .required("Оцінка обов'язкова"),
  text: yup
    .string()
    .required("Введіть ваш відгук")
    .min(10, "Відгук має містити мінімум 10 символів"),
  photo: yup.string().optional(),
});

export const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [photoUrl, setPhotoUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReviewFormData>({
    resolver: yupResolver(schemaReviewForm),
    defaultValues: {
      name: "",
      rating: 0,
      text: "",
      photo: undefined,
    },
    mode: "onChange",
  });

  const onFormSubmit = async (data: ReviewFormData) => {
    const formDataWithPhoto: ReviewFormData = {
      ...data,
      photo: photoUrl || undefined,
    };
    await onSubmit(formDataWithPhoto);
    reset();
    setPhotoUrl("");
  };

  const handlePhotoUpload = (url: string) => {
    setPhotoUrl(url);
  };

  return (
    <div className="bg-warm-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
      <h4 className="text-2xl font-semibold text-center mb-6 text-sage-green">
        Залишити відгук
      </h4>

      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
        <PhotoUpload
          onPhotoUpload={handlePhotoUpload}
          currentPhoto={photoUrl}
          disabled={isSubmitting}
        />

        <div>
          <label
            htmlFor="reviewName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ваше ім&apos;я *
          </label>
          <input
            id="reviewName"
            {...register("name")}
            placeholder="Як до вас звертатися?"
            className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
          <p className="text-red-500 text-sm mt-1 h-5">
            {errors.name?.message || ""}
          </p>
        </div>

        <div>
          <label
            htmlFor="reviewText"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ваш відгук *
          </label>
          <textarea
            id="reviewText"
            {...register("text")}
            placeholder="Розкажіть про свої враження..."
            rows={4}
            className="flex min-h-[80px] w-full rounded-md border border-gray-300 px-3 py-2 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-warm-brown"
          />
          <p className="text-red-500 text-sm mt-1 h-5">
            {errors.text?.message || ""}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Оцінка *
          </label>
          <Controller
            name="rating"
            control={control}
            render={({ field }) => (
              <StarRating
                rating={field.value}
                onRatingChange={field.onChange}
              />
            )}
          />
          <p className="text-red-500 text-sm mt-1 h-5">
            {errors.rating?.message || ""}
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 rounded-md px-4 py-2 bg-warm-brown/70 text-warm-white hover:bg-warm-brown disabled:opacity-50 transition-colors"
        >
          {isSubmitting ? (
            "Надсилаємо..."
          ) : (
            <>
              <Send className="w-4 h-4" />
              Надіслати відгук
            </>
          )}
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Ваш відгук буде опублікований після модерації
      </p>
    </div>
  );
};
