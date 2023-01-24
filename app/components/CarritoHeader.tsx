"use client"

import { useCarritoCompras } from "../../context/contextStore"
import {shallow} from "zustand/shallow";

export default function CarritoHeader() {


    const {items}=useCarritoCompras(state=>({
      items:state.items
    }),shallow)
    console.log(items)
  return (
    <div className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    Carrito de Compras {items.length}
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      className="w-4 h-4 ml-1"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </div>
  )
}
