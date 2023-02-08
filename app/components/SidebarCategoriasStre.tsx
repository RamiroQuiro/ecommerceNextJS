
import { getItems } from "../../services/itemsServices";
import ItemsCategorias from "./ItemsCategorias";
import UlCategoriasSidebar from "./UlCategoriasSidebar";

export default async function SidebarCategoriasStre() {


  return (
    <div className="w-3/12 min-w-[250px] py-10 pl-10 bg-white sticky top-[68px] h-[97vh]  border-2 flex-col flex ">
     
        
      <UlCategoriasSidebar
      // categorias={categorias}
      key={1}
      />
      
    </div>
  );
}
