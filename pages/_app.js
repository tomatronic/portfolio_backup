import "../styles.css";
import 'react-medium-image-zoom/dist/styles.css'
import Script from "next/script";
import Head from "next/head";
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {

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
    </div>
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
    </>
  )
}

export default MyApp;