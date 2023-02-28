import styles from "./css/about.module.css"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import extrastyles from "./css/home.module.css"
import Head from "next/head"


function About() {
    
    return (
    <>
        <div>
            <Head>
                <title>Tom Spencer - UX/UI Designer</title>
                <meta property="og:title" content="Tom Spencer - Ux / UI Designer" />
            </Head>
            <NavBar />
            
            <div className="mainContainer">
                <div className={styles.mainContainer}>
                    <div className="row">
                    <div className="column">
                    <div className={extrastyles.blurb}>Hi, I'm Tom —</div>              
                    <div className={extrastyles.intro}>
                        I'm a <b>UX Designer</b>
                        &nbsp;focused on delivering <div className={extrastyles.keyPoint}><span>effective</span></div> user centric designs that drive engagement.<br /><br />
                    </div>
                    <div className={extrastyles.blurb}>
                        Currently UX Designer @ <b>Rakuten Advertising</b>
                    </div>
                    </div>
                    <div className="column">
                            <img src="/bio.png" alt="You will often find me out hiking in the South Downs National Park" className={styles.bioImg} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <p>Being a UX designer allows me to solve complex problems and bring the end user a pleasurable experience. I make sure that products are enjoyable, accessible and beautiful to look at. I have a passion for getting fully immersed in a problem and experimenting with a range of possible solutions.</p>
                            <p>Seeing the impact of how I can influence a user's behaviour within a product or application fascinates me. Being empathetic and understanding helps ensure that I can make a product not just work for its intended users but be something they feel comfortable with.</p>
                            <p>I'm currently based just outside of sunny Brighton, UK. You'll usually find me hiking on the South Downs with my partner, paddle boarding at sea or adventuring around the world.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <img src="/aboutBanner.png" alt="A little insight to my life" width="100%" />
                        </div>
                    </div>
                    <div className="notm-row">
                        <div className="column">                            
                            <p>I'm always looking for opportunities for collaboration. <a href="mailto:tom.m.spencer+portfolio@gmail.com">Reach out and let's chat!</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default About