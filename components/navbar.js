import styles from "../pages/css/navbar.module.css"
import Link from "next/link"
import ActiveLink from "./activeNav"

function NavBar() {
    return <>
    <div className={styles['site-header']}>
      <div className={`${styles.wrapper} , ${styles['site-header__wrapper']}`}>
            <Link href="/">
              <a link="/" className={styles.logo}>TOM SPENCER.</a>
            </Link>
            <nav className={styles.nav}>
              <ul> 
                {/* <li>
                  <ActiveLink activeClassName="active" href="/"><a link="/"> Home </a></ActiveLink>
                </li> */}
                <li>     
                  <ActiveLink activeClassName="active" href="/#work"><a href="/#work"> Work </a></ActiveLink> 
                </li>
                <li>          
                  <ActiveLink activeClassName="active" href="/about"><a link="/about"> About </a></ActiveLink>  
                </li>
                <il>
                  <ActiveLink activeClassName="active" href="/resume.pdf"><a link="/resume.pdf" target="_blank" rel="noopener noreferrer"> Resumé </a></ActiveLink>
                </il>
              </ul>                      
            </nav>
        </div>
    </div>
    </>
    
  }
  
  export default NavBar