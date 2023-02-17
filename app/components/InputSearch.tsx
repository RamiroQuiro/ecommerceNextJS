"use client";
import { useState } from "react";
import { useFilterProduct } from "../../context/filter";
interface Props {
label:string
}
export default function InputSearch({ label}:Props) {

const [inputState, setInputState] = useState("")
  const {inputSearh,inputSearchSubCategory}=useFilterProduct((state)=>({
    inputSearh:state.inputSearch,
    inputSearchSubCategory:state.inputSearchSubCategory
  }))


  const handleBuscarProductos = () => {
    inputSearh(inputState);
  };

  const handleOnChangeInput=(e:any)=>{
setInputState(e.target.value)
  }

  
  if (label == "navBar")
    return (
      <div
        className="bg-gray-200 rounded-full hidden md:block md:w-4/12 "
      >
        <input
        onChange={handleOnChangeInput}
        onSubmit={handleBuscarProductos}
        value={inputState}
          type="search"
          name="buscar"
          id="buscar"
          className="w-full py-3  px-5 text-gray-600 font-semibold    border-gray-300 bg-gray-200 rounded-full focus:ring-2  outline-none transition-colors duration-200 ease-in-out"
          placeholder="Buscar tu producto..."
        />
      </div>
    );

  if (label == "banner")
    return (
      <div
        className="relative bg-white rounded-full w-full overflow-hidden border-0  shadow-gray-600/30"
      >
        <input
         onChange={handleOnChangeInput}
        value={inputState}
         type="search"
          name="buscar"
          id="buscar"
          className=" w-full py-4 top-0 left-0 px-5 text-gray-600 font-semibold  bg-white rounded-full border border-gray-300 focus:border-yellow-500 focus:ring-2  outline-none transition-colors duration-200 ease-in-out"
          placeholder="Buscar tu producto..."
        />
        <label
        onClick={handleBuscarProductos}
          htmlFor="buscar"
          className="absolute top-0 right-5 bg-gray-800/90 group text-neutral-100 hover:bg-sky-800 duration-150 cursor-pointer font-medium text-sm tracking-wider hover:tracking-widest h-full p-2 text-center flex flex-col items-center mx-auto justify-center rounded-full"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="mx-3 group-hover:scale-110 duration-300 delay-75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="#eeeeee"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 22L20 20"
              stroke="#EEEEEE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Buscar
        </label>
      </div>
    );

    return(
      <span>
        Cargando...
      </span>
    )
}
