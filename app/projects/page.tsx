
"use client"


// import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/shared/MagicButton";
import { ArrowBigDown } from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/data";

const Page = () => {

  const [preview , setPreview] = useState(false);

   
const words = `Welcome to the Projects Section . As it is in under development process. Soon It will be in display and deployed mode. Thanks for visiting.
`;


  return (


  <div className="min-h-screen md:px-20 px-6 flex flex-col items-center justify-center py-20 bg-black">

     <FloatingNav navItems={navItems} />
    <div>
      {
        preview ? (    <BentoGrid className="max-w-4xl mx-auto py-10">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>) : (<TextGenerateEffect words={words} />)
      }
    
    </div>
    {
    preview ? (<button 
      onClick={()=>{setPreview(false)}}
      className="w-fit">
        <MagicButton 
        title="Done Previewing"
        icon={<ArrowBigDown />}
        position="right"
        />
      </button>) : (<button 
    onClick={()=>{setPreview(true)}}
    className="w-fit">
      <MagicButton 
      title="Preview the section Builded So far"
      icon={<ArrowBigDown />}
      position="right"
      />
    </button>)
  }
  </div>

  
  )
}

export default Page;


const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];