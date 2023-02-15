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
        className={`absolute w-4/12 rounded-lg  ${
          isOpen ? "animate-aparecerCostado"  : "animate-desaparecerCostado delay-150 translate-x-[100%]"
        } top-5 right-0  duration-500 h-[100%] max-w-screen-xl px-4 mx-auto z-30 sm:px-6 lg:px-8`}
      >
        <div className="w-full mx-auto mt-16 relative rounded-lg shadow-lg max-h-[95%] bg-white overflow-hidden flex flex-col items-center justify-between">
          <div className="px-6 py-8  w-full min-h-full overflow-y-scroll  flex flex-col items-center gap-2 ">
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
