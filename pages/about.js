import styles from "./css/about.module.css"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import Head from "next/head"


function About() {
    return <>
        <div>
            <Head>
                <title>Tom Spencer - UX/UI Designer</title>
                <meta property="og:title" content="Tom Spencer - Ux / UI Designer" />
            </Head>
            <NavBar />
            <div className="mainContainer">
                <div className={styles.mainContainer}>
                    <div className="reverse-row-sm-gap">
                        <div className="column">
                            <img src="/bio.png" alt="You will often find me out hiking in the South Downs National Park" className={styles.bioImg} />
                        </div>
                        <div className="nopad-double-column">                            
                            <div className={styles.intro}>About</div>
                            <p>Hello, I'm Tom and I have been working in design for a number of years now. I am now settled into the world of user experience but am still often found experimenting with UI components or even getting my hands dirty with some (limited) front end developement.</p>
                            <p>Being a UX designer allows me to solve complex problems and bring the end user a pleasurable experience. I make sure that products are enjoyable, accessible and beautiful to look at. I have a passion for getting fully immersed in a problem and experimenting with a range of possible solutions.</p>
                        </div>
                    </div>
                    <div className="notm-row">
                        <div className="column">
                            <p>Seeing the impact of how I can influence a user's behaviour within a product or application fascinates me. Being empathetic and understanding helps ensure that I can make a product not just work for its intended users but be something they feel comfortable with.</p>
                            <p>I'm currently based just outside of sunny Brighton, UK. You'll usually find me hiking on the South Downs or paddle boarding at sea.</p>
                            <p>Find me on <a href="https://dribbble.com/tomatronic" target="_blank" rel="noreferrer" >Dribbble</a> and <a href="https://www.linkedin.com/in/thomas-spencer/" target="_blank" rel="noreferrer">Linkedin</a>.</p>
                            <p>I'm always looking for opportunities for collaboration. <a href="mailto:tom.m.spencer+portfolio@gmail.com">Reach out and let's chat!</a></p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
}

export default About