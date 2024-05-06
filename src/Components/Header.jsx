import React, { useState } from "react";
import logo from "/logo.png";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import uz from "/uz.svg";
import eng from "/eng.svg";
import ru from "/ru.svg";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { MdDensityMedium, MdDone } from "react-icons/md";
import PhoneInput from "react-phone-input-2";

const Header = ({ allPrice, setLaguage, language }) => {
  const [lang, setLang] = useState(false);
  const [res, setRes] = useState(false);
  const [user, setUser] = useState(false);
  const [ResUser, setResUser] = useState(false);
  const [location, setLocation] = useState(false);

  const [locationBranches, setLocationBranches] = useState("beruniy");

  const [phoneVal, setPhoneVal] = useState("");

  return (
    <>
      <div className="fixed w-full bg-white z-30">
        <div className="lg:flex hidden justify-between items-center container w-full max-w-7xl m-auto p-4">
          <div className="flex items-center gap-10">
            <NavLink to={"/"}>
              <img
                src={logo}
                alt="logo"
                width={"50px"}
                height={"50px"}
                className="rounded-full"
              />
            </NavLink>
            <ul className="flex items-center nav">
              <li className=" w-[5rem] ">
                <NavLink to={"/"} className="text-lg hover:font-semibold">
                  Menyu
                </NavLink>
              </li>
              <li className=" w-[5rem]">
                <NavLink
                  to={"/branches"}
                  className=" text-lg hover:font-semibold"
                >
                  Filiallar
                </NavLink>
              </li>
              <li className=" w-[8rem]">
                <NavLink
                  to={"/about"}
                  className="  text-lg hover:font-semibold"
                >
                  Biz haqimizda
                </NavLink>
              </li>
              <li className=" w-[8rem] ml-2">
                <NavLink
                  to={"/contact"}
                  className=" text-lg hover:font-semibold"
                >
                  Bog'lanish
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setLocation(true)}
              className="flex text-left"
            >
              <div className="bg-gray-200 py-[10px] px-2 rounded-2xl">
                <FaLocationDot className=" text-purple-900 " />
              </div>
              <div className="ml-2">
                <h1 className="text-sm">olib ketish</h1>
                <h1 className="text-xs">улица Беруни, 47, Ташкент</h1>
              </div>
            </button>
            <div
              onClick={() => {
                lang ? setLang(false) : setLang(true);
              }}
              className="flex relative gap-2 cursor-pointer items-center bg-gray-200 ml-10 py-2 px-2 rounded-2xl"
            >
              {language === "uz" && (
                <img src={uz} alt="uz" width={"15px"} height={"15px"} />
              )}
              {language === "eng" && (
                <img src={eng} alt="eng" width={"15px"} height={"15px"} />
              )}
              {language === "ru" && (
                <img src={ru} alt="ru" width={"15px"} height={"15px"} />
              )}
              {!lang && <IoIosArrowDown />}
              {lang && <IoIosArrowUp />}
              {lang && (
                <div className=" w-[200px] z-10 absolute top-10 right-0 bg-white py-3 px-2 rounded-xl border shadow-lg">
                  <div
                    onClick={() => {
                      setLaguage("uz");
                    }}
                    className="flex z-10 items-center px-3 py-1 rounded-lg hover:bg-gray-300 justify-between"
                  >
                    <div className="flex">
                      <img src={uz} alt="uz" width={"25px"} height={"20px"} />
                      <h1 className="ml-5">O'zbekcha</h1>
                    </div>
                    {language === "uz" && <MdDone className="text-lg" />}
                  </div>
                  <div
                    onClick={() => {
                      setLaguage("ru");
                    }}
                    className="flex items-center px-3 py-1 rounded-lg hover:bg-gray-300 justify-between"
                  >
                    <div className="flex">
                      <img src={ru} alt="ru" width={"25px"} height={"20px"} />
                      <h1 className="ml-5">Russian</h1>
                    </div>
                    {language === "ru" && <MdDone className="text-lg" />}
                  </div>
                  <div
                    onClick={() => {
                      setLaguage("eng");
                    }}
                    className="flex items-center px-3 py-1 rounded-lg hover:bg-gray-300 justify-between"
                  >
                    <div className="flex">
                      <img src={eng} alt="en" width={"25px"} height={"20px"} />
                      <h1 className="ml-5">English</h1>
                    </div>
                    {language === "eng" && <MdDone className="text-lg" />}
                  </div>
                </div>
              )}
            </div>
            <NavLink
              to={"/shop"}
              className="bg-gray-200 py-2 px-2 rounded-2xl ml-2"
            >
              <FaShoppingCart className="text-purple-900" />
            </NavLink>
            <NavLink to={"/shop"}>
              <h1 className="mx-2">{allPrice} so'm</h1>
            </NavLink>
            <div
              onClick={() => {
                setUser(true);
              }}
              className="bg-gray-200 cursor-pointer py-2 px-2 rounded-2xl ml-2"
            >
              <FaUser className="text-purple-900" />
            </div>
            <div
              className={`${
                user ? "flex" : "hidden"
              } fixed w-full left-0 bottom-0 bg-opacity-40 bg-black h-full z-40  items-center justify-center`}
            >
              <div className="bg-white rounded-xl py-6 px-4 w-[25%]">
                <div className="flex justify-between">
                  <div></div>
                  <button
                    onClick={() => {
                      setUser(false);
                    }}
                    className="hover:bg-gray-200 font-bold text-lg px-3 rounded-full"
                  >
                    X
                  </button>
                </div>
                <h1 className="text-4xl font-bold text-center">
                  Tizimga kirish
                </h1>
                <h1 className=" opacity-75 text-center mt-5 mb-8">
                  Telefon raqamingiz bilan tizimga kiring
                </h1>
                <h1 className="text-base opacity-95">Telefon raqam</h1>
                <label className="border flex py-2 px-1 rounded-xl">
                  <PhoneInput
                    country={"uz"}
                    value={phoneVal}
                    onChange={setPhoneVal}
                  ></PhoneInput>
                </label>
                <button
                  typeof="submit"
                  className={`${
                    phoneVal.length > 11
                      ? "bg-purple-700"
                      : "bg-purple-300 cursor-default"
                  }  text-white rounded-lg py-2 w-full mt-5`}
                >
                  Kodni yuborish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full bg-white z-20 shadow-lg fixed py-2 px-5 items-center justify-between lg:hidden">
        <div className="flex gap-2 items-center">
          <button
            onClick={() => {
              setRes(true);
            }}
          >
            <MdDensityMedium className="text-xl" />
          </button>
          <img src={logo} alt="logo" width={"40px"} className="rounded-full" />
        </div>
        <div className="flex items-center gap-1">
          <NavLink to={"/shop"} className="bg-gray-200 py-2 px-2 rounded-2xl">
            <FaShoppingCart className=" text-purple-900 " />
          </NavLink>
          <NavLink to={"/shop"}>
            <h1 className="text-sm">{allPrice} so'm</h1>
          </NavLink>
        </div>
      </div>
      {res && (
        <div className="w-screen h-screen bg-black fixed z-30 bg-opacity-30">
          <div className="bg-white w-3/5 h-full">
            <div className="flex bg-gray-100 pl-5 pr-3 py-[14px] items-center justify-between">
              <h1 className=" font-medium text-lg">Menyu</h1>
              <button
                onClick={() => {
                  setRes(false);
                }}
                className="font-medium text-lg"
              >
                x
              </button>
            </div>
            <div
              onClick={() => {
                lang ? setLang(false) : setLang(true);
              }}
              className="flex relative justify-between gap-2 cursor-pointer items-center border mx-3 my-5 py-2 px-2 rounded-2xl"
            >
              {language === "uz" && (
                <div className="flex items-center gap-2">
                  <img
                    src={uz}
                    alt="uz"
                    width={"30px"}
                    className="rounded-lg"
                  />
                  <h1>O'zbekcha</h1>
                </div>
              )}
              {language === "eng" && (
                <div className="flex items-center gap-2">
                  <img
                    src={eng}
                    alt="eng"
                    width={"30px"}
                    className="rounded-lg"
                  />
                  <h1>English</h1>
                </div>
              )}
              {language === "ru" && (
                <div className="flex items-center gap-2">
                  <img
                    src={ru}
                    alt="ru"
                    width={"30px"}
                    className="rounded-lg"
                  />
                  <h1>Russian</h1>
                </div>
              )}
              {!lang && <IoIosArrowDown />}
              {lang && <IoIosArrowUp />}
              {lang && (
                <div className=" w-[200px] z-10 absolute top-10 right-0 bg-white py-3 px-2 rounded-xl border shadow-lg">
                  <div
                    onClick={() => {
                      setLaguage("uz");
                    }}
                    className="flex z-10 items-center px-3 py-1 rounded-lg hover:bg-gray-300 justify-between"
                  >
                    <div className="flex">
                      <img src={uz} alt="uz" width={"25px"} height={"20px"} />
                      <h1 className="ml-5">O'zbekcha</h1>
                    </div>
                    {language === "uz" && <MdDone className="text-lg" />}
                  </div>
                  <div
                    onClick={() => {
                      setLaguage("ru");
                    }}
                    className="flex items-center px-3 py-1 rounded-lg hover:bg-gray-300 justify-between"
                  >
                    <div className="flex">
                      <img src={ru} alt="ru" width={"25px"} height={"20px"} />
                      <h1 className="ml-5">Russian</h1>
                    </div>
                    {language === "ru" && <MdDone className="text-lg" />}
                  </div>
                  <div
                    onClick={() => {
                      setLaguage("eng");
                    }}
                    className="flex items-center px-3 py-1 rounded-lg hover:bg-gray-300 justify-between"
                  >
                    <div className="flex">
                      <img src={eng} alt="en" width={"25px"} height={"20px"} />
                      <h1 className="ml-5">English</h1>
                    </div>
                    {language === "eng" && <MdDone className="text-lg" />}
                  </div>
                </div>
              )}
            </div>
            <h1
              onClick={() => setResUser(true)}
              className="text-purple-800 font-semibold text-lg mx-4 mb-5"
            >
              Kirish
            </h1>
            <span className="block w-[90%] mx-4 h-[2px] bg-gray-300 mb-5"></span>
            <ul className=" px-1 flex flex-col navRes mb-5">
              <NavLink
                to={"/"}
                onClick={() => setRes(false)}
                className="text-base  hover:font-semibold hover:bg-gray-50 py-2 px-4 rounded-2xl"
              >
                Bosh sahifa
              </NavLink>
              <NavLink
                to={"/branches"}
                onClick={() => setRes(false)}
                className="hover:bg-gray-50 py-2 px-4 rounded-2xl text-base hover:font-semibold"
              >
                Filiallar
              </NavLink>
              <NavLink
                to={"/about"}
                onClick={() => setRes(false)}
                className=" hover:bg-gray-50 py-2 px-4 rounded-2xl text-base hover:font-semibold"
              >
                Biz haqimizda
              </NavLink>
              <NavLink
                onClick={() => setRes(false)}
                to={"/contact"}
                className="hover:bg-gray-50 py-2 px-4 rounded-2xl text-base hover:font-semibold"
              >
                Bog'lanish
              </NavLink>
            </ul>
            <div
              className={`${
                ResUser ? "flex" : "hidden"
              } fixed w-full left-0 top-0 bg-opacity-40 bg-black h-full z-40  items-center justify-center`}
            >
              <div className="bg-white rounded-xl py-6 px-4 w-[85%]">
                <div className="flex justify-between">
                  <div></div>
                  <button
                    onClick={() => {
                      setResUser(false);
                    }}
                    className="hover:bg-gray-200 font-bold text-lg px-3 rounded-full"
                  >
                    X
                  </button>
                </div>
                <h1 className="text-4xl font-bold text-center">
                  Tizimga kirish
                </h1>
                <h1 className=" opacity-75 text-center mt-5 mb-8">
                  Telefon raqamingiz bilan tizimga kiring
                </h1>
                <h1 className="text-base opacity-95">Telefon raqam</h1>
                <label className="border flex py-2 px-1 rounded-xl">
                  <PhoneInput
                    country={"uz"}
                    value={phoneVal}
                    onChange={setPhoneVal}
                  ></PhoneInput>
                </label>
                <button
                  typeof="submit"
                  className={`${
                    phoneVal.length > 11
                      ? "bg-purple-700"
                      : "bg-purple-300 cursor-default"
                  }  text-white rounded-lg py-2 w-full mt-5`}
                >
                  Kodni yuborish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {location && (
        <div className="w-full fixed top-0 h-screen z-30 flex items-center justify-center bg-opacity-50 bg-black">
          <div className="bg-white rounded-xl p-4 w-[70%]">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-2xl">
                Qabul qilib olish turini tanlang
              </h1>
              <button
                onClick={() => setLocation(false)}
                className="text-xl font-semibold"
              >
                X
              </button>
            </div>
            <h1 className="text-sm font-medium text-gray-500">
              Real vaqt va joylashuvga mos menyuni ko'rish uchun
            </h1>
            <div className="h-[500px] flex ">
              <div className="w-1/2 py-6 px-5 space-y-5">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      alert("Bizda hali dastavka mavjud emas");
                    }}
                    className="py-2 px-3 bg-[#fbfbfb] w-[48%] rounded-3xl text-gray-600"
                  >
                    Yetkazib berish
                  </button>
                  <button className="py-2 px-3 bg-[#c7e5ee] w-[48%] rounded-3xl text-blue-800">
                    Olib ketish
                  </button>
                </div>
                <button
                  onClick={() => setLocationBranches("beruniy")}
                  className={`${
                    locationBranches === "beruniy" && "bg-blue-300"
                  } border w-full text-start border-[#e2e0e0] hover:bg-blue-300 rounded-lg py-3 px-4`}
                >
                  <div className="flex items-center">
                    <FaLocationDot className="text-blue-600 mr-2" />
                    <h1 className="font-semibold text-lg">MAX WAY BERUNIY</h1>
                  </div>
                  <h1 className="text-gray-600 text-sm">
                    улица Беруни, 47, Ташкент
                  </h1>
                  <h1 className="font-medium text-green-800 mt-1">
                    Restoran soat 10:00 da ochiladi
                  </h1>
                </button>
                <button
                  onClick={() => setLocationBranches("atlas")}
                  className={`${
                    locationBranches === "atlas" && "bg-blue-300"
                  } border w-full text-start border-[#e2e0e0] hover:bg-blue-300 rounded-lg py-3 px-4`}
                >
                  <div className="flex items-center">
                    <FaLocationDot className="text-blue-600 mr-2" />
                    <h1 className="font-semibold text-lg">MAX WAY ATLAS</h1>
                  </div>
                  <h1 className="text-gray-600 text-sm">
                    улица Катартал, 28, Ташкент
                  </h1>
                  <h1 className="font-medium text-green-800 mt-1">
                    Restoran soat 10:00 da ochiladi
                  </h1>
                </button>
                <button
                  onClick={() => setLocationBranches("drujba")}
                  className={`${
                    locationBranches === "drujba" && "bg-blue-300"
                  } border w-full text-start border-[#e2e0e0] hover:bg-blue-300 rounded-lg py-3 px-4`}
                >
                  <div className="flex items-center">
                    <FaLocationDot className="text-blue-600 mr-2" />
                    <h1 className="font-semibold text-lg">MAX WAY - DRUJBA</h1>
                  </div>
                  <h1 className="text-gray-600 text-sm">
                    микрорайон Алмазар, 8/2, Чиланзарский район, Ташкент
                  </h1>
                  <h1 className="font-medium text-green-800 mt-1">
                    Restoran soat 10:00 da ochiladi
                  </h1>
                </button>
              </div>
              <div className="w-1/2 ">
                {locationBranches === "beruniy" && (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d187.21039327541564!2d69.2049286102818!3d41.344391483036695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sberuniy!5e0!3m2!1sen!2s!4v1714852747954!5m2!1sen!2s"
                    className="w-[90%] h-[96%] rounded-xl"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
                {locationBranches === "atlas" && (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.708828868213!2d69.21037227593298!3d41.293441071312024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bc7af9ea289%3A0x7364f8761707a212!2sMax%20Way!5e0!3m2!1sen!2s!4v1714856039628!5m2!1sen!2s"
                    className="w-[90%] h-[96%] rounded-xl"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
                {locationBranches === "drujba" && (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923.7405553264924!2d69.24263234551802!3d41.31079432045351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5138ada6ff%3A0x653a359a99791360!2sArca%20food!5e0!3m2!1sen!2s!4v1714856470494!5m2!1sen!2s"
                    className="w-[90%] h-[96%] rounded-xl"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
