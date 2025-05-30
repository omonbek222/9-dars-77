import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-800">Гостиница Байкал</h1>
      <nav className="flex gap-6 text-blue-800 font-medium">
        <a href="#" className="hover:underline">Главная</a>
        <a href="#">О гостинице</a>
        <a href="#">Преимущества</a>
        <a href="#">Номера</a>
        <a href="#">Отзывы</a>
      </nav>
      <button className="bg-white border border-blue-700 text-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition">
        Обратный звонок
      </button>
    </header>
  );
}
