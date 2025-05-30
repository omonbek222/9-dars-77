import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-800">
          Гостиница Байкал
        </h1>

        <nav className="hidden md:flex gap-6 text-blue-800 font-medium">
          <a href="#" className="hover:underline">Главная</a>
          <a href="#" className="hover:underline">О гостинице</a>
          <a href="#" className="hover:underline">Преимущества</a>
          <a href="#" className="hover:underline">Номера</a>
          <a href="#" className="hover:underline">Отзывы</a>
        </nav>

        <button className="hidden sm:block bg-white border border-blue-700 text-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition text-sm sm:text-base">
          Обратный звонок
        </button>

        <button
          className="md:hidden text-blue-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <nav className="flex flex-col gap-3 text-blue-800 font-medium">
            <a href="#" className="hover:underline">Главная</a>
            <a href="#" className="hover:underline">О гостинице</a>
            <a href="#" className="hover:underline">Преимущества</a>
            <a href="#" className="hover:underline">Номера</a>
            <a href="#" className="hover:underline">Отзывы</a>
            <button className="mt-3 w-full bg-white border border-blue-700 text-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition">
              Обратный звонок
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
