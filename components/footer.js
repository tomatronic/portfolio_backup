import styles from "../pages/css/footer.module.css"
import Email from "/public/footer/email.svg"
import Linkedin from "/public/footer/linkedin.svg"
import Dribbble from "/public/footer/dribbble.svg"

function Footer() {
    return <>
        <div className={styles.footer}>
            <div className="mainContainer">
                <div className={styles.details}>                            
                                <div className={styles.socials}>
                                    <a href="mailto:tom.m.spencer@gmail.com?subject=Portfolio%20Enquiry" aria-label="Email me"><Email className={styles.email} /></a>
                                    <a href="https://dribbble.com/tomatronic" target="_blank" rel="noreferrer" aria-label="Dribbble"><Dribbble className={styles.email} /></a>
                                    <a href="https://www.linkedin.com/in/thomas-spencer/" target="_blank" aria-label="LinkedIn" rel="noreferrer"><Linkedin className={styles.email} /></a>                   
                                </div>                                     
                </div>
            </div>
        </div>
    </>
  }
  
  export default Footer