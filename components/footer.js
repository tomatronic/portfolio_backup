import styles from "../pages/css/footer.module.css"
import Email from "/public/footer/email.svg"
import Linkedin from "/public/footer/linkedin.svg"
import Dribbble from "/public/footer/dribbble.svg"

function Footer() {
    return <>
        <div className={styles.footer}>
            <div className="mainContainer">
                <div className={styles.details}>
                            <div>
                            <b>Let's connect</b>
                            </div>
                                <div className={styles.socials}>
                                    <a href="mailto:tom.m.spencer@gmail.com?subject=Portfolio%20Enquiry"><Email className={styles.email} /></a>
                                    <a href="https://dribbble.com/tomatronic" target="_blank" rel="noreferrer"><Dribbble className={styles.email} /></a>
                                    <a href="https://www.linkedin.com/in/thomas-spencer/" target="_blank" rel="noreferrer"><Linkedin className={styles.email} /></a>                   
                                </div>
                    Tom Spencer 2022                   
                </div>
            </div>
        </div>
    </>
  }
  
  export default Footer