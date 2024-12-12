"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";

export function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-2"
      >
         <p className="uppercase tracking-widest text-sm text-center text-black dark:text-blue-100">
            My View Expressed through my work.
          </p>
        <div className="text-4xl md:text-7xl font-bold dark:text-white text-center md:px-10">
        Transforming Concepts into Seamless User Experiences
        </div>
        <div className="font-extralight text-default md:text-3xl dark:text-neutral-200 py-4">
        Hi! I&apos;m Bobby, a Next.js Developer based in INDIA.
        </div>
        <a href="#projects">
        <button className="bg-black dark:bg-white rounded-full font-medium w-fit text-white dark:text-black px-8 py-2">
         See Projects
        </button>
        </a>
      </motion.div>
    </AuroraBackground>
  );
}
