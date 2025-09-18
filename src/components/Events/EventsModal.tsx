import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { X, User, Mail, Phone } from "lucide-react";
import { toast } from "react-toastify";
import { Event } from "./Events";

interface EventsModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Ім'я та прізвище обов'язкові")
    .min(2, "Ім'я повинно містити мінімум 2 символи")
    .max(50, "Ім'я не повинно перевищувати 50 символів")
    .matches(
      /^[а-яА-ЯіІїЇєЄґҐa-zA-Z\s']+$/,
      "Ім'я може містити тільки літери, пробіли, апострофи"
    ),

  email: yup
    .string()
    .required("Email обов'язковий")
    .email("Введіть коректний email")
    .max(100, "Email не повинен перевищувати 100 символів"),

  phone: yup
    .string()
    .required("Номер телефону обов'язковий")
    .matches(/^(\+38)?[0-9]{10}$/, "Введіть коректний номер телефону"),
});

export const EventsModal: React.FC<EventsModalProps> = ({
  isOpen,
  onClose,
  event,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setFocus,
    clearErrors,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setFocus("name"), 100);
    }
  }, [isOpen, setFocus]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent): void => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleClose = (): void => {
    reset();
    clearErrors();
    onClose();
  };

  const onSubmit = async (_data: FormData): Promise<void> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Реєстрація успішна! Очікуйте підтвердження на email");
      reset();
      onClose();
    } catch {
      toast.error("Виникла помилка. Спробуйте ще раз");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-warm-white/60 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-warm-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 id="modal-title" className="text-2xl font-bold text-warm-brown">
            Реєстрація на подію
          </h2>
          <button
            onClick={handleClose}
            onKeyDown={(e) => handleKeyDown(e, handleClose)}
            className="p-2 rounded-full text-warm-brown hover:text-sage-green transition-colors"
            aria-label="Закрити модальне вікно"
            tabIndex={0}
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="mb-6 p-4 rounded-lg bg-muted-green">
          <h3 className="font-semibold mb-2 text-warm-brown">{event?.title}</h3>
          <p className="text-sage-green">
            {event?.date &&
              new Date(event.date).toLocaleDateString("uk-UA", {
                day: "numeric",
                month: "long",
                weekday: "long",
              })}{" "}
            • {event?.time}
          </p>
          <p className="font-bold text-lg mt-2 text-sage-green">
            {event?.price}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-warm-brown"
            >
              <User className="w-4 h-4 inline mr-2" />
              Ім&apos;я та прізвище
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className={`w-full px-4 py-3 border-2 ${
                errors.name ? "border-red-500" : "border-gray-200"
              } bg-muted-green rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-brown transition-colors`}
              placeholder="Введіть ваше повне ім'я"
              tabIndex={0}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            <div className="h-5 mt-1">
              {errors.name && (
                <p
                  id="name-error"
                  className="text-sm text-red-600"
                  role="alert"
                >
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-warm-brown"
            >
              <Mail className="w-4 h-4 inline mr-2" />
              Email your@email.com
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className={`w-full px-4 py-3 border-2 ${
                errors.email ? "border-red-500" : "border-gray-200"
              } bg-muted-green rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-brown transition-colors`}
              placeholder="your@email.com"
              tabIndex={0}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            <div className="h-5 mt-1">
              {errors.email && (
                <p
                  id="email-error"
                  className="text-sm text-red-600"
                  role="alert"
                >
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-2 text-warm-brown"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Телефон +380XXXXXXXXX
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              className={`w-full px-4 py-3 border-2 ${
                errors.phone ? "border-red-500" : "border-gray-200"
              } bg-muted-green rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-brown transition-colors`}
              placeholder="+380 XX XXX XX XX"
              tabIndex={0}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            <div className="h-5 mt-1">
              {errors.phone && (
                <p
                  id="phone-error"
                  className="text-sm text-red-600"
                  role="alert"
                >
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={handleClose}
              onKeyDown={(e) => handleKeyDown(e, handleClose)}
              className="flex-1 px-6 py-3 border-2 border-gray-200 bg-muted-green rounded-full font-medium transition-all duration-300 hover:bg-warm-brown hover:text-cream"
              tabIndex={0}
              aria-label="Скасувати реєстрацію"
            >
              Скасувати
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 px-6 py-3 border-2 border-gray-200 rounded-full font-medium transition-all duration-300 ${
                isSubmitting
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-muted-green hover:bg-warm-brown hover:text-cream"
              }`}
              tabIndex={0}
              aria-label="Підтвердити реєстрацію"
            >
              {isSubmitting ? "Реєстрація..." : "Зареєструватись"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
