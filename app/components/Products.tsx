import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonAñadirCarrito from "./ButtonAñadirCarrito";
import ButtonSacarProductCarrito from "./ButtonSacarProductCarrito";
import ButtonLike from "../components/Button";

export default function Products({ item, showAs }) {
  if (showAs === "card") {
    return (
      <div
        className="lg:w-[260px] md:w-1/2 p-2 w-full mb-3 border-lg bg-white rounded-lg shadow flex flex-col   items-start justify-around shadow-gray-300/50 h-[420px] hover:-translate-y-0.5 duration-150 hover:shadow-gray-300 animate-[aparecer_.5s]"
        key={item.id}
      >
        <Link
          className="block relative h-5/6  w-full rounded mt-5 overflow-hidden"
          href={"/store/" + item.id}
        >
          <Image
            width={"100"}
            height="100"
            alt={item.title}
            className="rounded-xl object-center  w-10/12 h-4/6 object-cover m-auto block"
            src={item.image_url}
          />
        </Link>
        <div className="mt-5 ml-2">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            <Link
              className="block relative rounded overflow-hidden"
              href={"/store/" + item.id}
            >
              {" "}
              {item.category}
            </Link>
          </h3>
          <Link 
           href={"/store/" + item.id}
          className="text-gray-900 title-font text-lg font-medium hover:underline cursor-pointer">
            {item.title}
            </Link>
        </div>
        <div className="flex w-full items-center justify-between my-2 px-2">
          <p className="font-semibold">${item.price}</p>
          <ButtonLike />
        </div>
        <div className="w-11/12 mx-auto flex  items-center my-3  justify-center">
          <ButtonAñadirCarrito item={item} />
        </div>
      </div>
    );
  }
  if (showAs === "listItem") {
    return (
      <div className="border rounded w-full p-1 animate-aparecer  mx-auto overflow-hidden h-40">
        <ButtonSacarProductCarrito item={item} />
        <div className="w-full mx-auto flex flex-wrap items-center justify-between">
          <Image
            width={30}
            height={30}
            alt={item.title}
            src={item.image_url}
            className="lg:w-1/4 object-contain h-32    object-center rounded"
          />
          <div className="lg:w-2/3 w-full flex flex-col justify-around text-left ">
            <h2 className="text-sm title-font tracking-widest">
              {item.category}
            </h2>
            <h1 className="text-gray-900 text-lg  font-medium ">{item.title}</h1>

            <div className="flex  w-full my-1 pb-2 text-sm items-center  border-b-2 border-gray-200 ">
              <div className="flex mr-2 items-center justify-center">
                <span className="mr-1">Color</span>
                <button className="border border-gray-300 rounded-full w-4 h-4 focus:outline-none"></button>
                <button className="border border-gray-300 ml-1 bg-gray-700 rounded-full w-4 h-4 focus:outline-none"></button>
                <button className="border border-gray-300 ml-1 bg-indigo-500 rounded-full w-4 h-4 focus:outline-none"></button>
              </div>
              <div className="flex   items-center">
                <span className="mx-1">Size</span>
                <div className="relative">
                  <select className="rounded  border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 pl-1 pr-6">
                    <option>SM</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <span className="font-medium w-full items-center">
                Cantidad {item.qty}
              </span>
              <span className="w-full title-font font-medium text-xl text-gray-900">
                $ {item.price * item.qty}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-gray-50 w-full">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            width={500}
            height={500}
            alt={item.title}
            src={item.image_url}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {item.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {item.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{item.descripcion}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="title-font font-medium text-2xl mr-5 text-gray-900">
                ${item.price}
              </span>
              <ButtonAñadirCarrito item={item} />
              <ButtonLike />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
