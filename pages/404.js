import NavBar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
import Link from "next/link"
import styles from "./css/404.module.css"

export default function Custom404() {
    return (
    <>
    <NavBar />
    <div className="mainContainer">
      <div className="smlContainer">
        <div className={styles.imgSpacer}>
          <h1>You seem to be lost!</h1>
          <Image src="/404.png" layout="intrinsic" width="632" height="287" alt="This page cannot be found - Image for 404 page." />
          <div className={styles.btnCenter}>
            <Link href="/"><button>Take me home</button></Link>
          </div>
        </div>
      </div>
    </div>

    <Footer />
    
    </>
    )
  }