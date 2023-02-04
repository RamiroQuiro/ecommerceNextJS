"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "../../images/la-esquina.png";
import CarritoHeader from "./CarritoHeader";
import Menu from "./menu";

export default function Header() {
const [scrollTop, setScrollTop] = useState(0)
useEffect(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
      window.removeEventListener('scroll', handleScroll);
}},[])
const handleScroll = (e) => {
   const position = window.pageYOffset;
    console.log(position)
    setScrollTop(position);
};




  return (
    <header className="text-gray-500 h-20 body-font w-full  bg-white">
      <div className=" my-auto flex h-20 pt-2 px-16 flex-col md:flex-row  justify-around items-center">
        <div className="lg:w-2/5 my-auto h-full">
          <Image
            src={Logo}
            width="150"
            height={"150"}
            className="object-cover   bg-green-500 rounded-lg shadow-sm p-3 "
          />
        </div>
        <Menu />

        {/* <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <CarritoHeader />
        </div> */}
      </div>
    </header>
  );
}
