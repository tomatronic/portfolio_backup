import NavBar from "../components/navbar"
import Footer from "../components/footer"
import React from "react"
import Head from "next/head"
import caseStudies from "../components/caseStudies"
import Presentation from "../components/caseStudy"

function WorkWIP() {
    return (
      <>
      <div>
        <Head />
        <NavBar />
        <div className="container max-w-screen-lg mx-auto">
            <p className="text-2xl">Work</p>       
            
            {caseStudies.map((e)=>{
       return (
        <Presentation key={e.link} tag={e.tag} title={e.title} blurb={e.blurb} img={e.img} link={e.link} />
                );
       })}
        </div>
        
        <Footer />
      </div>
      
      </>
    )
  }
  
  export default WorkWIP