
import React from 'react'
import styles from "../pages/css/home.module.css"
 
function Presentation (props){
  return (
    
<div className="flex flex-row gap-10 pb-10 items-center">
<div className="basis-2/3">
  <img src={props.img} alt={props.title} className={styles.imgRound} />
</div>
<div className="basis-1/3">
  <p className={styles.csTitle}>{props.tag}</p>
  <p className={styles.csDescription}>{props.title}</p>
  <p className={styles.csSkills}>{props.blurb}</p>
  <a className="secondaryLink pt-6">View Case Study</a>
</div>
</div>
     
 
  )
}
export default Presentation;