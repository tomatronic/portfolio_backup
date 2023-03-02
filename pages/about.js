import styles from "./css/about.module.css"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import extrastyles from "./css/home.module.css"
import Head from "next/head"


function About() {
    
    return (
    <>
        <div>
            <Head />
            <NavBar />
            
            <div className="container max-w-screen-lg mx-auto px-6 pt-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-28 my-10">
                    
                    <div className="flex content-center justify-center flex-col">
                    <div className={extrastyles.blurb}>Hi, I'm Tom —</div>              
                    <div className={extrastyles.intro}>
                        I'm a <b>UX Designer</b>
                        &nbsp;based in Brighton, UK. I have 10 years of design experience and plan on many more.<br /><br />
                    </div>
                    <div className={extrastyles.blurb}>
                        Currently UX Designer @ <b>Rakuten Advertising</b>
                    </div>
                    </div>
                    <div>
                        <img src="/bio.png" alt="You will often find me out hiking in the South Downs National Park" className={styles.bioImg} />
                    </div>
                    <div className="md:col-span-2">
                            <p>Being a UX designer allows me to solve complex problems and bring the end user a pleasurable experience. I make sure that products are enjoyable, accessible and beautiful to look at. I have a passion for getting fully immersed in a problem and experimenting with a range of possible solutions.</p>
                            <p>Seeing the impact of how I can influence a user's behaviour within a product or application fascinates me. Being empathetic and understanding helps ensure that I can make a product not just work for its intended users but be something they feel comfortable with.</p>
                            <p>I'm currently based just outside of sunny Brighton, UK. You'll usually find me hiking on the South Downs with my partner, paddle boarding at sea or adventuring around the world.</p>
                    </div>
                        <div className="md:col-span-2">
                            <img src="/aboutBanner.png" alt="A little insight to my life" width="100%" />
                        </div>
                    <div className="md:col-span-2">                            
                            <p className="text-center">I'm always looking for opportunities for collaboration. <a href="mailto:tom.m.spencer+portfolio@gmail.com" className="hover:text-purple-500">Reach out and let's chat!</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default About