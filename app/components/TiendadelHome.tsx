"use client";
import { useCarritoCompras } from "../../context/contextStore";
import { useFilterProduct } from "../../context/filter";
import Products from "./Products";
import {interfaceItem}from '../types/tyoes'


export default function TiendadelHome({ data }:any) {


  // const [consulta,setConsulta]=useState<string>("all")
  const { filterCategory, filterSubCategory,filterSearch } = useFilterProduct((state) => ({
    filterSearch:state.filterSearch,
    filterCategory: state.filterCategory,
    filterSubCategory: state.filterSubCategory,
  }));
const {items}=useCarritoCompras((state) => ({
  items: state.items,
}));
  return (
    <div className="flex w-full flex-wrap gap-1 mx-auto py-10 px-5 justify-around items-start">
      {data?.data
        ?.filter((prod:interfaceItem) => {
          if (filterCategory == "all") return prod;
          return prod.category == filterCategory;
        })
        .filter((subCat:interfaceItem) => {
          if (filterSubCategory == "all") return subCat;
            return  subCat.subcategory == filterSubCategory;
        })
        .map((opcion:interfaceItem) => (
          <Products showAs={"card"} item={opcion} key={opcion?.id}/>
        ))}
    </div>
  );
}
