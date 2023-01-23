"use client"
import React, { useState } from 'react'

export default function Button() {
    const [like,setLike]=useState(false)

  return (
    <button
    onClick={()=>setLike(!like)}
    className={`rounded-full w-10 h-10 ${like?'bg-red-200':'bg-gray-200'} p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4`}>
      <svg
        fill={like?'red':'gray'}
     
        className={`${like?'scale-125':''} w-5 h-5 duration-200`}
        viewBox="0 0 24 24"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z">

        </path>
      </svg>
    </button>
  )
}
