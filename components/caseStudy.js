
import React from 'react'
import Link from "next/link"
import InView from './Layout/InView';


function Presentation(props) {
  return (
<InView>
      <div className="flex-1 flex flex-col justify-between overflow-hidden rounded-2xl bg-white gap-10 pb-20">

        <div className="">
          <Link href={props.link}><img src={props.img} alt={props.title} className="object-cover ease-in-out duration-500 hover:scale-110 cursor-pointer" /></Link>
        </div>
        
          <div>
            <div className="text-gray-500 mb-1 uppercase font-semibold text-sm">{props.tag}</div>
            <h2>{props.title}</h2>
            <p className='text-base'>{props.blurb}</p>
            <Link href={props.link}><span className="text-purple-600">Read case study</span></Link>
          </div>
        

      </div>
  </InView>


  )
}
export default Presentation;