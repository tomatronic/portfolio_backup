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

        <div className="pt-40 md:pt-20">
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
          <div className="container max-w-screen-md mx-auto pt-20">

            <div className="flex flex-col gap-8 md:flex-wrap pb-20">
              {caseStudies.map((e) => {
                return (
                  <Presentation key={e.link} tag={e.tag} title={e.title} blurb={e.blurb} img={e.img} link={e.link} />
                );
              })}
            </div>
            {/* <h2 className="text-center text-[36px]">Effective designs that convert</h2>
            <p className="text-center pb-8">Archive of designs I have created.</p>

            <div className="grid grid-cols-3 grid-rows-5 gap-4">
              <div className="row-span-3">1</div>
              <div className="row-span-2 col-start-1 row-start-4">2</div>
              <div className="row-span-2 col-start-2 row-start-1">5</div>
              <div className="row-span-3 col-start-2 row-start-3">6</div>
              <div className="row-span-5 col-start-3 row-start-1">7</div>
            </div> */}

          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage

