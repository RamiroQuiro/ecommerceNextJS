import { fetchGoogle } from "../services/fetchGoogleSheet";
import { fetchApi, getSliceItems } from "../services/itemsServices";
import CarritoHeader from "./components/CarritoHeader";
import Products from "./components/Products";
import SidebarCategoriasStre from "./components/SidebarCategoriasStre";
import TiendadelHome from "./components/TiendadelHome";





export default async function HomePage() {
  const data = await fetchGoogle();
const consulta="all"
  
  return (
    <div className="flex items-stretch relative justify-around mx-auto">
      <div className="fixed bottom-2 z-50 ">
        <CarritoHeader />
      </div>
      <SidebarCategoriasStre />
      <TiendadelHome
      data={data}
      key={2}
      />
    </div>
  );
}

