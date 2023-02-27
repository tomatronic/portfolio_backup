import NavBar from "../components/navbar"
import styles from "./css/home.module.css"
import Link from "next/link"
import Footer from "../components/footer"
import React from "react"
import { motion, useIsPresent } from "framer-motion"
import Head from "next/head"

function HomePage() {


  React.useEffect(() => {
    const path = window.location.hash
    if (path && path.includes("#")) {
      setTimeout(() => {
        const id = path.replace("#", "")
        const el = window.document.getElementById(id)
        const r = el.getBoundingClientRect()
        window.top.scroll({
          top: pageYOffset + r.top,
          behavior: "smooth",
        })
      }, 600)
    }
  })
  const isPresent = useIsPresent();
  return (
    <>
    <div>
      <Head>
        <title>Tom Spencer - UX/UI Designer</title>
        <meta property="og:title" content="Tom Spencer - Ux / UI Designer" />
      </Head>
      <NavBar />
      
      <div className={styles.mainIntroContainer}>
        <div className={styles.introContainer}>
          <div className="top-row-intro">
            <div className="column">
            <div className="column-image">
              <Link href="/about"><img src="/tomspencer.png" alt="Tom Spencer - UX/UI Designer" width="80" /></Link>
              </div>
              <div className={styles.blurb}>Hi, I'm Tom —</div>              
              <div className={styles.intro}>
                I'm a <b>UX Designer</b>
                &nbsp;focused on delivering <div className={styles.keyPoint}><span>effective</span></div> user centric designs that drive engagement.<br /><br />
                </div>
                <div className={styles.blurb}>Currently UX Designer @ <b>Rakuten Advertising</b><br /><br /><br />
              </div>          
            </div>
          </div>
        </div>
      </div>
      <a name="work" id="work" />
      <div className="mainContainer">        
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
        <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
      </div>
      
      <Footer />
    </div>
    
    </>
  )
}

export default HomePage