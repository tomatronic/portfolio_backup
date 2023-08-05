import React from 'react'
import "../styles.css";
import 'react-medium-image-zoom/dist/styles.css'
// import Script from "next/script";
import Head from "next/head";
import NavBar from "/components/navbar.js"
import Footer from "/components/footer.js"
import ReactGA from "react-ga4"

ReactGA.initialize("G-CCDKVM70NV")

function MyApp({ Component, pageProps, router }) {

  return (
    <>
      <Head>
        <title>Tom Spencer - UX Designer</title>
        <meta property="og:title" content="Tom Spencer - UX Designer" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="UX, User Experience, UI, User Interface, Tom Spencer, UK, Brighton" />
        <meta name="author" content="Tom Spencer" />
        <meta name="description" content="UX/UI designer focused on delivering effective user centric designs that drive engagement. Currently UX Designer @ Rakuten Advertising." />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:url" content="https://www.tomspencer.design" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="UX/UI designer focused on delivering effective user centric designs that drive engagement. Currently UX Designer @ Rakuten Advertising." />
        <meta property="og:image" content="https://www.tomspencer.design/competitionThumb.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tomspencer.design" />
        <meta property="twitter:url" content="https://www.tomspencer.design" />
        <meta name="twitter:title" content="Tom Spencer - UX / UI Designer" />
        <meta name="twitter:description" content="UX/UI designer focused on delivering effective user centric designs that drive engagement. Currently UX Designer @ Rakuten Advertising." />
        <meta name="twitter:image" content="https://www.tomspencer.design/competitionThumb.png" />
        
      </Head>
      <NavBar />
      <Component {...pageProps} key={router.asPath} />
      <Footer />
    </>
  )
}

export default MyApp