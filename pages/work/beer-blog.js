import NavBar from "../../components/navbar"
import Link from "next/link"
import Image from "next/image"
import styles from "./css/caseStudy.module.css"
import Footer from "../../components/footer"
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import Head from "next/head"
import React from "react"
import Zoom from "react-medium-image-zoom"

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
                <div className={styles.banner}>
                            <div className={styles.ringContainer}>
                                <div className={styles.ringring}></div>
                                <div className={styles.circle}></div>
                            </div>
                            <div className={styles.bannerCopy}>
                            This is an <b>active project</b>, case study is being continously updated. Check back for updates soon.
                            </div>
                        </div>
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
                            <div className="column">
                                <h1>My role</h1>
                                <p>This is a personal project and so I am the only person involved.</p>
                                <p><b>Project duration</b>: Oct 2022 - Ongoing</p><br />
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
                    <div className="column">
                    <Zoom>
                            <Image src="/initialDoodle.png" layout="intrinsic" width="1000" height="774" alt="Some very messy initial thoughts on what I wanted to include and the direction I could take a name" />
                        </Zoom>
                    </div>
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
                </div>
                <div className="outer-row-bby">
                    <div className="mainContainer">
                <div className="nopad-row">
                    <div className="nopad-column">
                        <center><h1>Who is this for?</h1></center>
                        <center><p>My next task was to work out who my audience was and what they might want to get from this new site. As this is a personal project my access to research is a little more limited, but I went ahead and created a couple of personas based on data I could find. I focused o the two sides of this project, the beer lover and the design lover. The end goal is to create  project that an be enjoyed from both parties. Creating these personas will help ensure I stay as user centric as possible.</p></center>
                    </div>
                </div>
                <div className="nopad-row">
                    <div className="column">
                    <Zoom>
                            <Image src="/beerLover.png" layout="intrinsic" width="1684" height="1190" alt="User Persona A - The user persona of a beer lover" />
                        </Zoom>
                    </div>
                    <div className="column">
                    <Zoom>
                            <Image src="/designLover.png" layout="intrinsic" width="1684" height="1190" alt="User Persona B - The user persona of a design lover" />
                        </Zoom>
                    </div>
                </div>
                </div>
                </div>
                <div className="mainContainer">
                <div className="row">
                    <div className="column">
                        <h1>Conidering content</h1>
                        <p>Now was time to start thinking about what content would make up this site.</p>
                        <p>In order to start sketching some ideas I decided to plan out a rough IA (Information Architecture) in order to identify the pages that would need designing.</p>
                        <p>The site would likely be fairly simple and built in a way that I could reuse a template for multiple pages. I wanted to ensure that adding new content was not a labourious task. With this in mind I identified 5-6 main pages/templates I would require:</p>
                                <p>
                               &bull; <b>Homepage</b> - Something that promotes new content and encourages interaction.<br />
                               &bull; <b>A search / directory page</b> - This could be used for both beers and breweries.<br />
                               &bull; <b>Beer bio</b> - A page for a single beer, this is the most information packed of the pages.<br />
                               &bull; <b>Brewery bio</b> - I would keep this quite simple, basic details and reviewed beers.<br />
                               &bull; <b>Blog</b> - This can be kept fairly simple. The main focus is the beer!<br />
                               &bull;  <b>Resource pages</b> - This includes 'about', 'contact' etc.
                                </p>
                        <p>At this point I have a good idea about the structure of the site. It's time to start thinking about design.</p>
                        <br />
                        <Zoom>
                            <Image src="/brewtifulIA.png" layout="intrinsic" width="1392" height="622" alt="My inital decision for the IA of the new site. Kept a fairly flat IA." />
                        </Zoom>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h1>Initial sketches</h1>
                        <p>I decided to take pen to paper again at this point and begin sketching some ideas. I wanted to get a rough idea of what may work and aimed to identify information that may or may not be needed on the pages.</p>
                        <p>The idea of quick scribbles like this allows me to perform multiple iterations in minimal time. It also helps begin the process of creating more of a brand identity.</p>
                    </div>
                    <div className="column">
                    <Zoom>
                            <Image src="/initialSketchBrewtiful.png" layout="intrinsic" width="1000" height="1000" alt="I doodled quite a bit for this project, here is a sample of some of my ideas." />
                        </Zoom>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h1>Brand identity</h1>
                        <p>I decided to take pen to paper again at this point and begin sketching some ideas. I wanted to get a rough idea of what may work and aimed to identify information that may or may not be needed on the pages.</p>
                        <p>The idea of quick scribbles like this allows me to perform multiple iterations in minimal time. It also helps begin the process of creating more of a brand identity.</p>
                    </div>
                    <div className="column">
                    <Zoom>
                            <Image src="/beerID.png" layout="intrinsic" width="1545" height="1152" alt="I created a simple colour palette and chose two fonts to identify my brand." />
                        </Zoom>
                    </div>
                </div> 
                <div className="row">
                    <div className="column">
                        <h1>Low fidelity mocks</h1>
                        <p>I felt at this point that the project was at a good point. And although not a huge step I decided to grab my favourite of the previous sketches and reproduce them in an ever so slightly better version.</p>
                        <p>This new version of the mockups helped me further understad how the final page may look. A few tweaks added here and I am strting to be very happy with the design direction.</p>
                    </div>
                    <div className="column">
                    <Zoom>
                            <Image src="/lofiBeer.png" layout="intrinsic" width="2000" height="1500" alt="Developing sketches into some very simple digital assets" />
                        </Zoom>
                    </div>
                </div>            
                <div className="row">
                    <div className="column">
                        <h1>Simple prototyping</h1>
                        <p>I followed a slightly alternate route to what I might usually. I decided to go ahead and create a few simple prototypes that I could then try and gather some feedback on.</p>
                        <p>At this point I wasnt sure how I would go about getting some testing completed, or even gathering feedback. I didnt want to rely on friends and collegaues as they tend to be less honest due to a personal connection. So I would have to find a resource online in order to complete a little testing and gather some feedback.</p>
                    </div>
                    <div className="column">
                    <Zoom>
                            <Image src="/placehold.png" layout="intrinsic" width="1000" height="1000" alt="Developing sketches into some very simple digital assets" />
                        </Zoom>
                    </div>
                </div>
            </div>
            <div className="projectNavContainer">
                <div className="row">
                <div className="column">
                        <Link href="/work/designflows">
                            <div className="pNavButton">
                            <ChevronLeft />
                                <div className="pNavTopic">
                                    <div className="pNavDirection">Previous Project</div>
                                    <div className="pNavName">Tool hire app</div>
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