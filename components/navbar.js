import Link from "next/link";
import { useRouter } from "next/router";



function NavBar() {
  const router = useRouter();
    return <>
      <div className="w-full fixed z-50 nav-container box-border px-20 py-6">
        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-12 md:gap-x-5 m-auto">
            <div className="md:col-span-6 flex justify-center md:justify-start items-center">
            <img src="/tomspencer.png" width={48} height={48} className="hidden md:block" />
            <Link href="https://www.tomspencer.design">
              <a href="https://www.tomspencer.design" className="text-gray-700 font-semibold text-2xl cursor-pointer leading-none pb-5 md:pb-0 md:pl-5 text-center md:text-left">Hi, I'm Tom<br/><span className="text-sm font-normal uppercase opacity-50">UX Designer</span></a>
            </Link>
            </div>
            <nav className="text-lg md:col-span-6 flex justify-center md:justify-end items-center md:col-end-13">
              <ul className="inline-block">
                <li className={`inline-block ${router.asPath.startsWith("/#work") || router.pathname.startsWith("/work") ? "active" : ""}`}>     
                  <Link href="/#work"><a href="/#work" className="text-gray-700 text-lg px-4 mr-2 hover:ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 relative text-right"> Work </a></Link> 
                </li>
                <li className={`inline-block ${router.pathname == "/about" ? "active" : ""}`} >          
                  <Link href="/about"><a link="/about" className="text-gray-700 text-lg px-4 mr-2 hover:ease-out relative text-right"> About </a></Link>  
                </li>
                <li className={`inline-block ${router.pathname == "/resume" ? "active" : ""}`}>
                  <Link href="/resume.pdf"><a link="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-lg pl-4 hover:ease-out relative text-right"> Resumé </a></Link>
                </li>
              </ul>                      
            </nav>
            </div>
        </div>
    </>
    
  }
  
export default NavBar