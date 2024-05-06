import { Json } from "../Components/Json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../Assets/productStore";
import { FaMinus, FaPlus } from "react-icons/fa";

const Home = ({ allPrice, setAllPrice }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const [jsonData, setJsonData] = useState([]);
  const dispatch = useDispatch();
  const select = useSelector((e) => e.todos);
  const [newCount, setNewCount] = useState(2);
  const [singleClick, setSingleClick] = useState([]);

  const addProductToCart = (product) => {
    let newProduct = { ...product };
    if (!singleClick.includes(product.id)) {
      setSingleClick([...singleClick, product.id]);
      newProduct = { ...product, count: 1 };
      setNewCount(2);
    } else {
      setNewCount(newCount + 1);
      newProduct = {
        ...product,
        count:
          [...select].reverse().find((item) => item.id === product.id).count +
          1,
      };
    }
    dispatch(addProduct(newProduct));

    setAllPrice((prev) => prev + +product.price);
  };
  const increaseClick = (product) => {
    if (allPrice > 0) {
      let newProduct = { ...product };
      setNewCount(newCount + 1);
      newProduct = {
        ...product,
        count:
          [...select].reverse().find((item) => item.id === product.id).count -
          1,
      };
      dispatch(addProduct(newProduct));

      setAllPrice((prev) => prev - product.price);
    }
    if (
      [...select].reverse().find((item) => item.id === product.id).count === 1
    ) {
      alert("siz tanlagan mahsulot olib tashlandi");
      setSingleClick(singleClick.filter((item) => item !== product.id));
      dispatch(deleteProduct(product.id));
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://6630f50fc92f351c03dbb627.mockapi.io/products",
          {
            method: "GET",
            headers: { "content-type": "application/json" },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container w-[96%] md:w-full md:pt-28 md:max-w-7xl  m-auto md:px-4 md:py-4 px-0 py-10">
      <Slider {...settings} className="w-[93%] left-5 md:w-[96%] lg:w-full">
        {Json.map((item) => (
          <div key={item.id}>
            <div className="flex items-center mt-10 md:mt-0 justify-center">
              <img
                src={item.image}
                alt="img"
                className="w-[100%] h-[200px] lg:w-[95%] lg:h-[500px] md:h-[400px] rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="md:mt-20 mt-5 md:p-0 p-4 flex flex-col gap-5">
        <h1 className="font-bold text-2xl">🎉 Aksiya 2+1</h1>
        <div className="flex items-center gap-5">
          {jsonData.slice(0, 2).map((product) => (
            <div className="md:w-[288px] rounded-lg shadow-lg" key={product.id}>
              <img
                onClick={() => addProductToCart(product)}
                src={product.image}
                alt="img"
                className="rounded-t-lg cursor-pointer md:h-[220px]"
              />
              <div className="px-4 py-2">
                <h1 className="md:text-lg text-sm font-medium md:font-semibold">
                  {product.name.length > 19
                    ? `${product.name.slice(0, 17)}...`
                    : product.name}
                </h1>
                <div className="md:flex hidden">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 54)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="md:hidden flex">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 35)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="flex md:flex-row flex-col gap-3 md:items-center justify-between">
                  <h1 className="font-bold text-xl">
                    {product.price}{" "}
                    <span className="text-sm font-normal">so'm</span>
                  </h1>
                  <button
                    onClick={() => addProductToCart(product)}
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "hidden"
                        : "flex"
                    } rounded-3xl hover:bg-purple-700 py-1 md:py-2 px-4 bg-purple-800 text-white`}
                  >
                    Qo'shish
                  </button>
                  <div
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "flex"
                        : "hidden"
                    } rounded-3xl justify-between border  text-black`}
                  >
                    <button
                      onClick={() => increaseClick(product)}
                      className="border-r flex items-center px-3 py-1 md:py-2"
                    >
                      <FaMinus />
                    </button>
                    <div className="flex items-center w-8 h-[37px] justify-center font-semibold">
                      {[...select]
                        .reverse()
                        .find((item) => item.id === product.id)?.count && (
                        <span>
                          {
                            [...select]
                              .reverse()
                              .find((item) => item.id === product.id).count
                          }
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => addProductToCart(product)}
                      className="border-l flex items-center px-3 py-1 md:py-2"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:mt-20 mt-5 md:p-0 p-4 flex flex-col gap-5">
        <h1 className="font-bold text-2xl">🍟🍔🥤Maxi BOX</h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 items-center gap-5">
          {jsonData.slice(2, 8).map((product) => (
            <div
              className="md:w-[288px]    rounded-lg shadow-lg"
              key={product.id}
            >
              <img
                onClick={() => addProductToCart(product)}
                src={product.image}
                alt="img"
                className="rounded-t-lg cursor-pointer md:h-[220px]"
              />
              <div className="px-4 py-2">
                <h1 className="md:text-lg text-sm font-medium md:font-semibold">
                  {product.name.length > 17
                    ? `${product.name.slice(0, 16)}...`
                    : product.name}
                </h1>
                <div className="md:flex hidden">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 54)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="md:hidden flex">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 25)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="flex md:flex-row flex-col gap-3 md:items-center justify-between">
                  <h1 className="font-bold text-xl">
                    {product.price}{" "}
                    <span className="text-sm font-normal">so'm</span>
                  </h1>
                  <button
                    onClick={() => addProductToCart(product)}
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "hidden"
                        : "flex"
                    } rounded-3xl hover:bg-purple-700 py-1 md:py-2 px-4 bg-purple-800 text-white`}
                  >
                    Qo'shish
                  </button>
                  <div
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "flex"
                        : "hidden"
                    } rounded-3xl justify-between border  text-black`}
                  >
                    <button
                      onClick={() => increaseClick(product)}
                      className="border-r flex items-center px-3 py-1 md:py-2"
                    >
                      <FaMinus />
                    </button>
                    <div className="flex items-center w-8 h-[37px] justify-center font-semibold">
                      {[...select]
                        .reverse()
                        .find((item) => item.id === product.id)?.count && (
                        <span>
                          {
                            [...select]
                              .reverse()
                              .find((item) => item.id === product.id).count
                          }
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => addProductToCart(product)}
                      className="border-l flex items-center px-3 py-1 md:py-2"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:mt-20 mt-5 md:p-0 p-4 flex flex-col gap-5">
        <h1 className="font-bold text-2xl">🥪Klab-Sendvich</h1>
        <div className="md:flex grid grid-cols-2 items-center gap-5">
          {jsonData.slice(8, 10).map((product) => (
            <div
              className="md:w-[288px]    rounded-lg shadow-lg"
              key={product.id}
            >
              <img
                onClick={() => addProductToCart(product)}
                src={product.image}
                alt="img"
                className="rounded-t-lg cursor-pointer md:h-[220px]"
              />
              <div className="px-4 py-2">
                <h1 className="md:text-lg text-sm font-medium md:font-semibold">
                  {product.name.length > 17
                    ? `${product.name.slice(0, 16)}...`
                    : product.name}
                </h1>
                <div className="md:flex hidden">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 54)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="md:hidden flex">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 30)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="flex md:flex-row flex-col gap-3 md:items-center justify-between">
                  <h1 className="font-bold text-xl">
                    {product.price}{" "}
                    <span className="text-sm font-normal">so'm</span>
                  </h1>
                  <button
                    onClick={() => addProductToCart(product)}
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "hidden"
                        : "flex"
                    } rounded-3xl hover:bg-purple-700 py-1 md:py-2 px-4 bg-purple-800 text-white`}
                  >
                    Qo'shish
                  </button>
                  <div
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "flex"
                        : "hidden"
                    } rounded-3xl justify-between border  text-black`}
                  >
                    <button
                      onClick={() => increaseClick(product)}
                      className="border-r flex items-center px-3 py-1 md:py-2"
                    >
                      <FaMinus />
                    </button>
                    <div className="flex items-center w-8 h-[37px] justify-center font-semibold">
                      {[...select]
                        .reverse()
                        .find((item) => item.id === product.id)?.count && (
                        <span>
                          {
                            [...select]
                              .reverse()
                              .find((item) => item.id === product.id).count
                          }
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => addProductToCart(product)}
                      className="border-l flex items-center px-3 py-1 md:py-2"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:mt-20 mt-5 md:p-0 p-4 flex flex-col gap-5">
        <h1 className="font-bold text-2xl">🌯Lavash</h1>
        <div className="md:flex grid grid-cols-2 items-center gap-5">
          {jsonData.slice(10, 12).map((product) => (
            <div
              className="md:w-[288px]    rounded-lg shadow-lg"
              key={product.id}
            >
              <img
                onClick={() => addProductToCart(product)}
                src={product.image}
                alt="img"
                className="rounded-t-lg cursor-pointer md:h-[220px]"
              />
              <div className="px-4 py-2">
                <h1 className="md:text-lg text-sm font-medium md:font-semibold">
                  {product.name.length > 17
                    ? `${product.name.slice(0, 16)}...`
                    : product.name}
                </h1>
                <div className="md:flex hidden">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 54)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="md:hidden flex">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 30)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="flex md:flex-row flex-col gap-3 md:items-center justify-between">
                  <h1 className="font-bold text-xl">
                    {product.price}{" "}
                    <span className="text-sm font-normal">so'm</span>
                  </h1>
                  <button
                    onClick={() => addProductToCart(product)}
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "hidden"
                        : "flex"
                    } rounded-3xl hover:bg-purple-700 py-1 md:py-2 px-4 bg-purple-800 text-white`}
                  >
                    Qo'shish
                  </button>
                  <div
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "flex"
                        : "hidden"
                    } rounded-3xl justify-between border  text-black`}
                  >
                    <button
                      onClick={() => increaseClick(product)}
                      className="border-r flex items-center px-3 py-1 md:py-2"
                    >
                      <FaMinus />
                    </button>
                    <div className="flex items-center w-8 h-[37px] justify-center font-semibold">
                      {[...select]
                        .reverse()
                        .find((item) => item.id === product.id)?.count && (
                        <span>
                          {
                            [...select]
                              .reverse()
                              .find((item) => item.id === product.id).count
                          }
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => addProductToCart(product)}
                      className="border-l flex items-center px-3 py-1 md:py-2"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:mt-20 mt-5 md:p-0 p-4 flex flex-col gap-5">
        <h1 className="font-bold text-2xl">🌮Shaurma</h1>
        <div className="md:flex grid grid-cols-2 items-center gap-5">
          {jsonData.slice(12, 14).map((product) => (
            <div
              className="md:w-[288px]    rounded-lg shadow-lg"
              key={product.id}
            >
              <img
                onClick={() => addProductToCart(product)}
                src={product.image}
                alt="img"
                className="rounded-t-lg cursor-pointer md:h-[220px]"
              />
              <div className="px-4 py-2">
                <h1 className="md:text-lg text-sm font-medium md:font-semibold">
                  {product.name.length > 17
                    ? `${product.name.slice(0, 16)}...`
                    : product.name}
                </h1>
                <div className="md:flex hidden">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 54)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="md:hidden flex">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 30)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="flex md:flex-row flex-col gap-3 md:items-center justify-between">
                  <h1 className="font-bold text-xl">
                    {product.price}{" "}
                    <span className="text-sm font-normal">so'm</span>
                  </h1>
                  <button
                    onClick={() => addProductToCart(product)}
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "hidden"
                        : "flex"
                    } rounded-3xl hover:bg-purple-700 py-1 md:py-2 px-4 bg-purple-800 text-white`}
                  >
                    Qo'shish
                  </button>
                  <div
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "flex"
                        : "hidden"
                    } rounded-3xl justify-between border  text-black`}
                  >
                    <button
                      onClick={() => increaseClick(product)}
                      className="border-r flex items-center px-3 py-1 md:py-2"
                    >
                      <FaMinus />
                    </button>
                    <div className="flex items-center w-8 h-[37px] justify-center font-semibold">
                      {[...select]
                        .reverse()
                        .find((item) => item.id === product.id)?.count && (
                        <span>
                          {
                            [...select]
                              .reverse()
                              .find((item) => item.id === product.id).count
                          }
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => addProductToCart(product)}
                      className="border-l flex items-center px-3 py-1 md:py-2"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:mt-20 mt-5 md:p-0 p-4 flex flex-col gap-5">
        <h1 className="font-bold text-2xl">🫔Panini</h1>
        <div className="md:flex grid grid-cols-2 items-center gap-5">
          {jsonData.slice(14, 15).map((product) => (
            <div
              className="md:w-[288px]    rounded-lg shadow-lg"
              key={product.id}
            >
              <img
                onClick={() => addProductToCart(product)}
                src={product.image}
                alt="img"
                className="rounded-t-lg cursor-pointer md:h-[220px]"
              />
              <div className="px-4 py-2">
                <h1 className="md:text-lg text-sm font-medium md:font-semibold">
                  {product.name.length > 17
                    ? `${product.name.slice(0, 16)}...`
                    : product.name}
                </h1>
                <div className="md:flex hidden">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 54)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="md:hidden flex">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 30)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="flex md:flex-row flex-col gap-3 md:items-center justify-between">
                  <h1 className="font-bold text-xl">
                    {product.price}{" "}
                    <span className="text-sm font-normal">so'm</span>
                  </h1>
                  <button
                    onClick={() => addProductToCart(product)}
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "hidden"
                        : "flex"
                    } rounded-3xl hover:bg-purple-700 py-1 md:py-2 px-4 bg-purple-800 text-white`}
                  >
                    Qo'shish
                  </button>
                  <div
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "flex"
                        : "hidden"
                    } rounded-3xl justify-between border  text-black`}
                  >
                    <button
                      onClick={() => increaseClick(product)}
                      className="border-r flex items-center px-3 py-1 md:py-2"
                    >
                      <FaMinus />
                    </button>
                    <div className="flex items-center w-8 h-[37px] justify-center font-semibold">
                      {[...select]
                        .reverse()
                        .find((item) => item.id === product.id)?.count && (
                        <span>
                          {
                            [...select]
                              .reverse()
                              .find((item) => item.id === product.id).count
                          }
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => addProductToCart(product)}
                      className="border-l flex items-center px-3 py-1 md:py-2"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:mt-20 mt-5 md:p-0 p-4 flex flex-col gap-5">
        <h1 className="font-bold text-2xl">🥤Ichimliklar</h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 items-center gap-5">
          {jsonData.slice(15, 28).map((product) => (
            <div
              className="md:w-[288px]    rounded-lg shadow-lg"
              key={product.id}
            >
              <img
                onClick={() => addProductToCart(product)}
                src={product.image}
                alt="img"
                className="rounded-t-lg cursor-pointer md:h-[220px]"
              />
              <div className="px-4 py-2">
                <h1 className="md:text-lg text-sm font-medium md:font-semibold">
                  {product.name.length > 18
                    ? `${product.name.slice(0, 15)}...`
                    : product.name}
                </h1>
                <div className="md:flex hidden">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 54)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="md:hidden flex">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 30)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="flex md:flex-row flex-col gap-3 md:items-center justify-between">
                  <h1 className="font-bold text-xl">
                    {product.price}{" "}
                    <span className="text-sm font-normal">so'm</span>
                  </h1>
                  <button
                    onClick={() => addProductToCart(product)}
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "hidden"
                        : "flex"
                    } rounded-3xl hover:bg-purple-700 py-1 md:py-2 px-4 bg-purple-800 text-white`}
                  >
                    Qo'shish
                  </button>
                  <div
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "flex"
                        : "hidden"
                    } rounded-3xl justify-between border  text-black`}
                  >
                    <button
                      onClick={() => increaseClick(product)}
                      className="border-r flex items-center px-3 py-1 md:py-2"
                    >
                      <FaMinus />
                    </button>
                    <div className="flex items-center w-8 h-[37px] justify-center font-semibold">
                      {[...select]
                        .reverse()
                        .find((item) => item.id === product.id)?.count && (
                        <span>
                          {
                            [...select]
                              .reverse()
                              .find((item) => item.id === product.id).count
                          }
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => addProductToCart(product)}
                      className="border-l flex items-center px-3 py-1 md:py-2"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:mt-20 mt-5 md:p-0 p-4 flex flex-col gap-5">
        <h1 className="font-bold text-2xl">🥫Souslar</h1>
        <div className=" grid lg:grid-cols-4 grid-cols-2  items-center gap-5">
          {jsonData.slice(28, 33).map((product) => (
            <div
              className="md:w-[288px]    rounded-lg shadow-lg"
              key={product.id}
            >
              <img
                onClick={() => addProductToCart(product)}
                src={product.image}
                alt="img"
                className="rounded-t-lg cursor-pointer md:h-[220px]"
              />
              <div className="px-4 py-2">
                <h1 className="md:text-lg text-sm font-medium md:font-semibold">
                  {product.name.length > 17
                    ? `${product.name.slice(0, 16)}...`
                    : product.name}
                </h1>
                <div className="md:flex hidden">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 54)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="md:hidden flex">
                  {product.descrption.length >= 54 ? (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption.slice(0, 30)}...
                    </h1>
                  ) : (
                    <h1 className=" leading-5 text-sm mt-2 mb-2">
                      {product.descrption}
                    </h1>
                  )}
                </div>
                <div className="flex md:flex-row flex-col gap-3 md:items-center justify-between">
                  <h1 className="font-bold text-xl">
                    {product.price}{" "}
                    <span className="text-sm font-normal">so'm</span>
                  </h1>
                  <button
                    onClick={() => addProductToCart(product)}
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "hidden"
                        : "flex"
                    } rounded-3xl hover:bg-purple-700 py-1 md:py-2 px-4 bg-purple-800 text-white`}
                  >
                    Qo'shish
                  </button>
                  <div
                    className={`${
                      select.length > 0 &&
                      [...select]
                        .reverse()
                        .find(
                          (item) => item.id === product.id && item.count === 1
                        )
                        ? "flex"
                        : "hidden"
                    } rounded-3xl justify-between border  text-black`}
                  >
                    <button
                      onClick={() => increaseClick(product)}
                      className="border-r flex items-center px-3 py-1 md:py-2"
                    >
                      <FaMinus />
                    </button>
                    <div className="flex items-center w-8 h-[37px] justify-center font-semibold">
                      {[...select]
                        .reverse()
                        .find((item) => item.id === product.id)?.count && (
                        <span>
                          {
                            [...select]
                              .reverse()
                              .find((item) => item.id === product.id).count
                          }
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => addProductToCart(product)}
                      className="border-l flex items-center px-3 py-1 md:py-2"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
