import React from "react";
import logo from "../assets/logo.svg";
import show from "../assets/show.png";
import tel1 from "../assets/tel1.png";
import tel2 from "../assets/tel2.png";

const Footer = () => {
  return (
    <div className="bg-[#282828]">
      <div className="max-w-7xl mx-auto mt-12 py-10 px-4">
        <div className="flex flex-col lg:flex-row flex-wrap lg:items-start justify-between gap-10">
          <div className="flex justify-center lg:justify-start">
            <img src={logo} alt="logo" className="w-[140px] h-auto" />
          </div>

          <ul className="flex flex-col gap-3 text-white text-center lg:text-left">
            <h3 className="text-[#2F70D9] font-bold mb-2">Навигация</h3>
            <li>Главная</li>
            <li>O гостинице</li>
            <li>Преимущества</li>
            <li>Номера</li>
            <li>Отзывы</li>
          </ul>

          <ul className="flex flex-col gap-4 items-center lg:items-start text-white">
            <h3 className="text-[#2F70D9] font-bold mb-2">Быстрая связь</h3>
            <button className="px-6 py-2 rounded-lg bg-red-700 w-full max-w-[200px]">Забронировать</button>
            <button className="px-6 py-2 rounded-lg border-2 border-[#2F70D9] text-[#2F70D9] w-full max-w-[200px]">
              Обратный звонок
            </button>
          </ul>

          <div className="flex justify-center lg:justify-start">
            <img src={show} alt="Image" className="w-10 h-10 mt-4" />
          </div>

          <ul className="flex flex-col gap-3 text-white text-center lg:text-left">
            <h3 className="text-[#2F70D9] font-bold mb-2">Контакты</h3>
            <p>Адрес:</p>
            <p>Кайдаловская ул., 37, Чита</p>
            <p>+7 (3022) 217856</p>
            <p>+79294830255</p>
            <div className="flex justify-center lg:justify-start items-center gap-4 mt-2">
              <img src={tel1} alt="Phone Icon 1" className="w-6 h-6" />
              <img src={tel2} alt="Phone Icon 2" className="w-6 h-6" />
            </div>
          </ul>
        </div>

        <p className="text-center pt-10 text-white text-sm">© Все права защищены.</p>
      </div>
    </div>
  );
};

export default Footer;