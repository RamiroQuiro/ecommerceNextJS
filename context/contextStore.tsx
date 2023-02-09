"use client";
import { create } from "zustand";

const handleNumberOfItems = (state) => {
  const total = state.items.reduce((acc, item) => acc + item.qty, 0);
  return total;
};



export const useCarritoCompras = create((set, get) => ({
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
 
 if (find.qty>0) {
  find.qty--;
 }
 set((state)=>({
  ...state,
  items:find.qty>0?temp:temp.filter(product=>product.id!=item.id)
 }))
}
  ,
  getNumberOfItem: handleNumberOfItems,
  getSubtotal: (state) => {
    const subtotal = state.items.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    return subtotal;
  },
}));
