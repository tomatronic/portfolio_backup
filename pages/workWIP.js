import React from "react"
import caseStudies from "../components/caseStudies"
import Presentation from "../components/caseStudy"

function WorkWIP() {
    return (
      <>
      <div>
        <div className="container max-w-screen-lg mx-auto px-6 pt-10">
            <p className="text-2xl font-semibold">WORK</p>       
            <p className="text-lg mb-20">The following is a small collection of projects I have contributed to and am particularly proud of.</p>
            {caseStudies.map((e)=>{
       return (
        <Presentation key={e.link} tag={e.tag} title={e.title} blurb={e.blurb} img={e.img} link={e.link} />
                );
       })}
        </div>
      </div>
      
      </>
    )
  }
  
  export default WorkWIP