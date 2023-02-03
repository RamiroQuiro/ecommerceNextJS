"use client";

import { useCarritoCompras } from "../../context/contextStore";
import { shallow } from "zustand/shallow";
import { useState } from "react";

export default function ButtonAñadirCarrito({ item }) {
  const { addItemtoCart, cantidadPorItem ,restarItemCarrito} = useCarritoCompras(
    (state) => ({
      addItemtoCart: state.addItemtoCart,
      cantidadPorItem: state.cantidadPorItem,
      restarItemCarrito:state.restarItemCarrito
    }),
    shallow
  );
  const [qtyItems, setQtyItems] = useState(0);
  const handleButton = () => {
    addItemtoCart(item);
    setQtyItems(cantidadPorItem(item));
  };

const handleRestarItems=()=>{


}

  return (
    <>
      {qtyItems > 0 && (
        <button 
        onClick={()=>restarItemCarrito(item)}
        className="w-auto animate-aparecer px-3 py-3 text-xs text-white bg-blue-500 border-0  focus:outline-none  mx-auto items-center hover:bg-blue-600 rounded-l-lg ">
          <svg
            width="18"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
              stroke="#f1f2f3"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="1"
              d="M8.5 12H15.5"
              stroke="#f1f2f3"
              stroke-width="1.8"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      )}
      <button
        onClick={handleButton}
        className={`flex py-3 w-full flex-auto  items-center text-white bg-blue-500 border-0  focus:outline-none hover:bg-blue-600 ${qtyItems<0?"rounded-lg":"rounded-r-lg"}`}
      >
        <span className="text-sm text-center mx-auto">{qtyItems > 0 && qtyItems} Añadir al Carrito</span>
      </button>
      </>
  );
}
