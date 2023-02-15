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
    const position = window.pageYOffset;
    if (position > 328) 
    setScrollTop(position);
  };

  return (
    <header
      className={`${
        scrollTop > 395 && "fixed z-50 animate-[aparecer_0.5s]"
      } text-gray-500 md:h-[70px] py-5 md:py-0 body-font w-full m-auto bg-white`}
    >
      <div className=" my-auto flex h-16 pt-1 px-16 flex-col md:flex-row  justify-center lg:justify-between md:justify-between items-center">
        <Link 
        href={'/'}
        className="md:w-3/12 w-5/12 flex mx-auto h-full items-center gap-2 ">
          <Image
            src={Logo}
            alt="logo"
            width="150"
            height={"150"}
            className="object-cover  rounded-lg shadow-sm "
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
