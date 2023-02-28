
import React from 'react';
 
function casestudy (props){
  return (
    <div style={{border:'1px solid black',
                 margin:'10px',width:'20%'}}>
      
 
<p> {props.tag} </p>
<p> {props.title}</p>
<p> {props.blurb}</p>
<p> {props.link}</p>
<p> {props.img}</p>
 
 
     </div>
 
  )
}
export default casestudy;