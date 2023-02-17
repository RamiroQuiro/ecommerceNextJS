"use client"

import { useCarritoCompras } from "../../context/contextStore"

export default function ButtonSacarProductCarrito({item}:any) {

const {removeItemtoCart}=useCarritoCompras(state=>({
    removeItemtoCart:state.removeItemtoCart
}))
  return (
    <button 
    onClick={() => removeItemtoCart(item)}
    className="absolute bg-gray-100 p-1 rounded-full right-3 w-8 h-8 rotate-45 "
    
    >
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M6 12H18"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18V6"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
  )
}
