import NavBar from "../components/navbar"
import styles from "./css/home.module.css"
import Link from "next/link"
import Footer from "../components/footer"
import React from "react"
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

  return <>
    <div>
      <Head>
        <title>Tom Spencer - UX/UI Designer</title>
        <meta property="og:title" content="Tom Spencer - Ux / UI Designer" />
      </Head>
      <NavBar />
      <div className={styles.mainIntroContainer}>
        <div className={styles.introContainer}>
          <div className="top-row-intro">
            <div className="column-image">
              <div className={styles.introImg}>
                <Link href="/about"><img src="/tomspencer.png" alt="Tom Spencer - UX/UI Designer" width="120" /></Link>
              </div>
            </div>
            <div className="column">
              <div className={styles.blurb}>Hi, I'm</div>
              <div className={styles.intro}>Tom Spencer.</div>
              <div className={styles.blurb}>
                <br /><b>UX/UI designer
                </b>
                &nbsp;focused on delivering <div className={styles.keyPoint}><span>effective</span></div> user centric designs that drive engagement.<br /><br />Currently UX Designer @ <b>Rakuten Advertising</b>.<br /><br /><br />
              </div>

              <div className={styles.btnContainer}>
                <Link href="#work"><button className={styles.btnintro}>See my case studies</button></Link>
              </div>
              <br />
              <i>You can also check out some of my UI projects on <a href="https://dribbble.com/tomatronic" target="_blank" rel="noreferrer" >Dribbble</a> and my professional achievements on <a href="https://www.linkedin.com/in/thomas-spencer/" target="_blank" rel="noreferrer">Linkedin</a>.</i>
            </div>
          </div>
        </div>
      </div>
      <a name="work" id="work" />
      <div className="mainContainer">
      <Link href="/work/designflows">
        <div className={` ${'row'} , ${styles.caseStudy}`}>
        
          <div className="column">
            <img src="/169competition.png" alt="Designflows 2021 - Coming Soon" className={styles.imgRound} />
          </div>
          <div className="column">
            <div className={styles.csTitle}>Designflows 2021</div>
            <h3>Tool Hire App</h3>
            <p>A competition project to create a unique UI within a short amount of time.</p>
            <button className="secondary">View Case Study &#x2192;</button>
          </div>
          
        </div> 
        </Link>
        <Link href="/work/offer-management">
        <div className={` ${'row'} , ${styles.caseStudy}`}>
          <div className="column">
            <img src="/169offers.png" alt="Offer management section of the new dashboard for Rakuten Advertising" className={styles.imgRound} />
          </div>
          <div className="column">
            <div className={styles.csTitle}>Rakuten Advertising</div>
            <h3>Offer Management</h3>
            <p>The updating of a legacy application to offer a modern experience for the user.</p>
            <button className="secondary">View Case Study &#x2192;</button>
          </div>
        </div>
        </Link>
        {/* <Link href="/work/brewtiful"> */}
        <div className={` ${'row'} , ${styles.caseStudy}`}>
          <div className="column">
            <img src="/169brewtiful.png" alt="Brewtiful - My own project looking at beers and design" className={styles.imgRound} />
          </div>
          <div className="column">
            <div className={styles.csTitle}>Brewtiful</div>
            <h3>Beer Blog</h3>
            <p>A personal project where I set out to capture a range of beers and breweries and talk about both the beer itself and the can (and bottle) designs.</p>
            <button className="secondary" disabled>Coming Soon...</button>
          </div>
        </div>
      </div>
      {/* </Link> */}
      <Footer />
    </div>
  </>
}

export default HomePage