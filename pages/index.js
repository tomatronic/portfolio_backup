import Layout from "../components/Layout/index"
import React from "react"
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
      <div className="mb-16">

        <div>
          <Layout>
            <div className="bgImage bg-center bg-no-repeat bg-cover bg-opacity-50">
            <div className="container max-w-screen-md mx-auto px-6 flex flex-col justify-center">
              <div className="h-full flex">
                <div className="text-center md:text-left flex flex-row flex-wrap max-w-s md:max-w-3xl my-16 md:mb-36 md:mt-40">
                  <div className="flex flex-col text-center">
                    <div className="text-2xl md:text-5xl md:leading-snug tracking-tight">
                      <b className="text-transparent bg-clip-text bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500">UX Designer</b>
                      &nbsp;focused on delivering simple, yet effective, user centric designs.<br />
                    </div>
                    <div className="text-lg pt-10">Currently UX Designer @ <b><a href="https://www.rakutenadvertising.com" target="_blank" rel="noreferrer">Rakuten Advertising</a></b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Layout>
          <a name="work" id="work" />
          <div className="container max-w-screen-md mx-auto px-6">
            <div className="flex flex-col gap-8 md:flex-wrap">
              {caseStudies.map((e) => {
                return (
                  <Presentation key={e.link} tag={e.tag} title={e.title} blurb={e.blurb} img={e.img} link={e.link} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage

