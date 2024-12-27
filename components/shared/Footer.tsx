import { socialMedia } from '@/lib/data'
import React from 'react'
import { LinkPreview } from '../ui/link-preview'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex px-10 py-10 md:px-36 md:flex-row flex-col justify-between items-center gap-4 border-t-[1px] border-gray-700 rounded-tr-3xl rounded-tl-3xl">
        <p className=" text-default md:font-normal font-light md:text-lg">
          Copyright © 2024 <LinkPreview url="https://github.com/bhagesh01" className="font-bold">
          Bhagesh Bansode
        </LinkPreview>
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300  bg-black"
            >
              <Link href={info.path} target="_blank" >
                <img src={info.img} alt="icons" className='dark:text-white -black' width={30} height={30} />
              </Link>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Footer