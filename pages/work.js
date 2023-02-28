import NavBar from "../components/navbar"
import styles from "./css/home.module.css"
import Link from "next/link"
import Footer from "../components/footer"
import React from "react"
import Head from "next/head"

function Work() {
    return (
      <>
      <div>
        <Head />
        <NavBar />
        <div className="mainContainer">
            <h2>Work</h2>       
          <Link href="/work/offer-management">
          <div className={` ${'row-sm-gap'} , ${styles.caseStudy}`}>
              <div className="double-column">
                <img src="/offersThumb.png" alt="Offer management section of the new dashboard for Rakuten Advertising" className={styles.imgRound} />
              </div>
              <div className="column">
                <div className={styles.csTitle}>Rakuten Advertising</div>
                <span className={styles.csDescription}>Improving the offer management experience</span>
                <span className={styles.csSkills}>Product design, User research, User testing</span>
                <a className="secondaryLink">View Case Study</a>
              </div>
            </div>
          </Link>
          <Link href="/work/designflows">
          <div className={` ${'row-sm-gap'} , ${styles.caseStudy}`}>
              <div className="double-column">
                <img src="/competitionThumb.png" alt="Designflows 2021 - Coming Soon" className={styles.imgRound} />
              </div>
              <div className="column">
                <div className={styles.csTitle}>Designflows 2021</div>
                <span className={styles.csDescription}>Creation of a tool hire app</span>
                <span className={styles.csSkills}>Product design, User research, Brand creation</span>              
                <a className="secondaryLink">View Case Study</a>
              </div>
  
            </div>
          </Link>
          <Link href="/work/beer-blog">
          <div className={` ${'row-sm-gap'} , ${styles.caseStudy}`}>
            <div className="double-column">
              <img src="/brewtifulThumb.png" alt="Brewtiful - My own project looking at beers and design" className={styles.imgRound} />
            </div>
            <div className="column">
              <div className={styles.csTitle}>Brewtiful</div>
              <span className={styles.csDescription}>Showcasing craft beers and packaging design</span>
              <span className={styles.csSkills}>Product design, User research, Brand creation, Front-end development</span>            
              <a className="secondaryLink">View Case Study</a>
            </div>
          </div>
          </Link>
        </div>
        
        <Footer />
      </div>
      
      </>
    )
  }
  
  export default Work