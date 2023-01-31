import React from 'react'

export default function ListaProductosCategoriasSidebar({prod}) {
  return (
    <ul className=''>
    {

      prod?.map((item)=>(
        <li
        className='cursor-pointer  pl-8 text-sm my-2 py-1 hover:text-green-600 duration-200 font-medium '
        key={item.id}
        >{item.item}</li>
      ))
    }
    </ul>
  )
}

