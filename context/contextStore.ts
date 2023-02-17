"use client";
import { create } from "zustand";

import { interfaceItem } from "../app/types/tyoes";

interface EstadoCarrito {
  isOpen: boolean;
  items: [];
  cantidadPorItem: (item: interfaceItem) => void;
  addItemtoCart: (item: interfaceItem) => void;
  openCart: () => void;
  removeItemtoCart: (item: interfaceItem) => void;
  restarItemCarrito: (item: interfaceItem) => void;
  getNumberOfItem: (state: EstadoCarrito) => number;
  getSubtotal: (state: EstadoCarrito) => number;
}

export const useCarritoCompras = create<EstadoCarrito>((set, get) => ({
  isOpen: false,
  items: [],
  cantidadPorItem: (item) => {
    const { items } = get();
    const temp = items;
    const encontrado:any = temp.find(
      (product: interfaceItem) => product.id == item.id
    );
    return encontrado.qty
  },
  addItemtoCart: (item) => {
    const { items } = get();
    const temp:any[] = items;
    const find:any  = temp.find( (product: interfaceItem)  => product.id == item.id)
    if (find) {
      find.qty++
    } else {
      item.qty = 1;
      temp.push(item);
    }
    set((state:any) => ({
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
    let temp = items.filter((product:interfaceItem) => product.id != item.id);

    set((state:any) => ({
      ...state,
      items: temp,
    }));
  },
  restarItemCarrito: (item) => {
    const { items } = get();
    let temp = items;
    const find:any = temp.find((product:interfaceItem) => product.id == item.id);

    if (find?.qty != 0)
      if (find?.qty > 0) {
        find.qty--;
      }
    set((state:any) => ({
      ...state,
      items:
        find.qty > 0 ? temp : temp.filter((product:interfaceItem) => product.id != item.id),
    }));
  },
  getNumberOfItem: (state: EstadoCarrito) => {
    const total = state.items.reduce((acc, item:interfaceItem) => acc + item.qty, 0);
    return total;
  },
  getSubtotal: (state) => {
    const subtotal = state.items.reduce(
      (acc, item:interfaceItem) => acc + item.price * item.qty,
      0
    );
    return subtotal;
  },
}));
