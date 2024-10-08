import Layout from "../components/Layout/index";
import React, { useEffect } from "react";
import caseStudies from "../components/caseStudies";
import Presentation from "../components/caseStudy";

function HomePage() {

  useEffect(() => {
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
            <div className="relative">
              

              
              <div
                className="container max-w-screen-md mx-auto px-6 flex flex-col justify-center relative z-10 md:text-left flex-wrap max-w-s md:max-w-3xl my-16 md:my-24"
                style={{ pointerEvents: "none" }}
              >
                <div className="text-2xl md:text-5xl md:leading-snug tracking-tight text-center">
                  <b className="text-transparent bg-clip-text bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500">
                    UX Designer
                  </b>
                  &nbsp;focused on delivering simple, yet effective,
                  user-centric designs.
                  <br />
                </div>
                <div className="text-lg pt-10 text-center">
                  Currently Senior UX Designer @{" "}
                  <b>
                    <a
                      href="https://www.rakutenadvertising.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Rakuten Advertising
                    </a>
                  </b>
                </div>
              </div>
            </div>
          </Layout>
          <a name="work" id="work" />
          <div className="container max-w-screen-xl mx-auto pt-20">
            <h2>Case studies</h2>
            <div className="grid grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 flex flex-row justify-between overflow-hidden rounded-2xl bg-white border shadow-[0px_1px_8px_rgba(13,34,71,0.12),_0px_28px_96px_rgba(13,34,71,0.1)] group row-span-1`}
                >
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
            <h2 className="pt-20">Additional work</h2>
            <p>Coming very soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;