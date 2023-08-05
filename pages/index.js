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
    <div className="bg-slate-100">
      
      <div className="-mt-[73px] z-0">
      <Layout>
      <div className="container mx-auto px-6 flex flex-col justify-left -mt-[100px] md:-mt-[73px]">
        <div className="h-full flex">
          <div className="flex flex-row flex-wrap max-w-3xl md:my-36">
            <div className="flex flex-col">                        
              <div className="text-2xl md:text-5xl leading-8">
                <b>UX Designer</b>
                &nbsp;focused on delivering simple and effective user centric designs.<br /><br />
                </div>
                <div className="text-lg">Currently UX Designer @ <b><a href="https://www.rakutenadvertising.com" target="_blank" rel="noreferrer">Rakuten Advertising</a></b>
              </div>          
            </div>
          </div>
        </div>
      </div>
      </Layout>  
      <a name="work" id="work" />    
      <div className="container mx-auto px-6 pt-10">
      <div className="flex flex-col gap-8 md:flex-row md:flex-wrap">
      {caseStudies.map((e)=>{
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
      
