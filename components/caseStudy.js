
import React from 'react';
 
function Presentation (props){
  return (
    <div style={{border:'1px solid black',
                 margin:'10px',width:'20%'}}>
      
 
<p> {props.tag} </p>
<h1> {props.title}</h1>
<p> {props.blurb}</p>
<p> {props.link}</p>
<p> {props.img}</p>
 
 
     </div>
 
  )
}
export default Presentation;