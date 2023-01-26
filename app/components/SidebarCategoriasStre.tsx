import React, { useState } from "react";
import { useCarritoCompras } from "../../context/contextStore";
import { getItems, getSliceItems } from "../../services/itemsServices";
import ItemsCategorias from "./ItemsCategorias";


export default async function SidebarCategoriasStre() {

const data=await getItems()
const extraerCategorias=()=>{
    const array=[]
    data.filter((item)=>{
        const find=array.find(prod=>prod==item.category)
        if(find)return
        else{
            array.push(item.category)
        }
    })
    return array
}


const categorias=extraerCategorias(data)


  return (
    <div className="w-3/12 min-w-[250px] py-10 pl-10 bg-white h-screen border-2 flex-col flex sticky ">
      <ul className="flex flex-col w-10/12 text-gray-500">
{
categorias?.map((cat,i)=>(
<ItemsCategorias
       name={cat}
       key={i}
       imgSrc={""}
       />
))

}        
      </ul>
    </div>
  );
}
