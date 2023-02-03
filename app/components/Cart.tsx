import ButtondePagarCarrito from "./ButtondePagarCarrito";
import Products from "./Products";

export default function Carts({ isOpen, getSubtotal, items }) {
  if (getSubtotal > 0)
    return (
      <div
        className={`${
          isOpen ? "translate-x-[0%]" : "animate-aparecer translate-x-[100%]"
        } top-5 right-0 fixed duration-500 max-w-screen-xl px-4 mx-auto z-20 sm:px-6 lg:px-8`}
      >
        <div className="w-full mx-auto rounded-lg shadow-lg lg:max-w-none flex flex-col items-center justify-around">
          <div className="px-6 py-8 bg-white w-full flex flex-col items-center gap-2 ">
            {items?.map((product) => (
              <Products showAs={"listItem"} item={product} />
            ))}
          </div>
        <ButtondePagarCarrito
        getSubtotal={getSubtotal}
        />
        </div>
      </div>
    );
}
