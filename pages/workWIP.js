import NavBar from "../components/navbar"
import Footer from "../components/footer"
import React from "react"
import Head from "next/head"
import caseStudies from '../components/caseStudies'
import listWork from '../components/caseStudy'

function Work() {
    return (
      <>
      <div>
        <Head />
        <NavBar />
        <div className="mainContainer">
            <h2>Work</h2>       
            {caseStudies.map((e)=>{
       return (
       <listWork tag={e.tag} title={e.title} blurb={e.blurb} link={e.link} img={e.img} />
     );})}
        </div>
        
        <Footer />
      </div>
      
      </>
    )
  }
  
  export default Work