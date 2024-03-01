import React from 'react'
import Link from "next/link"
import Image from 'next/image'


function Presentation(props) {
  return (

        <Link href={props.link}>
        <div className="auto-rows-auto cursor-pointer">
          
        <div className='flex col-span-2'>
            <Image src={props.img} width={900} height={350} alt={props.title} priority={true} className="object-cover animate-fade-in block h-full w-full scale-100 transform object-center opacity-100 transition duration-300 group-hover:scale-110" />
        </div>
        
          <div className='mx-6 my-6 flex flex-col gap-2 col-span-2'>
            <div className="text-gray-500 uppercase font-semibold text-xs">{props.tag}</div>
            <div className='text-lg font-medium'>{props.title}</div>
            <p className='text-sm mb-0'>{props.blurb}</p>
{/*             <div className='mt-auto'><span className="text-indigo-600 group-hover:ease-in-out group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 tracking-tight">View case study</span></div>
 */}          </div>
          
        </div>
        </Link>

  )
}
export default Presentation;