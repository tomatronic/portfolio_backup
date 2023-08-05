import React from 'react'
import Link from "next/link"


function Presentation(props) {
  return (

      <div className="flex-1 flex flex-col justify-between overflow-hidden rounded-2xl bg-white border shadow-[0px_1px_8px_rgba(13,34,71,0.12),_0px_28px_96px_rgba(13,34,71,0.1)]">

        <div className="">
            <Link href={props.link}><img src={props.img} alt={props.title} className="object-cover cursor-pointer" /></Link>
        </div>
        
          <div className='mx-6 my-6 flex flex-col gap-2'>
            <div className="text-gray-500 uppercase font-semibold text-xs">{props.tag}</div>
            <div className='text-lg font-medium tracking-tight'>{props.title}</div>
            <p className='text-sm'>{props.blurb}</p>
            <Link href={props.link}><span className="text-indigo-500 cursor-pointer">Read case study</span></Link>
          </div>
        

      </div>
  


  )
}
export default Presentation;