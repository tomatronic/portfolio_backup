import NavBar from "../../components/navbar"
import Link from "next/link"
import Image from "next/image"
import styles from "./css/caseStudy.module.css"
import Footer from "../../components/footer"
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import Head from "next/head"

function beerBlog() {
    return (
        <>
        <div>
        <Head />        
            <NavBar />
            <div className={styles.csIntroBannerbb} />
            <div className={styles.introContainer}>
                <div className="display">Beer blog</div>
            </div>
            <div className="mainContainer">
                    <div className="row">
                        <div className="column">
                            <h1>About the project</h1>
                            <p>I decided I wanted to find a new project for myself. I wanted to create something that would both challenge me as a designer but also still provide a solution to a problem.</p>
                            <p>So what did I decide? After spending a long time thinking about what I enjoyed and how I may be able to transform this into a project I came up with the concept of 'Brewtiful'. The basis to the idea is that craft beers often feature great designs on the cans and bottles they are distrubuted in. I noticed that although there are many websites and apps out there that focus on the beer itself very few mentioned the design effort.</p>
                            <p>I decided that my aim would be to plug this gap by creating a blog/magazine style website that catologued beers I sampled and also ackowledged and admired the effort that went into the designs on the packaging.</p>
                        </div>
                        <div className="column">
                            <Image src="/X.png" layout="responsive" width="394" height="214" alt="Brewtiful - An idea" />
                        </div>
                    </div>
                </div>
                <div className="outer-row">
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