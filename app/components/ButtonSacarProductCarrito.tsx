"use client"

import { useCarritoCompras } from "../../context/contextStore"

export default function ButtonSacarProductCarrito({item}) {

const {removeItemtoCart}=useCarritoCompras(state=>({
    removeItemtoCart:state.removeItemtoCart
}))
  return (
    <button 
    onClick={() => removeItemtoCart(item)}
    className="absolute right-[80px] rotate-45 "
    
    >
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M6 12H18"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 18V6"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
  )
}
