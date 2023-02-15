"use client";
import { useFilterProduct } from "../../context/filter";
import Products from "./Products";

export default function TiendadelHome({ data }) {
  // const [consulta,setConsulta]=useState<string>("all")
  const { filterCategory, filterSubCategory } = useFilterProduct((state) => ({
    filterCategory: state.filterCategory,
    filterSubCategory: state.filterSubCategory,
  }));

  return (
    <div className="flex w-full flex-wrap gap-1 mx-auto py-10 px-5 justify-around items-start">
      {data?.data
        ?.filter((prod) => {
          if (filterCategory == "all") return prod;
          return prod.category == filterCategory;
        })
        .filter((subCat) => {
          if (filterSubCategory == "all") return subCat;
            return  subCat.subcategory == filterSubCategory;
        })
        .map((opcion) => (
          <Products showAs={"card"} item={opcion} key={opcion?.id}/>
        ))}
    </div>
  );
}
