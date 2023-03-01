import Link from "next/link"
import ActiveLink from "./activeNav"

function NavBar() {
    return <>
    <div className="container max-w-screen-lg mx-auto border-b border-gray-200 text-gray-700 py-3">
      <div className="flex md:justify-between md:flex-row flex-col items-center">
            <Link href="/">
              <a link="/" className="text-gray-700 font-semibold text-2xl py-2 px-4 mx-2">TOM SPENCER</a>
            </Link>
            <nav className="self-center">
              <ul>
                <li className="inline-block">     
                  <ActiveLink activeClassName="active" href="/#work"><a href="/#work" className="text-gray-700 text-lg py-2 px-4 mr-2 hover:text-purple-600 hover:ease-in-out"> Work </a></ActiveLink> 
                </li>
                <li className="inline-block">          
                  <ActiveLink activeClassName="active" href="/about"><a link="/about" className="text-gray-700 text-lg py-2 px-4 mr-2 hover:text-purple-600 hover:ease-out"> About </a></ActiveLink>  
                </li>
                <li className="inline-block">
                  <ActiveLink activeClassName="active" href="/resume.pdf"><a link="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-lg py-2 px-4 mr-2 hover:text-purple-600 hover:ease-out"> Resumé </a></ActiveLink>
                </li>
              </ul>                      
            </nav>
        </div>
    </div>
    </>
    
  }
  
export default NavBar

  /* function NavBar() {
    return <>
    <div className={styles['site-header']}>
      <div className={`${styles.wrapper} , ${styles['site-header__wrapper']}`}>
            <Link href="/">
              <a link="/" className={styles.logo}>TOM SPENCER</a>
            </Link>
            <nav className={styles.nav}>
              <ul>
                <li>     
                  <ActiveLink activeClassName="active" href="/#work"><a href="/#work"> Work </a></ActiveLink> 
                </li>
                <li>          
                  <ActiveLink activeClassName="active" href="/about"><a link="/about"> About </a></ActiveLink>  
                </li>
                <li>
                  <ActiveLink activeClassName="active" href="/resume.pdf"><a link="/resume.pdf" target="_blank" rel="noopener noreferrer"> Resumé </a></ActiveLink>
                </li>
              </ul>                      
            </nav>
        </div>
    </div>
    </>
    
  }
  
  export default NavBar */