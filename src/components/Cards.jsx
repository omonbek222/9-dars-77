import React from "react";
import perlog from "../assets/perlog.png";
import map from "../assets/map.png";
import tel1 from "../assets/tel1.png";
import tel2 from "../assets/tel2.png";

const Cards = () => {
  return (
    <div className="max-w-7xl mx-auto my-12 px-4">
      <h1 className="text-[#2F70D9] font-bold text-[36px] md:text-[50px] leading-[100%] tracking-[3%] mb-12 text-center md:text-left">
        Ваши отзывы
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-full h-auto shadow py-6 px-6 rounded-2xl flex flex-col justify-between"
          >
            <img src={perlog} alt="Person" className="mx-auto mb-6 w-[90px] h-[90px]" />
            <h3 className="text-center mb-6 text-[#2F70D9] font-bold text-base leading-[100%] tracking-[3%]">
              Иван Иванов
            </h3>
            <p className="mb-6 font-normal text-base leading-[141%] tracking-[3%] text-[#686868]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <p className="text-center font-normal text-base leading-[141%] tracking-[3%] text-[#686868]">
              01.02 - 03.02
            </p>
          </div>
        ))}
      </div>

      <div className="relative mt-12">
        <img src={map} alt="Map" className="w-full rounded-lg" />

        <div className="w-full max-w-[335px] h-[355px] shadow rounded-2xl px-6 py-8 flex flex-col gap-6 bg-white absolute top-4 left-4 md:top-[34px] md:left-[75px]">
          <h3 className="text-[#2F70D9] font-bold text-[32px] md:text-[50px] leading-[100%] tracking-[3%]">Контакты</h3>
          <div>
            <p className="text-[#686868] font-bold text-lg md:text-[18px] leading-[140%] tracking-[5%]">Адрес:</p>
            <p className="text-[#686868] font-normal text-base leading-[141%] tracking-[3%]">Кайдаловская ул., 37, Чита</p>
          </div>
          <p className="text-black font-normal text-[24px] md:text-[30px] leading-[100%] tracking-[3%]">+7 (3022) 217856</p>
          <p className="text-black font-normal text-[24px] md:text-[30px] leading-[100%] tracking-[3%]">+79294830255</p>
          <div className="flex items-center gap-4">
            <img src={tel1} alt="Phone Icon 1" className="w-6 h-6" />
            <img src={tel2} alt="Phone Icon 2" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
