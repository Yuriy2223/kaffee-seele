"use client";

import { useState, useEffect } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    const sections = document.querySelectorAll(
      '[id^="home"], [id^="menu"], [id^="about"], [id^="events"], [id^="coffee-quiz"], [id^="contact"]'
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return activeSection;
};
