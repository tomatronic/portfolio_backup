import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";


const navVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
}

const navChild = {
  hidden: {
    opacity: 0,
    y: '-20px'
  },
  visible: {
    opacity: 1,
    y: 0,
    duration: 0.3
  }
}

function NavBar() {
  const router = useRouter();
    return <>
    <motion.div className="container max-w-screen-lg mx-auto text-gray-700 py-3 px-3" variants={navVariants} initial="hidden" animate="visible">
      <div className="flex md:justify-between md:flex-row flex-col items-center md:text-left text-center fixed top-0 right-0 left-0 max-w-screen-lg mx-auto z-50">
            <Link href="https://www.tomspencer.design">
              <motion.a href="https://www.tomspencer.design" className="text-gray-700 font-semibold text-2xl py-4 cursor-pointer md:leading-none" variants={navChild}>Tom Spencer<br/><span className="text-base font-normal">UX Designer</span></motion.a>
            </Link>
            <nav className="self-center text-lg">
              <ul className="inline-block">
                <motion.li className={`inline-block ${router.asPath.startsWith("/#work") || router.pathname.startsWith("/work") ? "active" : ""}`} variants={navChild}>     
                  <Link href="/#work"><a href="/#work" className="text-gray-700 text-lg py-2 px-4 mr-2 hover:ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 relative"> Work </a></Link> 
                </motion.li>
                <motion.li className={`inline-block ${router.pathname == "/about" ? "active" : ""}`} variants={navChild}>          
                  <Link href="/about"><a link="/about" className="text-gray-700 text-lg py-2 px-4 mr-2 hover:ease-out relative"> About </a></Link>  
                </motion.li>
                <motion.li className={`inline-block ${router.pathname == "/resume" ? "active" : ""}`}variants={navChild}>
                  <Link href="/resume.pdf"><a link="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-lg py-2 px-4 mr-2 hover:ease-out relative"> Resumé </a></Link>
                </motion.li>
              </ul>                      
            </nav>
        </div>
    </motion.div>
    </>
    
  }
  
export default NavBar