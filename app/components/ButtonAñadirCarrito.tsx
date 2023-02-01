"use client";

import { useCarritoCompras } from "../../context/contextStore";
import { shallow } from "zustand/shallow";

export default function ButtonAñadirCarrito({ item }) {
  const { addItemtoCart, openCart } = useCarritoCompras(
    (state) => ({
      addItemtoCart: state.addItemtoCart,
      openCart: state.openCart,
    }),
    shallow
  );

  return (
    <button
      onClick={() => addItemtoCart(item)}
      className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
    >
      Añadir al Carrito
    </button>
  );
}
