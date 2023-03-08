
import React from 'react'
import styles from "../pages/css/home.module.css"
import Link from "next/link"

function Presentation (props){
  return (
 
<div className="flex flex-col md:flex-row gap-10 pb-20 items-center">

<div className="basis-2/3">
  <Link href={props.link}><img src={props.img} alt={props.title} className={styles.imgRound} /></Link>
</div>
<div className="basis-1/3">
  <div>
  <div className="text-gray-500 mb-1 uppercase font-semibold text-sm">{props.tag}</div>
  <h2>{props.title}</h2>
  <p className='text-base'>{props.blurb}</p>
  <a href={props.link} className="text-purple-600">Read case study</a>
  </div>
</div>

</div>
   
     
 
  )
}
export default Presentation;