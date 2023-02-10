"use client"
import React, { useState } from 'react'
import Products from './Products'

export default function TiendadelHome({data}) {
const [consulta,setConsulta]=useState<string>("all")


  return (
    <div className="flex flex-wrap gap-1 mx-auto py-10 px-5 justify-around items-center">
    {data?.data?.filter(prod=>{
    if(consulta=="all")return prod
    prod.category===consulta
    }).map((opcion) => (
      <Products showAs={"card"} item={opcion} />
    ))}
  </div>
  )
}
