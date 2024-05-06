import React, { useState } from "react";

const Branches = () => {
  const [branch,setBranch] = useState(true)
  return (
    <div className="w-full md:pt-10 border-t">
      <div className="container w-full md:max-w-7xl  m-auto md:px-4 md:py-4 px-5 py-10">
        <div className="flex md:flex-row flex-col gap-2 md:mb-0 mb-5  md:items-center md:justify-between mt-10">
          <h1 className="md:font-bold font-semibold text-3xl">Filiallar</h1>
          <div className="flex items-center md:justify-normal justify-between gap-1">
            <button
              onClick={() => setBranch(true)}
              className={`${
                branch
                  ? "bg-purple-800 text-white"
                  : "bg-gray-200 text-gray-800"
              } rounded-3xl md:w-32 w-[47%] h-10 font-semibold`}
            >
              Ro'yxat
            </button>
            <button
              onClick={() => setBranch(false)}
              className={`${
                !branch
                  ? "bg-purple-800 text-white"
                  : "bg-gray-200 text-gray-800"
              } rounded-3xl md:w-32 w-[47%] h-10 font-semibold`}
            >
              Xarita
            </button>
          </div>
        </div>
        {branch && (
          <div className=" md:space-y-10 space-y-5 md:mt-10">
            <div className="rounded-xl shadow-md md:w-1/2 border border-[#f2f0f0] py-3 px-3 md:py-4  md:px-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold md:text-xl text-lg">
                  MAX WAY BERUNIY
                </h1>
                <h1 className="text-green-400 md:font-medium font-normal">
                  22:00 gacha ochiq
                </h1>
              </div>
              <h1 className="md:text-sm text-xs">улица Беруни, 47, Ташкент</h1>
              <div className="block bg-gray-300 h-[1px] md:my-4 my-3"></div>
              <div className="flex items-center justify-between">
                <h1 className="text-gray-500 md:text-base text-sm">
                  Ish vaqti:
                </h1>
                <h1 className="text-gray-500 md:text-base text-sm">Telefon:</h1>
              </div>
              <div className="flex items-center justify-between md:mb-4 mb-2">
                <h1 className=" md:text-base text-sm">Du-Yak: 10:00-22:00</h1>
                <h1 className=" md:text-base text-sm">+998712005400</h1>
              </div>
            </div>
            <div className="rounded-xl shadow-md md:w-1/2 border border-[#f2f0f0] py-3 px-3 md:py-4  md:px-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold md:text-xl text-lg">MAX WAY ATLAS</h1>
                <h1 className="text-green-400 md:font-medium font-normal">
                  22:00 gacha ochiq
                </h1>
              </div>
              <h1 className="md:text-sm text-xs">
                улица Катартал, 28, Ташкент
              </h1>
              <div className="block bg-gray-300 h-[1px] md:my-4 my-3"></div>
              <div className="flex items-center justify-between">
                <h1 className="text-gray-500 md:text-base text-sm">
                  Ish vaqti:
                </h1>
                <h1 className="text-gray-500 md:text-base text-sm">Telefon:</h1>
              </div>
              <div className="flex items-center justify-between md:mb-4 mb-2">
                <h1 className=" md:text-base text-sm">Du-Yak: 10:00-22:00</h1>
                <h1 className=" md:text-base text-sm">+998712005400</h1>
              </div>
            </div>
            <div className="rounded-xl shadow-md md:w-1/2 border border-[#f2f0f0] py-3 px-3 md:py-4  md:px-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold md:text-xl text-lg">
                  MAX WAY - DRUJBA
                </h1>
                <h1 className="text-green-400 md:font-medium font-normal">
                  04:00 gacha ochiq
                </h1>
              </div>
              <h1 className="md:text-sm text-xs">
                микрорайон Алмазар, 8/2, Чиланзарский район, Ташкент
              </h1>
              <div className="block bg-gray-300 h-[1px] md:my-4 my-3"></div>
              <div className="flex items-center justify-between">
                <h1 className="text-gray-500 md:text-base text-sm">
                  Ish vaqti:
                </h1>
                <h1 className="text-gray-500 md:text-base text-sm">Telefon:</h1>
              </div>
              <div className="flex items-center justify-between md:mb-4 mb-2">
                <h1 className=" md:text-base text-sm">Du-Yak: 10:00-04:00</h1>
                <h1 className=" md:text-base text-sm">+998712005400</h1>
              </div>
            </div>
            <div className="rounded-xl shadow-md md:w-1/2 border border-[#f2f0f0] py-3 px-3 md:py-4  md:px-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold md:text-xl text-lg">
                  MAX WAY MEGA PLANET
                </h1>
                <h1 className="text-green-400 md:font-medium font-normal">
                  23:00 gacha ochiq
                </h1>
              </div>
              <h1 className="md:text-sm text-xs">улица Ниязбек, 1</h1>
              <div className="block bg-gray-300 h-[1px] md:my-4 my-3"></div>
              <div className="flex items-center justify-between">
                <h1 className="text-gray-500 md:text-base text-sm">
                  Ish vaqti:
                </h1>
                <h1 className="text-gray-500 md:text-base text-sm">Telefon:</h1>
              </div>
              <div className="flex items-center justify-between md:mb-4 mb-2">
                <h1 className=" md:text-base text-sm">Du-Yak: 10:00-23:00</h1>
                <h1 className=" md:text-base text-sm">+998712005400</h1>
              </div>
            </div>
            <div className="rounded-xl shadow-md md:w-1/2 border border-[#f2f0f0] py-3 px-3 md:py-4  md:px-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold md:text-xl text-lg">
                  MAX WAY AVIASOZLAR
                </h1>
                <h1 className="text-green-400 md:font-medium font-normal">
                  03:00 gacha ochiq
                </h1>
              </div>
              <h1 className="md:text-sm text-xs">улица Авиасозлар, 23</h1>
              <div className="block bg-gray-300 h-[1px] md:my-4 my-3"></div>
              <div className="flex items-center justify-between">
                <h1 className="text-gray-500 md:text-base text-sm">
                  Ish vaqti:
                </h1>
                <h1 className="text-gray-500 md:text-base text-sm">Telefon:</h1>
              </div>
              <div className="flex items-center justify-between md:mb-4 mb-2">
                <h1 className=" md:text-base text-sm">Du-Yak: 10:00-03:00</h1>
                <h1 className=" md:text-base text-sm">+998712005400</h1>
              </div>
            </div>
            <div className="rounded-xl shadow-md md:w-1/2 border border-[#f2f0f0] py-3 px-3 md:py-4  md:px-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold md:text-xl text-lg">
                  MAX WAY RISOVIY
                </h1>
                <h1 className="text-green-400 md:font-medium font-normal">
                  03:00 gacha ochiq
                </h1>
              </div>
              <h1 className="md:text-sm text-xs">
                Узбекистан, Ташкент, Алтынкульская улица, 10
              </h1>
              <div className="block bg-gray-300 h-[1px] md:my-4 my-3"></div>
              <div className="flex items-center justify-between">
                <h1 className="text-gray-500 md:text-base text-sm">
                  Ish vaqti:
                </h1>
                <h1 className="text-gray-500 md:text-base text-sm">Telefon:</h1>
              </div>
              <div className="flex items-center justify-between md:mb-4 mb-2">
                <h1 className=" md:text-base text-sm">Du-Yak: 10:00-03:00</h1>
                <h1 className=" md:text-base text-sm">+998712005400</h1>
              </div>
            </div>
            <div className="rounded-xl shadow-md md:w-1/2 border border-[#f2f0f0] py-3 px-3 md:py-4  md:px-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold md:text-xl text-lg">MAX WAY FONTAN</h1>
                <h1 className="text-green-400 md:font-medium font-normal">
                  03:00 gacha ochiq
                </h1>
              </div>
              <h1 className="md:text-sm text-xs">проспект Амира Темура</h1>
              <div className="block bg-gray-300 h-[1px] md:my-4 my-3"></div>
              <div className="flex items-center justify-between">
                <h1 className="text-gray-500 md:text-base text-sm">
                  Ish vaqti:
                </h1>
                <h1 className="text-gray-500 md:text-base text-sm">Telefon:</h1>
              </div>
              <div className="flex items-center justify-between md:mb-4 mb-2">
                <h1 className=" md:text-base text-sm">Du-Yak: 10:00-03:00</h1>
                <h1 className=" md:text-base text-sm">+998712005400</h1>
              </div>
            </div>
            <div className="rounded-xl shadow-md md:w-1/2 border border-[#f2f0f0] py-3 px-3 md:py-4  md:px-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold md:text-xl text-lg">MAX WAY MINOR</h1>
                <h1 className="text-green-400 md:font-medium font-normal">
                  03:00 gacha ochiq
                </h1>
              </div>
              <h1 className="md:text-sm text-xs">MaxWay</h1>
              <div className="block bg-gray-300 h-[1px] md:my-4 my-3"></div>
              <div className="flex items-center justify-between">
                <h1 className="text-gray-500 md:text-base text-sm">
                  Ish vaqti:
                </h1>
                <h1 className="text-gray-500 md:text-base text-sm">Telefon:</h1>
              </div>
              <div className="flex items-center justify-between md:mb-4 mb-2">
                <h1 className=" md:text-base text-sm">Du-Yak: 10:00-03:00</h1>
                <h1 className=" md:text-base text-sm">+998712005400</h1>
              </div>
            </div>
          </div>
        )}
        {!branch && (
          <div className="flex items-center h-[410px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23984.5852418641!2d69.183213!3d41.2855123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent!5e0!3m2!1sen!2s!4v1714857069281!5m2!1sen!2s"
              className="w-full h-full mt-14 rounded-lg"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Branches;
