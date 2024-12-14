// Install dependencies: npm install framer-motion

"use client";

import { motion } from "framer-motion";
import { CircleX, Menu } from "lucide-react";
import { useState } from "react";

const CurvedMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      clipPath: "circle(30px at 90% 10%)",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      clipPath: "circle(1000px at 90% 10%)",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 8,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: 50,
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };


  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/BHAGESH-BANSODE-RESUME-NEW.pdf";
    link.download = "BHAGESH-BANSODE-RESUME.pdf";
    link.click();
  };



  return (
    // <div className="fixed md:hidden z-50 w-fit h-fit">
    <>
      {/* Menu Button */}


      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-10 right-10 ${isOpen ? "z-[8783239]" :  "z-[27334843]"}
          bg-black text-white dark:text-white p-3 rounded-full shadow-lg focus:outline-none`}
          >
        {isOpen ? (<CircleX />) : (<Menu />)}
      </button>

      {/* Animated Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className={`fixed inset-0 ${isOpen ? "z-[8783238]" : "-z-10"}  bg-white dark:bg-[#1A1A1E] dark:text-white text-black   ${!isOpen && "bg-transparent"}  `}
        >
        <motion.ul
          className="flex flex-col items-center justify-center h-full space-y-8 text-4xl font-semibold"
          >
          {[
            "Home",
            "About",
            "Contact",
            "Projects",
          ].map((item, index) => (
            <a key={index} href={`/#${item.toLowerCase()}`}
            onClick={()=>{setIsOpen(false)}}
            >
            <motion.li
              key={index}
              variants={menuItemVariants}
              className="cursor-pointer hover:text-gray-200"
              >
              {item}
            </motion.li>
            </a>
            
          ))}
          <li key={100}>
            <button
            type="button"
            onClick={()=>{handleDownload(); alert("download resume")}}
            >Resume</button>
          </li>
        </motion.ul>
      </motion.div>
      </>
    // </div>
  );
}

export default CurvedMenu
