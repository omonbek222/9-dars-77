import React from "react";
import aboutImg from "../assets/about.png";

export default function About() {
  return (
    <section className="bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">О гостинице</h2>
          <p className="text-gray-700 mb-6">
            Мы находимся в самом центре города, вблизи Байкала. Наша гостиница
            предлагает уютные номера, высококлассный сервис и атмосферу уюта. Мы
            подходим как для туристов, так и для деловых поездок.
          </p>
          <button className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-900 transition">
            Подробнее
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={aboutImg}
            alt="About Hotel"
            className="w-full max-w-md rounded shadow"
          />
        </div>
      </div>
    </section>
  );
}
