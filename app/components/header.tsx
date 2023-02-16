"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../images/logoCarpinteria.png";
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
    setScrollTop(0)
    const position = window.pageYOffset;
    if (position > 328) 
    setScrollTop(position)
  };

  return (
    <header
      className={`${
        scrollTop > 395 && "fixed z-50 animate-[aparecer_0.5s]"
      } text-gray-500 md:h-[70px] py-5 md:py-0 body-font w-full mx-auto bg-white`}
    >
      <div className=" mx-auto flex md:h-16 md:pt-1 px-16 md:p-0 lg:px-5 flex-col md:flex-row  justify-center lg:justify-around md:justify-around items-center">
        <Link 
        href={'/'}
        className="md:w-3/12 hidden   md:flex mx-auto  h-full items-center gap-2 ">
          <Image
            src={Logo}
            alt="logo"
            width="150"
            height={"150"}
            className="object-cover md:w-28 w-10 rounded-lg shadow-sm "
          />
          <h2 className=" text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-800">DesignSoft</h2>
        </Link>
        {scrollTop > 395 && (
          <InputSearch label={"navBar"}   />
        )}
        <Menu />
      </div>
    </header>
  );
}
