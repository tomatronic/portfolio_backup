import React from 'react'
import Link from "next/link"
import Image from 'next/image'


function Presentation(props) {
  return (

      <div className="flex-1 flex flex-row justify-between overflow-hidden rounded-2xl bg-white border shadow-[0px_1px_8px_rgba(13,34,71,0.12),_0px_28px_96px_rgba(13,34,71,0.1)]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-0 auto-rows-auto">
        <div className='flex col-span-2'>
            <Link href={props.link}><Image src={props.img} width={900} height={700} alt={props.title} priority={true} className="object-cover cursor-pointer" /></Link>
        </div>
        
          <div className='mx-6 my-6 flex flex-col gap-2 col-span-2'>
            <div className="text-gray-500 uppercase font-semibold text-xs">{props.tag}</div>
            <div className='text-lg font-medium tracking-tight'>{props.title}</div>
            <p className='text-sm'>{props.blurb}</p>
            <Link href={props.link}><span className="text-indigo-600 hover:text-indigo-500 cursor-pointer tracking-tight">Read case study &#x2192;</span></Link>
          </div>
        </div>

      </div>
  


  )
}
export default Presentation;