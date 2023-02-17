"use client";

import { useCarritoCompras } from "../../context/contextStore";
import { shallow } from "zustand/shallow";

export default function CarritoHeader() {
  const { items, isOpen, getNumberOfItem, openCart, getSubtotal } =
    useCarritoCompras(
      (state) => ({
        items: state.items,
        openCart: state.openCart,
        getNumberOfItem: state.getNumberOfItem(state),
        isOpen: state.isOpen,
        getSubtotal: state.getSubtotal(state),
      }),
      shallow
    );

  if (items.length > 0)
    return (
      <div
        onClick={openCart}
        className="flex w-64 animate-[aparecerDeAbajo_.5s] cursor-pointer items-center text-neutral-700 font-semibold bg-gray-50/95
         border p-2 focus:outline-none group hover:bg-paleta-200 hover:scale-105 duration-300 rounded-3xl shadow-lg z-50 text-base mt-4 md:mt-0"
      >
        <div className="w-1/2   inline-flex items-center justify-center gap-2">
          <svg
            className="group-hover:fill-neutral-100"
            fill={`${isOpen ? "#f1f2f3" : "#717885"}`}
            height="20"
            width="20"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 455.297 455.297"
          >
            <g>
              <circle cx="65.993" cy="417.586" r="35" />
              <path
                d="M323.058,183.727c-54.826,0-99.43,44.604-99.43,99.429s44.604,99.429,99.43,99.429s99.43-44.604,99.43-99.429
		S377.884,183.727,323.058,183.727z M323.058,335.87l-65.606-65.606l21.213-21.213l44.394,44.394l44.394-44.394l21.213,21.213
		L323.058,335.87z"
              />
              <path d="M30.993,322.586v30h182.879c-5.914-9.267-10.676-19.335-14.094-30H30.993z" />
              <path
                d="M323.058,412.586c-12.147,0-23.907-1.686-35.062-4.829c-0.912,3.118-1.403,6.415-1.403,9.829c0,19.33,15.67,35,35,35
		c19.33,0,35-15.67,35-35c0-3.145-0.421-6.19-1.2-9.089C345.054,411.166,334.219,412.586,323.058,412.586z"
              />
              <path
                d="M393.673,2.711l-12.294,75H0l25.888,158.454c2.833,17.282,19.479,31.422,36.992,31.422h131.688
		c7.715-64.052,62.392-113.859,128.49-113.859c26.887,0,51.883,8.244,72.6,22.332l23.497-143.349h36.141v-30H393.673z"
              />
            </g>
          </svg>
          <span className="text-neutral-600 group-hover:text-neutral-100">
            {getNumberOfItem} Items
          </span>
        </div>
        <div className="w-1/3 bg-white rounded-lg text-neutral-600 items-center text-center justify-center px-2 py-1">
          ${getSubtotal}
        </div>
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className={`${isOpen ? "rotate-180" : ""} duration-200 w-4 h-4 ml-3`}
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </div>
    );
}
