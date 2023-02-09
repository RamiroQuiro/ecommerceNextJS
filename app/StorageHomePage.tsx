import { fetchGoogle } from "../services/fetchGoogleSheet";
import { fetchApi, getSliceItems } from "../services/itemsServices";
import CarritoHeader from "./components/CarritoHeader";
import Products from "./components/Products";
import SidebarCategoriasStre from "./components/SidebarCategoriasStre";





export default async function HomePage() {
  const data = await fetchGoogle();
  return (
    <div className="flex items-stretch relative justify-around mx-auto">
      <div className="fixed bottom-2 z-50 ">
        <CarritoHeader />
      </div>
      <SidebarCategoriasStre />
      <div className="flex flex-wrap gap-1 mx-auto py-10 px-5 justify-around items-center">
        {data?.data.map((opcion) => (
          <Products showAs={"card"} item={opcion} />
        ))}
      </div>
    </div>
  );
}

