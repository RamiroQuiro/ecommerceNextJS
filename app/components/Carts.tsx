import ButtondePagarCarrito from "./ButtondePagarCarrito";
import Products from "./Products";
import { interfaceItem } from "../../app/types/tyoes";

// interface Typynes{
//   isOpen:boolean,
//   getSubtotal:number,
//   items:[],
// }

export default function Carts({ isOpen, getSubtotal, items }) {
  console.log(items)
  if (getSubtotal > 0)
    return (
      <div
        className={`absolute md:w-4/12 w-full h-[100vh]  rounded-lg block ${
          isOpen ? "animate-aparecerCostado"  : "animate-desaparecerCostado delay-150 translate-x-[100%]"
        } top-5 right-0  duration-500  max-w-screen-xl px-2 mx-auto  sm:px-6 lg:px-8`}
      >
        <div className="w-full mx-auto md:mt-2 relative  rounded-lg shadow-lg md:max-h-[95vh]  h-[90vh] md:h-auto z-[70] bg-white  flex flex-col items-center justify-between">
          <div className="md:px-6 px-2 py-8  w-full h-[80vh] overflow-y-auto   flex flex-col items-center gap-2 ">
            {items?.map((product) => (
              <Products showAs={"listItem"} item={product} key={product.id} />
            ))}
          </div>
        <ButtondePagarCarrito
        getSubtotal={getSubtotal}
        />
        </div>
      </div>
    );
}
