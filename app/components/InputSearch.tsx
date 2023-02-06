"use client";

export default function InputSearch({ label,useRef}) {

 

  if (label == "navBar")
    return (
      <div
        ref={useRef}
        className="relative bg-gray-200 rounded-lg w-5/12 "
      >
        <input
          type="search"
          name="buscar"
          id="buscar"
          className=" w-full py-3 top-0 left-0 rounded-lg px-5 text-gray-600 font-semibold  bg-gray-200   border-gray-300 focus:border-yellow-500 focus:ring-2  outline-none transition-colors duration-200 ease-in-out"
          placeholder="Buscar tu producto..."
        />
      </div>
    );

  if (label == "banner")
    return (
      <div
        ref={useRef}
        className="relative bg-white rounded-lg w-full overflow-hidden border-0 shadow-xl shadow-gray-600/30"
      >
        <input
          type="search"
          name="buscar"
          id="buscar"
          className=" w-full py-5 top-0 left-0 rounded-lg pl-5 text-gray-600 font-semibold w-full bg-white  border border-gray-300 focus:border-yellow-500 focus:ring-2  outline-none transition-colors duration-200 ease-in-out"
          placeholder="Buscar tu producto..."
        />
        <label
          htmlFor="buscar"
          className="absolute top-0 right-0 bg-green-500 group text-neutral-100 hover:bg-green-600 duration-150 cursor-pointer font-medium text-xl tracking-wider hover:tracking-widest h-full w-48 text-center flex items-center mx-auto justify-center"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            className="mx-3 group-hover:scale-110 duration-300 delay-75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="#eeeeee"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 22L20 20"
              stroke="#EEEEEE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Buscar
        </label>
      </div>
    );
}
