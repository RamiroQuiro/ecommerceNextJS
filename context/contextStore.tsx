"use client"
import create from "zustand";

export const useCarritoCompras =create((set)=>({
    isOpen:true,
    items:[],
    openCart:()=>{},
    addItemtoCart:(id)=>set(state=>({
        ...state,
        items:[state.items.push(id)]
    })),
    removeItemtoCart:()=>{},
    getNumberOfItem:0,

}))