import React from 'react';
import heroImg from '../assets/header.png'; // Rasmni mos ravishda joylang

export default function Hero() {
  return (
    <section className="bg-white px-10 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Гостиница <br /> Байкал</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded shadow hover:bg-red-600 transition">
          Забронировать
        </button>
      </div>
      <img src={heroImg} alt="Hotel Illustration" className="w-full max-w-md" />
    </section>
  );
}
