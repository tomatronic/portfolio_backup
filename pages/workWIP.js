import NavBar from "../components/navbar"
import Footer from "../components/footer"
import React from "react"
import Head from "next/head"
import caseStudies from "../components/caseStudies"
import casestudy from "../components/caseStudy"

function WorkWIP() {
    return (
      <>
      <div>
        <Head />
        <NavBar />
        <div className="mainContainer">
            <h2>Work</h2>       
            
            {caseStudies.map((e)=>{
       return (
       <casestudy key={e.link} tag={e.tag} />
     );})}
     
        </div>
        
        <Footer />
      </div>
      
      </>
    )
  }
  
  export default WorkWIP