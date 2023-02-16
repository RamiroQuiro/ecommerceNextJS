"use client";
import { create } from "zustand";


import { interfaceItem } from "../app/types/tyoes";

interface EstadoCarrito {
  isOpen:boolean,
  items:[],
  cantidadPorItem:(item:interfaceItem)=>void,
  addItemtoCart:(item:interfaceItem)=>void,
  openCart:()=>void,
  removeItemtoCart:(item:interfaceItem)=>void,
  restarItemCarrito:(item:interfaceItem)=>void,
  getNumberOfItem:(state:EstadoCarrito)=>void,
  getSubtotal:(state:EstadoCarrito)=>void,
}

export const useCarritoCompras = create<EstadoCarrito>((set, get) => ({
  isOpen:  false,
  items: [],
  cantidadPorItem:(item)=>{
    const{items}=get()
    const temp=items
    let encontrado=temp.find(product=>product.id==item.id)
  return encontrado?.qty
  },
  addItemtoCart: (item) => {
    const { items } = get();
    const temp = items;
    const find = temp.find((producto) => producto.id == item.id);
    if (find) {
      find.qty++;
    } else {
      item.qty = 1;
      temp.push(item);
    }
    set((state) => ({
      ...state,
      items: temp,
    }));
  },
  openCart: () => {
    const { isOpen } = get();
    set((state) => ({
      ...state,
      isOpen: !isOpen,
    }));
  },
  removeItemtoCart: (item) => {
    const { items } = get();
    let temp = items.filter((product) => product.id != item.id);

    set((state) => ({
      ...state,
      items: temp,
    }));
  },
restarItemCarrito:(item)=>{
 const {items}=get()
 let temp=items
 const find=temp.find(product=>product.id==item.id)

 if(find?.qty!=0)
 if (find?.qty>0) {
  find.qty--;
 }
 set((state)=>({
  ...state,
  items:find.qty>0?temp:temp.filter(product=>product.id!=item.id)
 }))
}
  ,
  getNumberOfItem: (state:EstadoCarrito) => {
    interface Prop{total:number}
    const total = state.items.reduce((acc, item) => acc + item.qty, 0)
    return total;
  },
  getSubtotal: (state) => {
    const subtotal = state.items.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    return subtotal;
  },
}));
