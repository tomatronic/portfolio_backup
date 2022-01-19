import NavBar from "../../components/navbar"
import Link from "next/link"
import styles from "./css/caseStudy.module.css"
import Image from "next/image"
import Footer from "../../components/footer"
import ChevronRight from "@mui/icons-material/ChevronRight";
import Head from "next/head"

function caseStudy() {
    return (
        <>
            <div>
                <Head />
                <NavBar />
                <div className={styles.csIntroBannerdf} />
                <div className={styles.introContainer}>
                    <div className="display">Tool hire app</div>
                </div>
                <div className="mainContainer">
                    <div className="row">
                        <div className="column">
                            <h1>About the project</h1>
                            <p>This is a little different to my other case studies as it was a competition in which I had only the weekend to complete the task at hand.</p>
                            <p>I received access to the brief at 7pm Friday night and had to submit my high fidelity mocks by the following Monday at 10am.</p>
                            <p>Safe to say that I drank a lot of coffee that weekend...☕</p>
                        </div>
                        <div className="column">
                            <Image src="/designflows.png" layout="responsive" width="394" height="214" alt="Designflows 2021 logo" />
                        </div>
                    </div>
                </div>
                <div className="outer-row">
                    <div className="mainContainer">
                        <div className="nopad-row">
                            <div className="column">
                                <h1>My role</h1>
                                <p>As this project was a competition I was the only person involved. It meant a lot of careful planning and self critque.</p>
                                <p><b>Project duration</b>: 8 Oct 2021 7p.m. - 11 Oct 2021 9a.m.</p><br />
                            </div>
                            <div className="column">
                                <h1>What I did</h1>
                                <p>&bull; Planned meticulously<br />
                                    &bull; Competitor research<br />
                                    &bull; Create a brand identity<br />
                                    &bull; Sketched out a variety of initial ideas<br />
                                    &bull; High fidelity mockups<br />
                                    &bull; App icon design<br />
                                    &bull; Poster design
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainContainer">
                    <div className="row">
                        <div className="column">
                            <h1>Overview</h1>
                            <p>The brief itself requested a new mobile app to be designed to allow a user to hire a toolkit from a location nearby for a specific task.</p>
                            <p>For example I may need to put some shelves up, I would visit this app and find a location to pick a toolkit up containing required tools from a specified pick up location.</p>
                            <p>The brief specified 3 specific pages that required designing:</p>
                            <p>&bull; <b>Toolkit rental</b> - This had to include a search bar<br />
                                &bull; <b>My rentals</b> - Manage and track bookings<br />
                                &bull; <b>How it works</b> - Instructions on how to collect a toolkit</p>
                            <p>As well as an app icon and a poster that presented the screens.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h1>Plan of action</h1>
                            <p>This project was going to be a lot of work, and there was not much time to do it. I decided to spend the friday evening reading through the brief multiple times, I printed the document off and highlighted key points.</p>
                            <p>Once happy I understood what was being asked for I begun making a to do list. This would help me work methodically and would make sure I covered everything required of me during this weekend.</p>
                        </div>
                        <div className="column">
                            <Image src="/poa.png" layout="responsive" width="944" height="944" alt="It was important for me to make a to do list to help ensure I stayed on track." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h1>Competitor research</h1>
                            <p>Due to the time constraints I had to take a slightly different appraoch to what I am used to. The research phase is the most important part of the project, it helps ensure that my understanding as as good as it can be.</p>
                            <p>I decided the quickest approach to the research phase of this particular project would be to look at what could be considered competitor businesses. I begun by looking at large DIY style companies, IKEA, B&amp;Q etc. I then also considered businesses that primarily offer a hire service, for example Uber. I then went even further and looked at companies that offered collection and delivery services such as deliveroo. These companies and there apps helped me to build a better understanding of the current market, the common UI elements and where I may be able to make improvements.</p>
                            <br />
                            <Image src="/compResearch.png" layout="responsive" width="2000" height="944" alt="Identifying key components in competitor / similar applications allowed me to begun gathering a list of potential components that would be needed." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h1>Brand identity</h1>
                            <p>I decided to spend some time inventing a brand identiy for this project. It meant I was able to create a simple pattern library that I could then deploy much quicker into the final design.</p>
                            <p>I mainly focused on colour palette and typography. I settled on something that was fairly simple but offered a level of uniqueness.</p>
                            <br />
                            <Image src="/brandID.png" layout="responsive" width="2000" height="1040" alt="Identifying key components in competitor / similar applications allowed me to begun gathering a list of potential components that would be needed." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h1>Initial ideas</h1>
                            <p>Now I had a basic pattern library I decided to start sketching out some ideas for my app.</p>
                            <p>I had a lot of ideas at this stage and ended up working out a full user flow, even though I would only be working on a couple of screens, this likely cost some time, but it meant I identified some extra details I could use to enhance the app.</p>
                            <p>I begun with some really rough sketches that I could then iterate on if I felt they had enough potential. This allowed me to complete a lot more sketches in a much shorter amount of time.</p>
                            <p>By Saturday evening I was confident that I had created a sketch that I could work with. I decided to take a break at this point until the next day. It meant I had plenty of time to focus on the high fidelity mocks, icon and presentation poster the next day.</p>
                        </div>
                        <div className="column">
                            <Image src="/sketch.png" layout="responsive" width="1421" height="1000" alt="An example of sketches completed for the first screen of the app" />
                        </div>
                    </div>
                    <div className="nopad-row">
                        <div className="nopad-column">
                            <h1>Mockups</h1>
                            <p>Sunday morning I decided to get an early start, I spent a large chunk of the day working on the mock ups for the required screens to ensure they made sense, even though I wasnt completing a full app I wanted to make sure that it could be added to in the future easily and still make sense.</p>
                        </div>
                    </div>
                </div>
                <div className="outer-row">
                    <div className="mainContainer">
                        <div className="row">
                            <div className="nopad-column">
                                <Image src="/appMocks.png" layout="responsive" width="1365" height="879" alt="Preview of how the app mocks were looking" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainContainer">
                    <div className="row">
                        <div className="column">
                            <h1>App icon</h1>
                            <p>The last major part of the project to complete on sunday afternoon was the app icon. This was an area of the project I struggled with. I have not had to design an app icon before which meant there was a bit of learning curve.</p>
                            <p>The initial step here was to make sure I was working to correct dimensions. I then spent some time understanding what was needed to create an app icon that stands out.</p>
                            <p>I spent a lot of effort and made many iterations to icon. I ended up settling on a simple icon that used the colour palette from the app to ensure a consistant expereince.</p>
                            <br />
                            <Image src="/iconexploration.png" layout="responsive" width="2000" height="646" alt="Examples of the many icon ideas I explored" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h1>Icon Decision</h1>
                            <p>After running through many iterations of the icon I settled on this. The reason for my choice was as follows:<br /><br />
                                &bull; <b>Unique</b> - I felt some of my ideas had similarities with other large brands, I wanted something that was unique to this project to help with its identity.<br /><br />
                                &bull; <b>Negative space</b> - I enjoyed playing with the idea of a house in the negative space to help show what the app is about, the negative space could also be seen as an upwards arrow helping to show that the app offers assistance with 'upgrading' your home.<br /><br />
                                &bull; <b>Simplicity</b> - This icon uses a minimal amount of colour and iconography which I feels gives a clean and simplistic icon.
                            </p>
                        </div>
                        <div className="column">
                            <Image src="/appStoreMock.png" layout="responsive" width="1024" height="1757" alt="Final icon design" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h1>Outcome</h1>
                            <br />
                            <Image src="/dfFinal.png" layout="responsive" width="1403" height="931" alt="Designflows final submission 2021" />
                            <br />
                            <p>Overall I am happy with the result. However, I wish I had more time to perfect this.</p>
                            <p>The initial area I would have spent more time on would have been the research phase, I would have liked to have gained a better understanding of the competitor landscape. The addition of user interviews would have also assisted in the research and the end result. I also think I could of come up with a more refined color palette and framework for the project, but this may of been a stretch to achieve given the time constraint.</p>
                            <br />
                            <h1>Final thoughts</h1>
                            <p>The competition was fun, and I will be looking out for the event again later this year. However, in the meantime I will take the judges feedback onboard and possibly revisit this project at a later date to try and improve the final result.</p>
                        </div>
                    </div>
                </div>
                <div className="projectNavContainer">
                    <div className="row">
                        <div className="blank-column">

                            <div className="pNavDirection">&nbsp;</div>

                            <div className="pNavName">&nbsp;</div>

                        </div>
                        <div className="column">
                            <Link href="/work/offer-management">
                                <div className="pNavButton">
                                    <div className="pNavTopic">
                                        <div className="pNavDirection">Next Project</div>
                                        <div className="pNavName">Offer management</div>
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