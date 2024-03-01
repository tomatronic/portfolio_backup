import Layout from "../components/Layout/index"
import React from "react"
import caseStudies from "../components/caseStudies"
import Presentation from "../components/caseStudy"
import DotMatrix from "../components/portfolioVisual"


function HomePage() {
  React.useEffect(() => {
    const path = window.location.hash;
    if (path && path.includes("#")) {
      setTimeout(() => {
        const id = path.replace("#", "");
        const el = window.document.getElementById(id);
        const r = el.getBoundingClientRect();
        window.top.scroll({
          top: pageYOffset + r.top,
          behavior: "smooth",
        });
      }, 600);
    }
  });

  return (
    <>
      <div className="mb-16">

        <div className="pt-40 md:pt-20">
        <Layout>
            <div className="relative" style={{ height: "100vh" }}>
              <DotMatrix
                rows={200}
                columns={100}
                dotSize={2}
                gapSize={12}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 1,
                }}
              />
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", zIndex: 2 }}
              >
                {/* Your existing content */}
                <text x="50%" y="50%" fontSize="2rem" fill="white" textAnchor="middle">
                  Senior{" "}
                  <tspan
                    className="text-transparent bg-clip-text bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500"
                    dy="1em"
                  >
                    UX Designer
                  </tspan>{" "}
                  focused on delivering simple, yet effective, user-centric designs.
                  <tspan dy="1.5em">
                    Currently Senior UX Designer @{" "}
                    <tspan
                      className="text-transparent bg-clip-text bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500"
                      dy="1em"
                    >
                      <a href="https://www.rakutenadvertising.com" target="_blank" rel="noreferrer">
                        Rakuten Advertising
                      </a>
                    </tspan>
                  </tspan>
                </text>
              </svg>
            </div>
          </Layout>
          <a name="work" id="work" />
          <div className="container max-w-screen-md mx-auto pt-20">
            <h2>Case studies</h2>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`flex-1 flex flex-row justify-between overflow-hidden rounded-2xl bg-white border shadow-[0px_1px_8px_rgba(13,34,71,0.12),_0px_28px_96px_rgba(13,34,71,0.1)] group row-span-1 ${i === 0 ? "col-span-2" : ""}`}>
                  {/* Render the specific case study based on the current iteration index */}
                  <Presentation
                    key={caseStudies[i].link}
                    tag={caseStudies[i].tag}
                    title={caseStudies[i].title}
                    blurb={caseStudies[i].blurb}
                    img={caseStudies[i].img}
                    link={caseStudies[i].link}
                  />
                </div>
              ))}
            </div>
            {/*             <div className="flex flex-col gap-8 md:flex-wrap pb-20">
              {caseStudies.map((e) => {
                return (
                  <Presentation key={e.link} tag={e.tag} title={e.title} blurb={e.blurb} img={e.img} link={e.link} />
                );
              })}
            </div> */}
            {/* <h2 className="text-center text-[36px]">Effective designs that convert</h2>
            <p className="text-center pb-8">Archive of designs I have created.</p>

            <div className="grid grid-cols-3 grid-rows-5 gap-4">
              <div className="row-span-3">
                <Image src="/donutmock.png" width={1000} height={700} className="object-cover animate-fade-in block h-full w-full scale-100 transform object-center opacity-100 transition duration-300 group-hover:scale-110" />
              </div>
              <div className="row-span-2 col-start-1 row-start-4">2</div>
              <div className="row-span-2 col-start-2 row-start-1">5</div>
              <div className="row-span-3 col-start-2 row-start-3">6</div>
              <div className="row-span-5 col-start-3 row-start-1">7</div>
            </div> */}

            <h2 className="pt-20">Additional work</h2>
            <p>Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage

