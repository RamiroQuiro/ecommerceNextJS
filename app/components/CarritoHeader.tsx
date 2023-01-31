"use client"

import { useCarritoCompras } from "../../context/contextStore"
import {shallow} from "zustand/shallow";
import cartSVG from '../../images/shoppingsvg.svg'
import Image from "next/image";

export default function CarritoHeader() {


    const {items,isOpen,getNumberOfItem,openCart}=useCarritoCompras(state=>({
      items:state.items,
      openCart:state.openCart,
      getNumberOfItem:state.getNumberOfItem(state),
      isOpen:state.isOpen,
    }),shallow)

    if(getNumberOfItem!==0)

  return (
    
    <div
    onClick={openCart}
    className="inline-flex animate-aparecer cursor-pointer items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 hover:scale-105 duration-300 rounded-2xl font-bold text-base mt-4 md:mt-0">
   <svg width="30" height="30" viewBox="0 0 1024 1024" className="icon mx-3"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M912.64 200A21.312 21.312 0 0 0 896 192H170.666667v426.666667h640c10.005333 0 18.645333-6.954667 20.842666-16.704l85.333334-384a21.333333 21.333333 0 0 0-4.202667-17.962667z" fill="#43A6DD" /><path d="M981.333333 746.666667H170.666667a21.333333 21.333333 0 0 1-21.333334-21.333334V106.666667H42.666667a21.333333 21.333333 0 1 1 0-42.666667h128a21.333333 21.333333 0 0 1 21.333333 21.333333v618.666667h789.333333a21.333333 21.333333 0 1 1 0 42.666667z" fill="#B3B3B3" /><path d="M277.333333 789.333333a85.333333 85.333333 0 1 0 0 170.666667 85.333333 85.333333 0 0 0 0-170.666667zM853.333333 789.333333a85.333333 85.333333 0 1 0 0 170.666667 85.333333 85.333333 0 0 0 0-170.666667z" fill="#223E49" /><path d="M277.333333 874.666667m-42.666666 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z" fill="#FFFFFF" /><path d="M853.333333 874.666667m-42.666666 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z" fill="#FFFFFF" /></svg>
     {getNumberOfItem} Items
    
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      className={`${isOpen?"rotate-180":""} duration-200 w-4 h-4 ml-1`}
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </div>
  )
}
