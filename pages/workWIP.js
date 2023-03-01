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
        <div className="container max-w-screen-lg mx-auto px-6 pt-10">
            <p className="text-4xl">Work</p>       
            <p>The following is a small collection of projects I have contributed to and am particularly proud of.</p>
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