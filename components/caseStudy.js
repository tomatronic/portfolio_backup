import React from 'react'
import Link from "next/link"
import Image from 'next/image'


function Presentation(props) {
  return (

      <div className="flex-1 flex flex-row justify-between overflow-hidden rounded-2xl bg-white border shadow-[0px_1px_8px_rgba(13,34,71,0.12),_0px_28px_96px_rgba(13,34,71,0.1)] group">
        <Link href={props.link}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-0 auto-rows-auto cursor-pointer">
          
        <div className='flex col-span-2'>
            <Image src={props.img} width={900} height={700} alt={props.title} priority={true} className="object-cover animate-fade-in block h-full w-full scale-100 transform object-center opacity-100 transition duration-300 group-hover:scale-110" />
        </div>
        
          <div className='mx-6 my-6 flex flex-col gap-2 col-span-2'>
            <div className="text-gray-500 uppercase font-semibold text-xs">{props.tag}</div>
            <div className='text-lg font-medium'>{props.title}</div>
            <p className='text-sm'>{props.blurb}</p>
            <div className='mt-auto'><span className="text-indigo-600 group-hover:ease-in-out group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 tracking-tight">View case study</span></div>
          </div>
          
        </div>
        </Link>
      </div>
  


  )
}
export default Presentation;