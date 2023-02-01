"use client"
import { useCarritoCompras } from '../../context/contextStore';
import Carts from "../components/Cart";

export default function Cart() {

  const {isOpen,getSubtotal,items}=useCarritoCompras(state=>({
    isOpen:state.isOpen,
    items:state.items,
    getSubtotal:state.getSubtotal(state)
}))

  return (
    <div className={` z-10" absolute top-44  right-0 w-8/12 lg:w-4/12 `}>
        <Carts
        items={items}
        isOpen={isOpen}
        getSubtotal={getSubtotal}
        />
    </div>
  )
}
