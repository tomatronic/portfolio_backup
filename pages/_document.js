import { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
              }}
            />
            <title>Tom Spencer - UX/UI Designer</title>
        <meta property="og:title" content="Tom Spencer - UX / UI Designer" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="UX, User Experience, UI, User Interface, Tom Spencer, UK, Brighton" />
        <meta name="author" content="Tom Spencer" />
        <meta name="description" content="Hi, I'm Tom Spencer. UX/UI designer focused on delivering effective user centric designs that drive engagement. Currently UX Designer @ Rakuten Advertising." />
        <link rel="shortcut icon" href="/favicon.ico" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }

  export default MyDocument;