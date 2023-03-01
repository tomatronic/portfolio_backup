
import React from 'react'
import styles from "../pages/css/home.module.css"
 
function Presentation (props){
  return (
    
<div className="flex flex-row gap-10 pb-20 items-center">
<div className="basis-2/3">
  <img src={props.img} alt={props.title} className={styles.imgRound} />
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