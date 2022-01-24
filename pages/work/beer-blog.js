import NavBar from "../../components/navbar"
import Link from "next/link"
import Image from "next/image"
import styles from "./css/caseStudy.module.css"
import Footer from "../../components/footer"
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import Head from "next/head"
import React from "react"
import Zoom from "react-medium-image-zoom"
import 'react-medium-image-zoom/dist/styles.css'

function beerBlog() {
    return (
        <>
        <div>
        <Head />        
            <NavBar />
            <div className={styles.csIntroBannerbb} />
            <div className={styles.introContainer}>
                <div className="display">It's Brewtiful</div>
            </div>
            <div className="mainContainer">
                    <div className="row">
                        <div className="column">
                            <h1>About the project</h1>
                            <p>I decided I wanted to find a new project for myself. I wanted to create something that would both challenge me as a designer but also still provide a solution to a problem.</p>
                            <p>So what did I decide? After spending a long time thinking about what I enjoyed and how I may be able to transform this into a project I came up with the concept of 'Brewtiful'. The basis to the idea is that craft beers often feature great designs on the cans and bottles they are distrubuted in. I noticed that although there are many websites and apps out there that focus on the beer itself very few mentioned the design effort.</p>
                            <br />
                            <h1>Project Goal</h1>
                            <p>Create a magazine/blog style website that focuses on craft beers and the packaging they are delivered in. Each beer will be reviewed in a way that entertains but also educates.</p>
                        </div>
                        <div className="column">
                        <Zoom>
                            <Image src="/sampleBeer.png" layout="intrinsic" width="500" height="542" alt="I had previously begun exploring ways of documenting beers I had sampled" />
                        </Zoom>
                        </div>
                    </div>
                </div>
                <div className="outer-row-bb">
                    <div className="mainContainer">
                        <div className="nopad-row">
                            <div className="column">
                                <h1>My role</h1>
                                <p>This is a personal project and so I am the only person involved.</p>
                                <p><b>Project duration</b>: Dec 2021 - Ongoing</p><br />
                            </div>
                            <div className="column">
                                <h1>What I did</h1>
                                <p>&bull; Planned meticulously<br />
                                    &bull; Competitor research<br />
                                    &bull; Create a brand identity<br />
                                    &bull; Sketched out a variety of initial ideas<br />
                                    &bull; High fidelity mockups<br />
                                    &bull; Logo design<br />
                                    &bull; Website design
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="mainContainer">
            <div className="row">
                    <div className="column">
                        <h1>A new brand is born</h1>
                        <p>So now I had my idea in place I wanted to give it name. I wanted to be able to refer to this idea as a brand and not just a thing. I also new I needed to create my goal. So my next steps was to come up with a name and an end goal.</p>
                        <p>I decided I wanted to highlight that the brand involved beer and design, I knew I wanted a name that was easy and played on words. After many hours of searching the internet, checking domain availabilities and social channels names I settled on the name 'Brewtiful'! More on this in a bit.</p>
                    </div>
                    <div className="column">Image</div>
                </div>
                <div className="row">
                    <div className="column">
                        <h1>Understanding the landscape</h1>
                        <p>My initial task was to explore what options were already available to try and gain an understanding of where my idea may sit.</p>
                        <p>I collated a few of the sites into a list and identifed where they were similar and if they offered any unique selling points. I then plotted my proposal against these findings.</p>
                    </div>
                    <div className="column">
                        <Zoom>
                            <Image src="/brewComp.png" layout="intrinsic" width="2390" height="1206" alt="Competitor research - Investigating the craft beer and design review landscape" />
                        </Zoom>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        This page is currently being constructed, please check back soon...
                    </div>
                </div>
            </div>
            <div className="projectNavContainer">
                <div className="row">
                <div className="column">
                        <Link href="/work/offer-management">
                            <div className="pNavButton">
                            <ChevronLeft />
                                <div className="pNavTopic">
                                    <div className="pNavDirection">Previous Project</div>
                                    <div className="pNavName">Offer management</div>
                                </div>                                
                            </div>
                        </Link>
                    </div>
                    <div className="blank-column">

                        <div className="pNavDirection">&nbsp;</div>

                        <div className="pNavName">&nbsp;</div>

                    </div>                    
                </div>
            </div>

            <Footer />
            </div>
        </>
    )
}

export default beerBlog