import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Shop = ({ allPrice, setAllPrice }) => {
  const select = useSelector((e) => e.todos);
  const [productStore, setProductStore] = useState([]);
  const [products, setProducts] = useState([]);
  select.map((item) => {
    if (!productStore.includes(item.id)) {
      setProductStore([...productStore, item.id]);
      setProducts([...products, item]);
    }
  });
  const [user, setUser] = useState(false);

  return (
    <div className="container md:pt-20 w-full md:max-w-7xl min-h-[590px]  m-auto md:px-4 md:py-4 px-5 py-10">
      {select.length === 0 && (
        <div className="w-full flex items-center justify-center">
          <div className="border border-[#efeded] px-5 py-10 md:w-[45%] flex-col mt-20 rounded-lg shadow-md flex items-center justify-center">
            <img
              src="https://maxway.uz/images/empty_cart.svg"
              alt=""
              className="w-[100px]"
            />
            <h1 className="font-bold md:text-2xl text-lg mt-5">
              Sizning savatingiz hozircha bo'sh
            </h1>
            <h1 className="text-green-700 md:text-base text-sm">
              Buyurtma qilingan narsalar shu yerda paydo bo'ladi.
            </h1>
            <NavLink
              to={"/"}
              className="py-2 px-4 mt-10 bg-purple-800 text-white rounded-xl"
            >
              Menyuga qaytish
            </NavLink>
          </div>
        </div>
      )}
      {select.length > 0 && (
        <div className="md:mt-5 mt-10">
          <h1 className="font-bold md:text-4xl text-3xl">Savatcha</h1>
          <div className="flex md:flex-row flex-col justify-between">
            <div className="md:w-[70%] w-full">
              <div className=" w-full  rounded-xl flex flex-col gap-2 mt-8 border-[#efeded] border shadow-md">
                {products.map((items, index) => (
                  <div
                    className={`${
                      index === 0 ? "" : "border-t"
                    } md:py-8 py-3 md:px-8 px-6  flex  items-center justify-between`}
                    key={items.id}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={items.image}
                        alt="we"
                        className="w-[80px] rounded-lg"
                      />
                      <h1 className="font-medium  md:text-lg">{items.name}</h1>
                    </div>
                    <div className="md:flex text-right items-center gap-5">
                      <div
                        className={`flex rounded-3xl justify-between border  text-black`}
                      >
                        <button className="border-r flex items-center md:px-3 px-2 py-2 md:py-2">
                          <FaMinus />
                        </button>
                        <div className="flex items-center md:w-14 w-12 md:h-[35px] justify-center font-semibold">
                          {items.count}
                        </div>
                        <button className="border-l flex items-center px-3 py-1 md:py-2">
                          <FaPlus />
                        </button>
                      </div>
                      <h1 className="font-semibold md:text-lg">
                        {items.price.slice(0, items.price.length - 3)} so'm
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-[#efeded] py-5 md:w-[27%] h-[270px] px-5 border shadow-md mt-8 rounded-xl">
              <h1 className="font-bold text-xl">Umumiy</h1>
              <div className="flex items-center mt-3 justify-between">
                <h1 className="text-lg">Mahsulotlar</h1>
                <h1 className="text-lg">{allPrice} so'm</h1>
              </div>
              <div className="flex items-center mt-3 justify-between">
                <h1 className="text-lg">Yetkazib berish</h1>
                <h1 className="text-lg">0 so'm</h1>
              </div>
              <span className="flex w-full h-[1px] bg-gray-300 mt-5 mb-5"></span>
              <div className="flex items-center mt-3 justify-between">
                <h1 className="text-lg">To'lash uchun</h1>
                <h1 className="text-lg">{allPrice} so'm</h1>
              </div>
              <button
                onClick={() => setUser(true)}
                className="bg-purple-800 text-white w-full mt-5 rounded-2xl py-2"
              >
                To'lov sahifasiga o'tish
              </button>
            </div>
          </div>
          <div
            className={`${
              user ? "flex" : "hidden"
            } fixed w-full left-0 bottom-0 bg-opacity-40 bg-black h-full z-40  items-center justify-center`}
          >
            <div className="bg-white rounded-xl py-6 px-4 ">
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
              <h1 className="text-4xl font-bold text-center">Tizimga kirish</h1>
              <h1 className=" opacity-75 text-center mt-5 mb-8">
                Telefon raqamingiz bilan tizimga kiring
              </h1>
              <h1 className="text-base opacity-95">Telefon raqam</h1>
              <label className="border flex py-2 px-1 rounded-xl">
                <h1>+998</h1>
                <input
                  type="tel"
                  pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                  required
                  className="outline-none ml-2"
                />
              </label>
              <button className="bg-purple-700 text-white rounded-lg py-2 w-full mt-5">
                Kodni yuborish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
