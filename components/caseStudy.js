
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
  <p className={styles.csTitle}>{props.tag}</p>
  <p className={styles.csDescription}>{props.title}</p>
  <p>{props.blurb}</p>
  <a href={props.link} className="secondaryLink">View Case Study</a>
  </div>
</div>

</div>
   
     
 
  )
}
export default Presentation;