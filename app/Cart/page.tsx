"use client"
import { useCarritoCompras } from '../../context/contextStore';
import Carts from "../components/cart";

export default function Cart() {

  const {isOpen,getSubtotal,items}=useCarritoCompras((state:any)=>({
    isOpen:state.isOpen,
    items:state.items,
    getSubtotal:state.getSubtotal(state)
}))
if (isOpen && items.length) return (
    <div className={` animate-[aparecer_.3s] z-10 bg-gray-700/40 backdrop-blur-sm fixed w-full h-screen  top-0 left-0  `}>
        <Carts
        items={items}
        isOpen={isOpen}
        getSubtotal={getSubtotal}
        />
    </div>
  )
}
