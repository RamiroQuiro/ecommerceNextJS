import { fetchApi, getSliceItems } from "../services/itemsServices";
import Card from "./components/Card";
import CarritoHeader from "./components/CarritoHeader";
import SidebarCategoriasStre from "./components/SidebarCategoriasStre";
export default async function HomePage() {
  const data = await getSliceItems();
  return (
    <div className="flex items-stretch relative justify-around mx-auto">
      <div className="fixed bottom-2 z-50 ">
        <CarritoHeader />
      </div>
      <SidebarCategoriasStre />
      <div className="flex flex-wrap gap-1 mx-auto py-10 px-5 justify-around items-center">
        {data?.map((opcion) => (
          <Card opcion={opcion} />
        ))}
      </div>
    </div>
  );
}
