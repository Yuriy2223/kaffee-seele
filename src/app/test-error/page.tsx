"use client";

import { useState } from "react";

export default function TestError() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    // Це спричинить помилку і покаже error.tsx
    throw new Error("Тестова помилка для перевірки error.tsx");
  }

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Тестування Error Page</h1>
      <button
        onClick={() => setShouldError(true)}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Викликати помилку
      </button>
    </div>
  );
}
