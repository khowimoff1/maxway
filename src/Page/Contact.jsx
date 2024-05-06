import React from "react";
import { BiLogoTelegram } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="w-full md:pt-20 border-t">
      <div className="container w-full md:max-w-7xl md:min-h-[500px] min-h-[650px]  m-auto md:px-4 md:py-4 px-5 py-10">
        <h1 className="md:font-semibold font-medium md:mt-0 mt-8 text-3xl md:text-4xl">
          Bog'lanish
        </h1>
        <div className="md:w-[23%] md:p-8 py-4 px-2 pr-32 bg-[#5e6f94bb] rounded-xl mt-5 md:mt-10">
          <div className=" w-[100px] hidden md:flex bg-white rounded-lg p-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png"
              alt="wq"
            />
          </div>
          <h1 className="text-white leading-5 md:mt-5 font-semibold text-lg">
            Telegramda sharh qoldiring yoki savol bering
          </h1>
          <div className="flex mt-3 items-center">
            <BiLogoTelegram className="text-white text-2xl" />
            <a href="https://t.me/maxwaymasterfood_bot" className="text-white ">
              @maxwaymasterfood_bot
            </a>
          </div>
        </div>
        <h1 className="font-bold text-xl mt-5">Yagona aloqa markazi</h1>
        <h1 className="mt-2">+998712005400</h1>
      </div>
    </div>
  );
};

export default Contact;
