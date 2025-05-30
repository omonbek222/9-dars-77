import React from "react";
import heroImg from "../assets/header.png";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Гостиница <br /> Байкал
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-red-500 text-white px-6 py-3 rounded shadow hover:bg-red-600 transition">
              Забронировать
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={heroImg}
              alt="Hotel Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
