import React from "react";
import CarritoHeader from "./CarritoHeader";
import Menu from "./menu";

export default function Header() {
  return (
    <header className="text-gray-600 body-font w-full bg-neutral-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Menu />
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tienda Rama</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <CarritoHeader/>
        </div>
      </div>
    </header>
  );
}
