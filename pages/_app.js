import React from 'react'
import "../styles.css";
import 'react-medium-image-zoom/dist/styles.css'
import Script from "next/script";
import Head from "next/head";
import NavBar from "/components/navbar.js"
import Footer from "/components/footer.js"

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>Tom Spencer - UX/UI Designer</title>
        <meta property="og:title" content="Tom Spencer - UX / UI Designer" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="UX, User Experience, UI, User Interface, Tom Spencer, UK, Brighton" />
        <meta name="author" content="Tom Spencer" />
        <meta name="description" content="Hi, I'm Tom Spencer. UX/UI designer focused on delivering effective user centric designs that drive engagement. Currently UX Designer @ Rakuten Advertising." />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} key={router.asPath} />
      <Footer />
    </>
  )
}

export default MyApp

/* 
function MyApp({ Component, pageProps, router }) {

  return (
    <>
    <div>
    
<Script
  strategy="lazyOnload"
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
/>
<Script strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}
      </Script>

      <Head>
        <title>Tom Spencer - UX/UI Designer</title>
        <meta property="og:title" content="Tom Spencer - UX / UI Designer" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="UX, User Experience, UI, User Interface, Tom Spencer, UK, Brighton" />
        <meta name="author" content="Tom Spencer" />
        <meta name="description" content="Hi, I'm Tom Spencer. UX/UI designer focused on delivering effective user centric designs that drive engagement. Currently UX Designer @ Rakuten Advertising." />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
        <Component {...pageProps} key={router.asPath} />
      <Footer />
    </div>
    
    </>
  )
}

export default MyApp; */