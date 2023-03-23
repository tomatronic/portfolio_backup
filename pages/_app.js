import React from 'react';
import { AppProps } from 'next/app';
import "../styles.css";
import 'react-medium-image-zoom/dist/styles.css'
import Script from "next/script";
import Head from "next/head";
import NavBar from "/components/navbar.js";
import Footer from "/components/footer.js";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-CCDKVM70NV"></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CCDKVM70NV', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
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