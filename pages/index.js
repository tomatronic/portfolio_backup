import NavBar from "../components/navbar"
import Link from "next/link"
import Layout from "../components/Layout/index"
import Footer from "../components/footer"
import React from "react"
import Head from "next/head"
import caseStudies from "../components/caseStudies"
import Presentation from "../components/caseStudy"

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

  return (
    <>
    <div>
      <Head />
      <NavBar />
      <Layout>
      <div className="container max-w-screen-lg mx-auto px-6 pt-10">
        <div className="text-center">
          <div className="flex flex-row flex-wrap max-w-xl mx-auto md:my-24">
            <div className="flex flex-col">
            <div className="my-6 mx-auto">
              <Link href="/about"><img src="/tomspencer.png" alt="Tom Spencer - UX/UI Designer" width="80" /></Link>
              </div>
              <div className="text-lg md:text-xl">Hi, I'm Tom —</div>              
              <div className="text-2xl md:text-3xl leading-8">
                I'm a <b>UX Designer</b>
                &nbsp;focused on delivering effective user centric designs that drive engagement.<br /><br />
                </div>
                <div className="text-lg md:text-xl">Currently UX Designer @ <b><a href="https://www.rakutenadvertising.com">Rakuten Advertising</a></b><br /><br /><br />
              </div>          
            </div>
          </div>
        </div>
      </div>
      </Layout>
      <a name="work" id="work" />
      <div className="container max-w-screen-lg mx-auto px-6 pt-10">
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

export default HomePage