"use client";
import { useState } from "react";
import ButtonCaregorias from "./ButtonCaregorias";
import ListaProductosCategoriasSidebar from "./ListaProductosCategoriasSidebar";

export default function ItemsCategorias({ name, imgSrc, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [arrayProduct, setArrayProduct] = useState([]);

  const handleAbrirCategorias = (name, array) => {
    const temp = [];
    array.forEach((prod) => {
      if (temp.includes(prod.subcategory)) return;
      if (prod.category == name) temp.push(prod.subcategory);
    });
    setArrayProduct(temp);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ButtonCaregorias
        onClick={() => handleAbrirCategorias(name, data)}
        imgSrc={imgSrc}
        name={name}
        isOpen={isOpen}
      />
      {isOpen && (
        <li
          className={`${
            !isOpen
              ? "opacity-0 duration-700"
              : "opacity-100 duration-700 animate-aparecer delay-200 visible flex-col flex"
          } duration-700`}
        >
          {arrayProduct?.map((prod, i) => (
            <ListaProductosCategoriasSidebar prod={prod} key={i} />
          ))}
        </li>
      )}
    </>
  );
}
