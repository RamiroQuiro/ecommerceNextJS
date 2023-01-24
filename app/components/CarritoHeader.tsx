"use client"

import { useCarritoCompras } from "../../context/contextStore"
import {shallow} from "zustand/shallow";

export default function CarritoHeader() {


    const {items,isOpen,getNumberOfItem,openCart}=useCarritoCompras(state=>({
      items:state.items,
      openCart:state.openCart,
      getNumberOfItem:state.getNumberOfItem(state),
      isOpen:state.isOpen,
    }),shallow)

      
  return (
    <div
    onClick={openCart}
    className="inline-flex cursor-pointer items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    Carrito de Compras {getNumberOfItem}
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      className={`${isOpen?"rotate-180":""} duration-200 w-4 h-4 ml-1`}
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </div>
  )
}
