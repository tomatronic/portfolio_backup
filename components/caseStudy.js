
import React from 'react'
import styles from "../pages/css/home.module.css"
 
function Presentation (props){
  return (
    
<div className='row'>
<div className="double-column">
  <img src="/{props.img}.png" alt="{props.title}" className={styles.imgRound} />
</div>
<div className="column">
  <div className={styles.csTitle}>{props.tag}</div>
  <span className={styles.csDescription}>{props.title}</span>
  <span className={styles.csSkills}>{props.blurb}</span>
  <a className="secondaryLink">View Case Study</a>
</div>
</div>
     
 
  )
}
export default Presentation;