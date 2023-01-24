"use client";
import { create } from "zustand";

const handleNumberOfItems = (state) => {
  const total = state.items.reduce((acc, item) => acc + item.qty, 0);
  return total;
};

export const useCarritoCompras = create((set, get) => ({
  isOpen: false,
  items: [],
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
  removeItemtoCart: 0,
  getNumberOfItem: handleNumberOfItems,
  getSubtotal: (state)=>{
    const subtotal=state.items.reduce((acc, item) => acc + item.price,0)
    return subtotal
  },
}));
