"use client";

import { useCarritoCompras } from "../../context/contextStore";
import { shallow } from "zustand/shallow";
import { useState } from "react";
import { interfaceItem } from "../../app/types/tyoes";

// export interface Props{
//   imaImageURLCrudo:string,
//   Imagen:string,
//   category:string,
//   descripcion:string,
//   id:string,
//   imagen_url:string,
//   price:string,
//  stock:string,
//  subcategory:string,
//  title:string, 
// }


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
  console.log('anda?',item)
  restarItemCarrito(item)
setQtyItems(cantidadPorItem(item));
}

  return (
    <>
      {qtyItems > 0 && (
        <button 
        onClick={handleRestarItems}
        className="w-auto animate-[aparecer_0.5s_ease-in-out] px-3 py-3 text-xs text-white bg-blue-500 border-0  focus:outline-none  mx-auto items-center hover:bg-blue-600 rounded-l-lg ">
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
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="1"
              d="M8.5 12H15.5"
              stroke="#f1f2f3"
              strokeWidth="1.8"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {qtyItems > 0 ?
      <span className={`py-2.5 w-4/12 mx-auto text-white border-0 font-medium  focus:outline-none bg-blue-500 text-center `}>{qtyItems  }</span>
      :
      null
    }
      <button
        onClick={handleButton}
        className={`flex py-3 w-11/12 flex-auto items-center text-white border-0 font-medium  focus:outline-none hover:bg-blue-600 ${qtyItems>0?"rounded-r-lg bg-blue-500 ":"rounded-lg text-neutral-700  bg-neutral-300  hover:text-white"}`}
      >
        <span className="text-sm text-center mx-auto"> Añadir al Carrito</span>
      </button>
      </>
  );
}
