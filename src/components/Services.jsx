import React from "react";
import {
  FaWifi, FaRegClock, FaTv, FaParking, FaBroom, FaHotTub, FaUtensils, FaConciergeBell
} from "react-icons/fa";

const services = [
  {
    icon: <FaWifi className="text-3xl text-blue-800" />,
    title: "Бесплатный Wi-Fi",
    desc: "Быстрый интернет в номерах и лобби."
  },
  {
    icon: <FaRegClock className="text-3xl text-blue-800" />,
    title: "Круглосуточный доступ",
    desc: "Заезд и выезд в любое удобное время."
  },
  {
    icon: <FaTv className="text-3xl text-blue-800" />,
    title: "Телевизор",
    desc: "Современные телевизоры в каждом номере."
  },
  {
    icon: <FaParking className="text-3xl text-blue-800" />,
    title: "Парковка",
    desc: "Удобная и бесплатная парковка для гостей."
  },
  {
    icon: <FaBroom className="text-3xl text-blue-800" />,
    title: "Ежедневная уборка",
    desc: "Чистота в номерах каждый день."
  },
  {
    icon: <FaHotTub className="text-3xl text-blue-800" />,
    title: "Банно-прачечный комплекс",
    desc: "Все условия для вашего комфорта."
  },
  {
    icon: <FaUtensils className="text-3xl text-blue-800" />,
    title: "Собственная кухня",
    desc: "Возможность готовить самостоятельно."
  },
  {
    icon: <FaConciergeBell className="text-3xl text-blue-800" />,
    title: "Просторная столовая",
    desc: "Завтраки и обеды на любой вкус."
  },
];

export default function Services() {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Мы предлагаем</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-[#F6F6F6] p-6 rounded-xl shadow hover:shadow-md transition text-center">
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
