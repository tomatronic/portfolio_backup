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
    <motion.div className="container mx-auto text-gray-700 py-3" variants={navVariants} initial="hidden" animate="visible">
      <div className="flex md:justify-between md:flex-row flex-col items-center">
            <Link href="/">
              <motion.a link="/" className="text-gray-700 font-semibold text-2xl py-2 px-4 mx-2 cursor-pointer" variants={navChild}>Tom Spencer.</motion.a>
            </Link>
            <nav className="self-center">
              <ul className="inline-block">
                <motion.li className={`inline-block ${router.asPath.startsWith("/#work") || router.pathname.startsWith("/work") ? "active" : ""}`} variants={navChild}>     
                  <Link href="/#work"><a href="/#work" className="text-gray-700 text-lg py-2 px-4 mr-2 hover:text-indigo-500 hover:ease-in-out relative"> Work </a></Link> 
                </motion.li>
                <motion.li className={`inline-block ${router.pathname == "/about" ? "active" : ""}`} variants={navChild}>          
                  <Link href="/about"><a link="/about" className="text-gray-700 text-lg py-2 px-4 mr-2 hover:text-indigo-500 hover:ease-out relative"> About </a></Link>  
                </motion.li>
                <motion.li className={`inline-block ${router.pathname == "/resume" ? "active" : ""}`}variants={navChild}>
                  <Link href="/resume.pdf"><a link="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-lg py-2 px-4 mr-2 hover:text-indigo-500 hover:ease-out relative"> Resumé </a></Link>
                </motion.li>
              </ul>                      
            </nav>
        </div>
    </motion.div>
    </>
    
  }
  
export default NavBar