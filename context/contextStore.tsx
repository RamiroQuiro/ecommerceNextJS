"use client";
import {create} from "zustand";

const handleAddItemsToCart = (item, state) => {
  const temp = [...state.items];
  const found = temp.find((productos) => productos.id === item.id);

  if (found) {
    found.qty++;
  } else {
    item.qty = 1;
    temp.push(item);
  }
  return temp
 
};

const handleNumberOfItems=(state)=>{
    // const total = state.tempOrder.reduce((acc,item)=>acc+item.id,0)
    console.log(state.items)
    return state.items.length
}

export const useCarritoCompras = create((set,get) => ({
  isOpen: true,
  items: [],
  addItemtoCart: (item) => {
  const {items}=get()
    const temp = items;
    console.log("items=>",temp)
    const find=temp.find(producto=>producto.id==item.id)
    if (find) {
      find.qty++;
    } else {
      item.qty = 1;
      temp.push(item);
    }
    set(state=>({
      ...state,items:temp
    }))
  },
  openCart:"",
  removeItemtoCart: 0,
  getNumberOfItem:handleNumberOfItems,
}));
