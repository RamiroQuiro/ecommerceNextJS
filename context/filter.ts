"use client";
import { create } from "zustand";

interface EstadoCarrito {
  filterSearch: string;
  filterCategory: string;
  filterSubCategory: string;
  inputSearchPrimero: (name:string) => any;
  inputSearch: (name:string) => any;
  inputSearchSubCategory: (name:string) => any;
}

export const useFilterProduct = create<EstadoCarrito>((set, get) => ({
  filterSearch: "all",
  filterCategory: "all",
  filterSubCategory: "all",
  inputSearchPrimero: (name) => {
    set((state) => ({
      ...state,
      filterSearch: name,
      filterCategory: "all",
      filterSubCategory: "all",
    }));
  },
  inputSearch: (name) => {
    set((state) => ({
      ...state,
      filterCategory: name,
      filterSubCategory: "all",
    }));
  },
  inputSearchSubCategory: (name) => {
    set((state) => ({
      ...state,
      filterSubCategory: name,
    }));
  },
}));
