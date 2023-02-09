import Image from "next/image";
import Link from "next/link"
import {fetchingData  ,fetchGoogle} from "../../services/fetchGoogleSheet";
import Products from "../components/Products";
export default async function Faq() {


  const preguntando=await fetchGoogle()
const datos=preguntando
  return (
    <div>
        <h1>FAQ</h1>
        <div className="flex flex-wrap gap-1 mx-auto py-10 px-5 justify-around items-center">
        {
          !datos?
          <span>Esperemoooos meeeen</span>
          :
          datos?.map((product,i)=>(
            <Products 
            item={product}
            showAs={"card"}
            key={i}
            />
          ))
          }
          </div>
    </div>
  )
}
