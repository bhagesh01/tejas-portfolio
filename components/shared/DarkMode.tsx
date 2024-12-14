
"use client"
import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'


const DarkMode = () => {
   const[dark , setDark] = useState(true);
  
    useEffect(() => {
      if (dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [dark]);
  
  return (
    <div className='fixed md:hidden z-[200] top-10 left-10'>
      <button
          onClick={() => setDark((prev) => !prev)}
          className="md:mt-0 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition duration-200"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    </div>
  )
}

export default DarkMode