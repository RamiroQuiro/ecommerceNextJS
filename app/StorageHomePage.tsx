import { fetchGoogle } from "../services/fetchGoogleSheet";
import CarritoHeader from "./components/CarritoHeader";
import SidebarCategoriasStre from "./components/SidebarCategoriasStre";
import TiendadelHome from "./components/TiendadelHome";




export default  function HomePage() {

  const data:any =  fetchGoogle();
  if(data) 
  return (
    <div className="flex md:flex-row flex-col items-stretch relative justify-around mx-auto">
      <div className="fixed bottom-4 z-[60] left-[15vw] md:left-auto ">
        <CarritoHeader />
      </div>
      <SidebarCategoriasStre data={data?.data} />
      <TiendadelHome
      data={data}
      />
    </div>
  )
  return (
    <span>esperando fetchData</span>
  )
}

