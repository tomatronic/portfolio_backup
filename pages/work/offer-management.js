import Link from "next/link"
import Image from "next/image"
import Zoom from "react-medium-image-zoom"

function Offer() {
    return (
        <>
            <div>
                <div className="h-[300px] md:h-[500px] bg-offers bg-no-repeat bg-cover bg-center"></div>
                <div className="container max-w-screen-md mx-auto px-6 py-10 border-b border-gray-200">
                    <h1> Offer management</h1>
                </div>
                <div className="container max-w-screen-md mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center">
                        <div className="flex flex-col">
                            <h2>About the project</h2>
                            <p>As a Publisher (a user that will promote an offer) I require a way to manage offers that are available to me from a host of available Advertisers (A user that wants to promote a business, product or marketing event), these offers are found in an Advertisers profile or the Advertiser may contact me directly with an offer proposal. I need to be able to see offers that are currently active as well as offers that may be beneficial to me and my affiliate development.</p>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-lg mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center pb-20">
                        <div className="flex flex-col">
                            <Zoom>
                                <Image src="/topBanner.png" layout="intrinsic" width="1600" height="927" alt="Small mock of end product" />
                            </Zoom>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-md mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center pb-10">
                        <div className="flex flex-col">
                            <h2>Solution</h2>
                            <p>The goal of the project was to focus on the redesigning of how publishers manage affiliate based offers within the Rakuten Advertising dashboard and increase the usage of the platform. This in turn would provide a larger ROI for both Rakuten Advertising and the Publisher.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-full bg-purple-500 text-white">
                <div className="container max-w-screen-md mx-auto px-6 pt-20">
                        <div className="flex flex-row gap-12 pb-20">
                            <div className="flex flex-col flex-1">
                                <h2>What I did</h2>
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
                            <div className="flex flex-col flex-1">
                                <div>
                                    <h2>My role</h2>
                                    <p>For this project I was the sole UX designer. I worked closely with the product manager to ensure that the end product was as refined as possible and met all goals set.</p><br />
                                    <p><b>Project duration</b>: June 2021 - August 2021</p><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-md mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center">
                        <div className="flex flex-col">
                            <h2>Project background</h2>
                            <p>Rakuten Advertising offers a way for users to communicate using a variety of dashboards depending on their needs. These communications allow users to create and manage affiliate marketing across a range of mediums.</p>
                            <p>The current dashboard is outdated and in need of a major revamp.</p>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-md mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center">
                        <div className="flex flex-col">
                            <h2>Discovery</h2>
                            <p>The key to any project is to ensure a thorough discovery process.</p>
                            <p>To understand the problem I first reviewed the current platform and flows associated with the management of offers. I mapped out the flow within Miro using screenshots from the legacy dashboard. This ensured I had a full understanding of how the feature was already working and gain some inital insight into where improvements could be made.</p>
                            <p>However, I will not jump to conclusions without gaining input from the user.</p>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-lg mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center">
                        <div className="flex flex-col">
                            <Zoom>
                                <Image src="/legacy1.png" layout="intrinsic" width="1952" height="1200" alt="The legacy dashboard offer invitation screen" />
                            </Zoom>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-md mx-auto px-6 pt-20">
                    <div className="flex flex-row flex-wrap gap-6 content-center">
                        <div className="flex flex-col">
                            <h2>Gaining insight</h2>
                            <p>I went ahead and captured some qualitative data. To do this I created a small survey within a google form (click the image to view) to distribute amongst the account management teams to help gather a better understanding of how they interacted with this feature, it was also a chance for me to understand known pain points that the team have been presented with. The reason I chose the account managers was due to the level of exposure they have to both the platform and the end users.</p>
                            <p>Once I had a pool of data collated I created an affinity diagram to help group the results I had received, this helped me to identify and prioritise points in the next step of the process. I also followed up with some of the participants to further discuss their inputs and gather additional feedback. I feel this additional step is important, not only will it ensure that the survey answers are fully understood, it creates an additional layer of empathy to help understand the goal of the project.</p>
                        </div>
                        <div className="flex flex-col">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6gpi8XoE7ODNskrNgo91T5mZLrLipiL0NYczPtvc-L4zKIw/viewform" target="_blank" rel="noreferrer"><Image src="/offersForm.png" layout="responsive" width="944" height="1422" alt="The survey that was communicated to candidates" /></a>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-lg mx-auto px-6 pt-10 pb-20">
                    <div className="flex flex-row flex-wrap gap-6 content-center">
                        <div className="flex flex-col">
                            <Zoom>
                                <Image src="/affinitymap.jpg" layout="intrinsic" width="1386" height="721" alt="The affinity map was created to help understand the results from the completed user surveys" />
                            </Zoom>
                        </div>
                    </div>
                </div>
                <div className="max-w-full bg-purple-500 text-white">
                    <div className="container max-w-screen-md mx-auto px-6 pt-10">
                        <div className="flex flex-row flex-wrap gap-6 content-center">
                            <div className="nopad-flex flex-col">
                                <h2>Goals</h2>
                                <p>As a result of the survey data I was able to identify three main goals to focus on:</p>
                                <p><b>Comparison</b><br />If I am presented with a new offer invitation I want to be able to compare it to my current offer.</p>
                                <p><b>Discovery</b><br />There was no consistant answer to how a user would find a new offer invitation. Can I make a consistant point of discovery?</p>
                                <p><b>Partnership status</b><br />The current UI does not offer any indication of partnership status. A user wants to know if a partnership already exists.</p>
                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-md mx-auto px-6 pt-20">
                    <div className="flex flex-row flex-wrap gap-6 content-center pb-20">
                        <div className="flex flex-col">
                            <h2>Planning</h2>
                            <p>With my new knowledge I could start planning my next steps. I begun with creating a simple flowchart to illustrate the possible routes a user would take in order to accept a new offer request. I ensured to liaise with several members of user facing teams to make sure nothing was missed out and that flows made sense.</p>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-lg mx-auto px-6">
                    <div className="flex flex-row flex-wrap gap-6 content-center pb-20">
                        <Zoom>
                            <Image src="/flowchart.png" layout="intrinsic" width="1116" height="766" alt="Simple flowchart of a proposed solution" />
                        </Zoom>
                    </div>
                </div>
                <div className="container max-w-screen-md mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center pb-20">
                        <div className="flex flex-col">
                            <h2>Sketching</h2>
                            <p>Once happy with the flow I opened my notepad and began sketching some initial ideas. At this stage I scribble a lot of ideas down both illustrated and in note form, it can look like a mess but I find it helps to get all my initial ideas on paper and then quickly eliminate ideas or come back to them at a later date if needed. As I develop an idea I start to sketch it into something of higher quality to allow me to easily translate it to a digital wireframe when the time comes.</p>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-lg mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center pb-20">
                        <div className="flex flex-col">
                            <Zoom>
                                <Image src="/sketches.png" layout="intrinsic" width="1116" height="766" alt="Initial sketches and ideas - A bit messy but helps me gather thoughts" />
                            </Zoom>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-md mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center pb-20">
                        <div className="flex flex-col">
                            <h2>Prototypes</h2>
                            <p>In order to validate my ideas I proceeded to complete a round of simple user testing. Rather than exposing my test candidates to my sketches I went ahead and created simple wireframes within Sketch that I could share and gather initial feedback with. I used to Zoom to conduct interviews with the candidates and got them to complete a set of simple tasks. This first round of testing allowed me to identify that the users were wanting a dedicated landing page for offer invitations alongside the proposed notification based system.</p>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-lg mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center pb-20">
                        <div className="flex flex-col">
                            <Zoom>
                                <Image src="/digitalwireframe.png" layout="intrinsic" width="1116" height="766" alt="Simple flowchart of a proposed solution" />
                            </Zoom>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-md mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center pb-20">
                        <div className="flex flex-col">
                            <h2>Flow iteration</h2>
                            <p>I continued to slowly increase the complexity of my mocks, allowing the user to gain more understanding of the goal driven outcome. Once the mockups reached a certain point I began mapping them into a map of hotspots within Sketch to allow the creation of an interactive prototype. This prototype creates a more linear flow but enables a test candidate to become much more immersed in the test and provide a greater level of feedback.</p>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-lg mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center pb-20">
                        <Zoom>
                            <Image src="/prototypeMap.png" layout="intrinsic" width="1403" height="931" alt="An example of the complex web of interactions created to allow for testing of the prototype" />
                        </Zoom>
                    </div>
                </div>
                <div className="container max-w-screen-md mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center pb-20">
                        <div className="flex flex-col">
                            <h2>User testing</h2>
                            <p>After performing a number of protoype testing sessions I was able to identify a couple of further design adjustments that were required. This involved a round of iterations to ensure functionality was highlighted in a relevant way and that offers were made easier to compare.</p>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-lg mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center pb-20">
                        <Zoom>
                            <Image src="/usertestingOffers.png" layout="intrinsic" width="1849" height="900" alt="An example of the complex web of interactions created to allow for testing of the prototype with external users" />
                        </Zoom>
                    </div>
                </div>
                <div className="container max-w-screen-md mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center pb-20">
                        <div className="flex flex-col">
                            <h2>Outcome</h2>
                            <p>Since the updated offer management flow and UI have been implemented we have seen a reduction in the amount of support tickets raised, and account managers have reported less queries based around offer management. The account management have said that this reduction in queries has led to them having more time to focus on the users needs and build better relationships with them.</p>
                            <p>Since being released I continue to monitor usage through the FullStory application, allowing me to perform iterative design amends to ensure a continual progression to the applications development.</p>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-lg mx-auto px-6 pt-10">
                    <div className="flex flex-row flex-wrap gap-6 content-center pb-20">
                            <Zoom>
                                <Image src="/after.png" layout="intrinsic" width="2435" height="1544" alt="The final offer invitation screen" className="rounded-2xl" />
                            </Zoom>
                    </div>
                </div>
                <div className="container max-w-screen-lg mx-auto border-t border-gray-200">
                    <div className="flex flex-row flex-wrap content-center justify-center">
                        <div className="blank-flex flex-col flex-1">

                            <div className="pNavDirection">&nbsp;</div>

                            <div className="pNavName">&nbsp;</div>

                        </div>
                        <div className="flex flex-col flex-1 group cursor-pointer">
                            <Link href="/work/beer-blog">
                                <div className=" group-hover:bg-purple-500 p-10 ease-in-out duration-300">
                                    <div className="group-hover:text-white ease-in-out duration-300">
                                        <div className="text-gray-500 mb-1 uppercase font-semibold text-sm group-hover:text-white ease-in-out duration-300">Next Project</div>
                                        <h2>Craft beer blog</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offer