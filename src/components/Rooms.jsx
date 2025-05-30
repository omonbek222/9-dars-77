import React from "react";
import { FaCheck } from "react-icons/fa";
import person from "../assets/person.png";
import person2 from "../assets/person2.png";

const rooms = [
  {
    type: "Стандартный номер",
    features: [
      "1 двуспальная кровать",
      "Санузел и душ",
      "Телевизор",
      "Wi-Fi",
    ],
    price: "1500₽ / ночь",
  },
  {
    type: "Улучшенный номер",
    features: [
      "2 односпальные кровати",
      "Санузел и ванна",
      "Телевизор и кондиционер",
      "Wi-Fi и завтрак",
    ],
    price: "2000₽ / ночь",
  },
];

export default function Rooms() {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Наши номера</h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
        <img
          src={person}
          alt="person"
          className="hidden lg:block w-1/4"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
          {rooms.map((room, index) => (
            <div key={index} className="border border-blue-200 rounded-xl p-6 shadow text-center">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">{room.type}</h3>
              <ul className="text-left mb-4 space-y-2">
                {room.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <FaCheck className="text-green-600" /> {feat}
                  </li>
                ))}
              </ul>
              <p className="text-red-600 font-bold text-lg">{room.price}</p>
            </div>
          ))}
        </div>

        <img
          src={person2}
          alt="person"
          className="hidden lg:block w-1/4"
        />
      </div>
    </section>
  );
}
