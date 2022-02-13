import NavBar from "../../components/navbar"
import Link from "next/link"
import styles from "./css/caseStudy.module.css"
import Image from "next/image"
import Footer from "../../components/footer"
import Compare from "@mui/icons-material/Compare";
import Search from "@mui/icons-material/Search";
import People from "@mui/icons-material/People";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import Head from "next/head"
import Zoom from "react-medium-image-zoom"

function caseStudy() {
    return (
        <>
            <div>
                <Head />
                <NavBar />
                <div className={styles.csIntroBanner} />
                <div className={styles.introContainer}>
                    <div className="display"> Offer management</div>
                </div>
                <div className="mainContainer">
                    <div className="row">
                        <div className="column">
                            <h1>About the project</h1>
                            <p>As a Publisher (a user that will promote an offer) I require a way to manage offers that are available to me from a host of available Advertisers (A user that wants to promote a business, product or marketing event), these offers are found in an Advertisers profile or the Advertiser may contact me directly with an offer proposal. I need to be able to see offers that are currently active as well as offers that may be beneficial to me and my affiliate development.</p><br /><br />
                            <h1>Solution</h1>
                            <p>The goal of the project was to focus on the redesigning of how publishers manage affiliate based offers within the Rakuten Advertising dashboard and increase the usage of the platform. This in turn would provide a larger ROI for both Rakuten Advertising and the Publisher.</p>
                        </div>
                        <div className="column">
                            <Zoom>
                                <Image src="/topBanner.png" layout="intrinsic" width="1116" height="766" alt="Small mock of end product" />
                            </Zoom>
                        </div>
                    </div>
                </div>
                <div className="outer-row-purple">
                    <div className="mainContainer">
                        <div className="nopad-row">
                            <div className="column">
                                <h1>What I did</h1>
                                <p>&bull; Sole UX designer on the project<br />
                                    &bull; Stakeholders interviews to identify goals<br />
                                    &bull; User interviews to help understand pain points<br />
                                    &bull; Completed competitor analysis<br />
                                    &bull; Created the information architecture<br />
                                    &bull; Sketched out a variety of initial ideas<br />
                                    &bull; Prototyping and user testing<br />
                                    &bull; High fidelity mockups<br />
                                </p>
                            </div>
                            <div className="column">
                                <div>
                                    <h1>My role</h1>
                                    <p>For this project I was the sole UX designer. I worked closely with the product manager to ensure that the end product was as refined as possible and met all goals set.</p><br />
                                    <p><b>Project duration</b>: June 2021 - August 2021</p><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainContainer">
                    <div className="row">
                        <div className="column">
                            <h1>Project background</h1>
                            <p>Rakuten Advertising offers a way for users to communicate using a variety of dashboards depending on their needs. These communications allow users to create and manage affiliate marketing across a range of mediums.</p>
                            <p>The current dashboard is outdated and in need of a major revamp.</p>
                            <h1>Discovery</h1>
                            <p>The key to any project is to ensure a thorough discovery process.</p>
                            <p>In order to understand the problem to the fullest I first reviewed the current platform and flows associated with the management of offers. I mapped out the flow within Miro using screenshots from the legacy dashboard. This ensured I had a full understanding of how the feature was already working and gain some inital insight into where improvements could be made.</p>
                            <p>However, I will not jump to conclusions without gaining input from the user.</p>
                        </div>
                        <div className="column">
                            <Zoom>
                                <Image src="/legacy1.png" layout="intrinsic" width="1346" height="1841" alt="The legacy dashboard offer invitation screen" />
                            </Zoom>
                        </div>
                    </div>
                    <div className="reverse-row">
                        <div className="column">
                            <h1>Gaining insight</h1>
                            <p>It was now time to capture some qualitative data. To do this created a small survey within a google form (click the image to view the full survey) to distribute amongst the account management teams to help gather a better understanding of how they interacted with this feature, it was also a chance for me to understand known pain points that the team have been presented with over the years. The reason I chose the account managers was due to the level of exposure they have to both the platform and the end users. The personal connection created here often gives valuable insight that may not be otherwise captured.</p>
                            <p>Once I had a pool of data collated I created a affinity diagram to help group the results I had received, this helped me to identify and prioritise points in the next step of the process. I was also able to follow up with some of the participants to further discuss their inputs. I feel this additional step is important, not only will it ensure that the survey answers are fully understood, it creates an additional layer of empathy to help understand the goal of the project.</p>
                        </div>
                        <div className="column">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6gpi8XoE7ODNskrNgo91T5mZLrLipiL0NYczPtvc-L4zKIw/viewform" target="_blank" rel="noreferrer"><Image src="/offersForm.png" layout="responsive" width="944" height="1422" alt="The survey that was communicated to candidates" /></a>
                        </div>
                    </div>
                    <div className="nopad-row">
                        <div className="column">
                            <Zoom>
                                <Image src="/affinitymap.jpg" layout="intrinsic" width="1386" height="721" alt="The affinity map was created to help understand the results from the completed user surveys" />
                            </Zoom>
                        </div>
                    </div>
                </div>
                <div className="outer-row-purple">
                    <div className="mainContainer">
                        <div className="nopad-row">
                            <div className="nopad-column">
                                <center><h1>Goals</h1>
                                    <p>As a result of the survey data I was able to identify three main goals to focus on:</p></center>
                            </div>
                        </div>
                        <div className="nopad-row">
                            <div className="column">
                                <center>
                                    <Compare className="svgIcons" />
                                    <p><b>Comparison</b><br />As a user, If I am presented with a new offer invitation I want to be able to compare it to my current offer.</p>
                                </center>
                            </div>
                            <div className="column">
                                <center>
                                    <Search className="svgIcons" />
                                    <p><b>Discovery</b><br />There was no consistant answer to how a user would find a new offer invitation. Can I make a consistant point of discovery?</p></center>
                            </div>
                            <div className="column">
                                <center>
                                    <People className="svgIcons" />
                                    <p><b>Partnership status</b><br />The current UI does not offer any indication of partnership status. A user wants to know if a partnership already exists.</p></center>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainContainer">
                    <div className="row">
                        <div className="column">
                            <h1>Planning</h1>
                            <p>With my new knowledge I could start planning my next steps. I begun with creating a simple flowchart to illustrate the possible routes a user would take in order to accept a new offer request. I ensured to liaise with several members of user facing teams to make sure nothing was missed out and that flows made sense.</p>
                            <br />
                            <Zoom>
                                <Image src="/flowchart.png" layout="intrinsic" width="1116" height="766" alt="Simple flowchart of a proposed solution" />
                            </Zoom>
                        </div>
                    </div>
                    <div className="notm-row">
                        <div className="column">
                            <h1>Sketching</h1>
                            <p>Once happy with the flow I opened my notepad and began sketching some initial ideas. At this stage I scribble a lot of ideas down both illustrated and in note form, it can look like a mess but I find it helps to get all my ideas on paper. This also allows me to quickly eliminate ideas or come back to ideas at a later date if needed. As I develop an idea I start to sketch it into something of higher quality to allow me to easily translate it to a digital wireframe when the time comes.</p>
                        </div>
                        <div className="column">
                        <Zoom>
                            <Image src="/sketches.png" layout="intrinsic" width="1116" height="766" alt="Initial sketches and ideas - A bit messy but helps me gather thoughts" />
                            </Zoom>
                        </div>
                    </div>
                    <div className="notm-row">
                        <div className="column">
                            <h1>Prototypes</h1>
                            <p>In order to validate my ideas I proceeded to complete a round of simple user testing. Rather than exposing my test candidates to my crude sketches I went ahead and created simple wireframes within sketch that I could share and gather some initial feedback. I used to Zoom to conduct interviews with the candidates and get them to complete a set of simple tasks. This first round of testing allowed me to identify that the users were wanting a dedicated landing page for offer invitations alongside the proposed notification based system.</p>
                        </div>
                        <div className="column">
                        <Zoom>
                            <Image src="/digitalwireframe.png" layout="intrinsic" width="1116" height="766" alt="Simple flowchart of a proposed solution" />
                            </Zoom>
                        </div>
                    </div>
                    <div className="notm-row">
                        <div className="column">
                            <h1>Flow iteration</h1>
                            <p>I continued to slowly increase the complexity of my mocks, allowing the user to gain more understanding of the goal driven outcome. Once the mockups reached a certain point I began mapping them into a map of hotspots within sketch to allow the creation of a interactive prototype. This prototype creates a more linear flow but enables a test candidate to become much more immersed in the test and provide much more beneficial feedback.</p>
                            <br />
                            <Zoom>
                                <Image src="/prototypeMap.png" layout="intrinsic" width="1403" height="931" alt="An example of the complex web of interactions created to allow for testing of the prototype" />
                            </Zoom>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h1>User testing</h1>
                            <p>After performing a number of protoype testing sessions I came to the conclusion a couple of further design adjustments were required. This involved a round of iterations to ensure functionality was highlighted in a relevant way and that offers were made easier to compare with existing options.</p>
                        </div>
                        <div className="column">
                        <Zoom>
                            <Image src="/usertestingOffers.png" layout="intrinsic" width="1849" height="900" alt="An example of the complex web of interactions created to allow for testing of the prototype with external users" />
                            </Zoom>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <Zoom>
                                <Image src="/after.png" layout="intrinsic" width="2435" height="1544" alt="The final offer invitation screen" className={styles.imgRound} />
                            </Zoom>
                            <br />
                            <h1>Outcome</h1>
                            <p>Since the updated offer management flow and UI has been implemented we have seen a reduction in the amount of support tickets raised, and account managers have reported less queries based around offer management. The account management have said that this reduction in queries has led to them having more time to focus on the users needs and build better relationships with them.</p>
                            <p>The product has only been released recently so I will continue to monitor usage through the FullStory application, allowing me to perform iterative design amends to ensure a continual progression to the applications development.</p>
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
                        <div className="column">
                            <Link href="/work/beer-blog">
                                <div className="pNavButton">
                                    <div className="pNavTopic">
                                        <div className="pNavDirection">Next Project</div>
                                        <div className="pNavName">Beer blog</div>
                                    </div>
                                    <div className="pNavChevronR">
                                        <ChevronRight />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default caseStudy