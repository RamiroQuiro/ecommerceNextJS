import React from "react";
import Productos from "../../components/Products";
import { getItems } from "../../../services/itemsServices";
import { fetchGoogle } from "../../../services/fetchGoogleSheet";

export default async function Products({params }) {
    const {id}=params
    const item=await fetchGoogle().then((data)=>{
        const item=data?.data.find(idFind=>idFind.id==id)
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
