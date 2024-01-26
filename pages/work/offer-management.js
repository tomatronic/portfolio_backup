import Link from "next/link"
import Image from "next/image"
import Zoom from "react-medium-image-zoom"

function Offer() {
    return (
        <>
            <div className="bg-slate-100">


                <div className="container h-[70vh] bg-[url('/offerBG.png')] bg-cover rounded-2xl max-w-screen-lg mx-auto mt-40 md:mt-20">
                    <div className="flex flex-row flex-wrap content-center max-w-screen-md mx-auto place-content-center h-full">
                        <div className="flex flex-col">
                            <Zoom>
                                <Image src="/offersFull.png" layout="intrinsic" width="1000" height="640" alt="Small mock of end product" priority={true} />
                            </Zoom>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-md mx-auto px-6 py-10">
                    <div className="text-2xl md:text-5xl leading-7 tracking-tight font-semibold">Offer management</div>
                    <p className="pt-4">Rakuten Advertising &bull; June 2021 - August 2021</p>
                </div>
                <div className="container max-w-screen-md mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10 auto-rows-auto mb-10">
                        <div className="col-span-3">
                            <p>Rakuten Advertising offers a way for users to communicate using a variety of dashboards depending on their needs. These communications allow users to create and manage affiliate marketing across a range of mediums.</p>
                            <p>The current dashboard is outdated and in need of a major revamp.</p>
                        </div>
                        <div className="col-span-1">
                            <p><b>Role:</b><br /> Sole UX designer</p>
                            <p><b>Skills used:</b><br /> UX/UI<br />User Research<br />Prototyping<br />User testing</p>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-md mx-auto flex-1 flex flex-col justify-between overflow-hidden rounded-2xl bg-white border shadow-[0px_1px_8px_rgba(13,34,71,0.12),_0px_28px_96px_rgba(13,34,71,0.1)] mb-16">
                    <div className="mx-6 my-6 flex flex-col gap-2">
                        <h2>Problem</h2>
                        <p className="m-0">Managing offers is a cumbersome task, it involves multiple pages and unclear terminology that deters users from exploring options. The dashboard has also been neglected for many years and is in need of a UI overhaul.</p>
                    </div>
                </div>
                <div className="container max-w-screen-md mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10 auto-rows-auto">

                        <div className="col-span-4 pb-10">
                            <h2>Solution</h2>
                            <p className="mb-16">Redesign how publishers manage affiliate based offers within the Rakuten Advertising dashboard and increase usage of the platform. This will provide a larger ROI for both Rakuten Advertising and the Publisher.</p>

                            <h2>Discovery</h2>
                            <p>The key to any project is to ensure a thorough discovery process.</p>
                            <p>To understand the problem I first reviewed the current platform and flows associated with the management of offers. I mapped out the flow within Miro using screenshots from the legacy dashboard. This ensured I had a full understanding of how the feature was already working and gain some inital insight into where improvements could be made.</p>
                            <p className="mb-16">However, I will not jump to conclusions without gaining input from the user.</p>
                            <div className="">
                                <Zoom>
                                    <Image src="/legacy1.png" className="rounded-2xl" layout="intrinsic" width="1952" height="1200" alt="The legacy dashboard offer invitation screen" />
                                </Zoom>
                            </div>
                            <h2 className="pt-16">Gaining insight</h2>
                            <p>I went ahead and captured some qualitative data. To do this I created a small survey within a google form (click the image to view) to distribute amongst the account management teams to help gather a better understanding of how they interacted with this feature, it was also a chance for me to understand known pain points that the team have been presented with. The reason I chose the account managers was due to the level of exposure they have to both the platform and the end users.</p>
                            <p className="mb-16">Once I had a pool of data collated I created an affinity diagram to help group the results I had received, this helped me to identify and prioritise points in the next step of the process. I also followed up with some of the participants to further discuss their inputs and gather additional feedback. I feel this additional step is important, not only will it ensure that the survey answers are fully understood, it creates an additional layer of empathy to help understand the goal of the project.</p>

                            <Zoom>
                                <Image src="/affinitymap.jpg" className="rounded-2xl" layout="intrinsic" width="1386" height="721" alt="The affinity map was created to help understand the results from the completed user surveys" />
                            </Zoom>
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-md mx-auto flex-1 flex flex-col justify-between overflow-hidden rounded-2xl bg-white border shadow-[0px_1px_8px_rgba(13,34,71,0.12),_0px_28px_96px_rgba(13,34,71,0.1)]">
                    <div className="mx-6 my-6 flex flex-col gap-2">

                        <h2>Goals</h2>
                        <p>Using survey data I was able to identify three main goals to focus on:</p>
                        <p><b>Comparison</b><br />If I am presented with a new offer invitation I want to be able to compare it to my current offer.</p>
                        <p><b>Discovery</b><br />There was no consistant answer to how a user would find a new offer invitation. Can I make a consistant point of discovery?</p>
                        <p><b>Partnership status</b><br />The current UI does not offer any indication of partnership status. A user wants to know if a partnership already exists.</p>

                    </div>
                </div>
                <div className="container max-w-screen-md mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10 auto-rows-auto">
                        <div className="col-span-4 pb-10">
                            <h2 className="pt-16">Planning</h2>
                            <p className="mb-16">With my new knowledge I could start planning my next steps. I begun with creating a simple flowchart to illustrate the possible routes a user would take in order to accept a new offer request. I ensured to liaise with several members of user facing teams to make sure nothing was missed out and that flows made sense.</p>

                            <Zoom>
                                <Image src="/flowchart.png" className="rounded-2xl" layout="intrinsic" width="1116" height="766" alt="Simple flowchart of a proposed solution" />
                            </Zoom>

                            <h2 className="pt-16">Sketching</h2>
                            <p className="mb-16">Once happy with the flow I opened my notepad and began sketching some initial ideas. At this stage I scribble a lot of ideas down both illustrated and in note form, it can look like a mess but I find it helps to get all my initial ideas on paper and then quickly eliminate ideas or come back to them at a later date if needed. As I develop an idea I start to sketch it into something of higher quality to allow me to easily translate it to a digital wireframe when the time comes.</p>
                            <Zoom>
                                <Image src="/sketches.png" className="rounded-2xl" layout="intrinsic" width="1116" height="766" alt="Initial sketches and ideas - A bit messy but helps me gather thoughts" />
                            </Zoom>
                            <h2 className="pt-16">Prototypes</h2>
                            <p className="mb-16">In order to validate my ideas I proceeded to complete a round of simple user testing. Rather than exposing my test candidates to my sketches I went ahead and created simple wireframes within Sketch that I could share and gather initial feedback with. I used to Zoom to conduct interviews with the candidates and got them to complete a set of simple tasks. This first round of testing allowed me to identify that the users were wanting a dedicated landing page for offer invitations alongside the proposed notification based system.</p>
                            <Zoom>
                                <Image src="/digitalwireframe.png" className="rounded-2xl" layout="intrinsic" width="1116" height="766" alt="Simple flowchart of a proposed solution" />
                            </Zoom>
                            <h2 className="pt-16">Flow iteration</h2>
                            <p className="mb-16">I continued to slowly increase the complexity of my mocks, allowing the user to gain more understanding of the goal driven outcome. Once the mockups reached a certain point I began mapping them into a map of hotspots within Sketch to allow the creation of an interactive prototype. This prototype creates a more linear flow but enables a test candidate to become much more immersed in the test and provide a greater level of feedback.</p>
                            <Zoom>
                                <Image src="/prototypeMap.png" className="rounded-2xl" layout="intrinsic" width="1403" height="931" alt="An example of the complex web of interactions created to allow for testing of the prototype" />
                            </Zoom>
                            <h2 className="pt-16">User testing</h2>
                            <p className="mb-16">After performing a number of protoype testing sessions I was able to identify a couple of further design adjustments that were required. This involved a round of iterations to ensure functionality was highlighted in a relevant way and that offers were made easier to compare.</p>
                            <Zoom>
                                <Image src="/usertestingOffers.png" className="rounded-2xl" layout="intrinsic" width="1849" height="900" alt="An example of the complex web of interactions created to allow for testing of the prototype with external users" />
                            </Zoom>
                            <h2 className="pt-16">Outcome</h2>
                            <p>Since the updated offer management flow and UI have been implemented we have seen a reduction in the amount of support tickets raised, and account managers have reported less queries based around offer management. The account management have said that this reduction in queries has led to them having more time to focus on the users needs and build better relationships with them.</p>
                            <p className="mb-16">Since being released I continue to monitor usage through the FullStory application, allowing me to perform iterative design amends to ensure a continual progression to the applications development.</p>
                            <Zoom>
                                <Image src="/after.png" className="rounded-2xl" layout="intrinsic" width="2435" height="1544" alt="The final offer invitation screen" />
                            </Zoom>
                            <br /><br /><br />
                            <Link href="/">
                                <div className="pt-10 pb-4 inline-flex">
                                    <div className="text-indigo-600 hover:ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 tracking-tight">
                                        <p>Back to home page</p>
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