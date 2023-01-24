"use client"

import { useCarritoCompras } from "../../context/contextStore"

export default function ButtonAñadirCarrito({id}) {

    const {addItemtoCart}=useCarritoCompras()
  return (
    <button
    onClick={()=>addItemtoCart(id)}
    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
    Añadir al Carrito
  </button>
  )
}
