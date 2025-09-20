"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Container } from "@/shared/Container";
import { CoffeeBackground } from "@/shared/CoffeeBackground";

const galleryImages = [
  {
    id: "main-hall",
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Головний зал кав'ярні",
    category: "interior",
  },
  {
    id: "barista-work",
    src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Баріста готує каву",
    category: "process",
  },
  {
    id: "reading-corner",
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Затишний куточок для читання",
    category: "interior",
  },
  {
    id: "coffee-beans",
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Свіжообсмажені кавові зерна",
    category: "process",
  },
  {
    id: "terrace",
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Терраса кав'ярні",
    category: "exterior",
  },
  {
    id: "happy-guests",
    src: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Щасливі гості насолоджуються кавою",
    category: "visitors",
  },
  {
    id: "coffee-machine",
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Робота з кавовою машиною",
    category: "process",
  },
  {
    id: "friends-chat",
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Друзі за розмовою",
    category: "visitors",
  },
  {
    id: "live-music",
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Вечір живої музики",
    category: "events",
  },
  {
    id: "coffee-tasting",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Дегустація нових сортів кави",
    category: "events",
  },
  {
    id: "latte-art-class",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Майстер-клас з латте-арту",
    category: "events",
  },
  {
    id: "birthday-celebration",
    src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Святкування дня народження",
    category: "events",
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", name: "Все" },
    { id: "interior", name: "Інтер'єр" },
    { id: "process", name: "Приготування" },
    { id: "exterior", name: "Екстер'єр" },
    { id: "visitors", name: "Відвідувачі" },
    { id: "events", name: "Події" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  }, []);

  const nextImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  }, [selectedImage, filteredImages.length]);

  const prevImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
  }, [selectedImage, filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedImage !== null) {
        closeModal();
      }
      if (event.key === "ArrowRight" && selectedImage !== null) {
        nextImage();
      }
      if (event.key === "ArrowLeft" && selectedImage !== null) {
        prevImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, filteredImages.length, closeModal, nextImage, prevImage]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <section id="gallery" className="relative bg-cream/40">
      <CoffeeBackground />
      <Container className="px-4 py-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Наша галерея
          </h3>
          <p className="text-xl text-dark-text max-w-2xl mx-auto">
            Зазирніть у світ затишку та смачної кави
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          role="tablist"
          aria-label="Фільтри галереї"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              role="tab"
              aria-selected={activeFilter === category.id}
              aria-controls="gallery-grid"
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-warm-brown text-warm-white shadow-lg"
                  : "bg-white text-dark-text hover:bg-warm-brown/10"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div
          id="gallery-grid"
          className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          role="grid"
          aria-label="Галерея зображень кав'ярні"
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              role="gridcell"
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(index);
                }
              }}
              tabIndex={0}
              aria-label={`Відкрити зображення: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-warm-brown/0 group-hover:bg-warm-brown/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Переглянути
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              <h2 id="modal-title" className="sr-only">
                {filteredImages[selectedImage].alt}
              </h2>
              <p id="modal-description" className="sr-only">
                Зображення {selectedImage + 1} з {filteredImages.length}.
                Використовуйте стрілки для навігації або ESC для закриття.
              </p>

              <button
                onClick={closeModal}
                aria-label="Закрити галерею"
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={prevImage}
                aria-label="Попереднє зображення"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                aria-label="Наступне зображення"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                <span aria-live="polite">
                  {selectedImage + 1} / {filteredImages.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
