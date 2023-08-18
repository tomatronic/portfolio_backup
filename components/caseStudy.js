import React from 'react'
import Link from "next/link"
import Image from 'next/image'


function Presentation(props) {
  return (

      <div className="flex-1 flex flex-col justify-between overflow-hidden rounded-2xl bg-white border shadow-[0px_1px_8px_rgba(13,34,71,0.12),_0px_28px_96px_rgba(13,34,71,0.1)]">

        <div className="">
            <Link href={props.link}><Image src={props.img} width={900} height={700} alt={props.title} priority={true} placeholder="blur" className="object-cover cursor-pointer" /></Link>
        </div>
        
          <div className='mx-6 my-6 flex flex-col gap-2'>
            <div className="text-gray-500 uppercase font-semibold text-xs">{props.tag}</div>
            <div className='text-lg font-medium tracking-tight'>{props.title}</div>
            <p className='text-sm'>{props.blurb}</p>
            <Link href={props.link}><span className="text-indigo-500 cursor-pointer tracking-tight">Read case study &#x2192;</span></Link>
          </div>
        

      </div>
  


  )
}
export default Presentation;