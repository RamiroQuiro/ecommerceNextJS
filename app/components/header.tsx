"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Logo from "../../images/la-esquina.png";
import { useGetBounding } from "../../services/useGetBoundingSearchInput";
import InputSearch from "./InputSearch";
import Menu from "./menu";

export default function Header() {
  const [scrollTop, setScrollTop] = useState(0);
  // const [referenciaInputSearch, setReferenciaInputSearch] = useState({})
  // const referenciaInputSearch = useRef();
  // const referenciaInput = useGetBounding();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);
  const handleScroll = (e) => {
    const position = window.pageYOffset;
    // console.log(referenciaInputSearch);
    if (position > 328) console.log(position);
    setScrollTop(position);
  };

  return (
    <header
      className={`${
        scrollTop > 395 && "fixed z-50 animate-[aparecer_0.5s]"
      } text-gray-500 h-20 body-font w-full  bg-white`}
    >
      <div className=" my-auto flex h-20 pt-2 px-16 flex-col md:flex-row  justify-between items-center">
        <div className="lg:w-2/12 my-auto h-full">
          <Image
            src={Logo}
            width="150"
            height={"150"}
            className="object-cover   bg-green-500 rounded-lg shadow-sm p-3 "
          />
        </div>
        {scrollTop > 395 && (
          <InputSearch label={"navBar"}  />
        )}
        <Menu />
      </div>
    </header>
  );
}
