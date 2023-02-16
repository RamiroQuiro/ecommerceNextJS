"use client";
import { useState } from "react";
import { useFilterProduct } from "../../context/filter";
import ButtonCaregorias from "./ButtonCaregorias";
import ListaProductosCategoriasSidebar from "./ListaProductosCategoriasSidebar";

export default function ItemsCategorias({ name, imgSrc, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [arrayProduct, setArrayProduct] = useState([]);
  const {inputSearh,inputSearchSubCategory}=useFilterProduct((state)=>({
    inputSearh:state.inputSearch,
    inputSearchSubCategory:state.inputSearchSubCategory
  }))


  const handleAbrirCategorias = (name, array) => {
    const temp = [];
    array.forEach((prod) => {
      if (temp.includes(prod.subcategory)) return;
      if (prod.category == name) temp.push(prod.subcategory);
    });
    !isOpen?inputSearh(name):inputSearh("all")
    setArrayProduct(temp);
    setIsOpen(!isOpen);
  };


  
  const handleSelectSubCategory=(name:string)=>{
  inputSearchSubCategory(name)
  }

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
              ? "opacity-0 duration-700 animate-[sliceDown_.8s_ease-in] "
              : "opacity-100 duration-700  animate-[sliceUp_.8s_ease-in]  flex-col flex"
          } duration-700`}
        >
          {arrayProduct?.map((prod, i) => (
            <ListaProductosCategoriasSidebar prod={prod} key={i} isOpen={isOpen} handleSelectSubCategory={handleSelectSubCategory}/>
          ))}
        </li>
      )}
    </>
  );
}
