import React from 'react'
import logo from "../../public/logo.png";
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="border-t md:mt-20 mt-0">
      <div className="container mt-5 w-full md:max-w-7xl m-auto p-4">
        <div className="md:flex items-center justify-between  border-b pb-5 gap-10">
          <img
            src={logo}
            alt="logo"
            width={"50px"}
            height={"50px"}
            className="rounded-full"
          />
          <ul className="flex md:mt-0 mt-5 items-center md:gap-0 gap-4">
            <li className=" md:w-[5rem]">
              <NavLink
                to={"/branches"}
                className=" md:text-lg text-base hover:text-green-600"
              >
                Filiallar
              </NavLink>
            </li>
            <li className=" md:w-[8rem]">
              <NavLink to={"/about"} className="  md:text-lg text-base hover:text-green-600">
                Biz haqimizda
              </NavLink>
            </li>
            <li className=" md:w-[8rem] ml-2">
              <NavLink
                to={"/contact"}
                className=" md:text-lg text-base hover:text-green-600"
              >
                Bog'lanish
              </NavLink>
            </li>
          </ul>
          <div></div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <h1 className="text-gray-500 md:text-sm text-xs">
            © Delever 2020 - 2024 Barcha huquqlar himoyalangan
          </h1>
          <div className="flex items-center gap-2">
            <a href="https://www.instagram.com/">
              <FaInstagram className="text-lg text-gray-600 hover:text-black" />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebook className="text-lg text-gray-600 hover:text-black" />
            </a>
            <a href="https://www.youtobe.com/">
              <FaYoutube className="text-lg text-gray-600 hover:text-black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer