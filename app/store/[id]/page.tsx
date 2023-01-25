import React from "react";
import Productos from "../../components/Products";
import { getItems } from "../../../services/itemsServices";

export default async function Products({params }) {
    const {id}=params
    const item=await getItems().then((data)=>{
        const item=data.find(idFind=>idFind.id==id)
        return item    
    })
    if (!item) return <div>Cargando maan...</div>
  return (
   <Productos
   key={
    item.id
   }
   item={item}
   />
  );
}
