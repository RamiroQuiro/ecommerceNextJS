import { fetchApi, getSliceItems } from "../services/itemsServices";
import Card from "./components/Card";
import SidebarCategoriasStre from "./components/SidebarCategoriasStre";
export default async function HomePage() {
  const data = await getSliceItems();
  return (
    <div className="flex items-stretch justify-around mx-auto">

      <SidebarCategoriasStre
      />
      <div className="flex flex-wrap gap-1 mx-auto py-10 px-5 justify-around items-center">
        {data?.map((opcion) => (
          <Card opcion={opcion} />
        ))}
      </div>
    </div>
  );
}
