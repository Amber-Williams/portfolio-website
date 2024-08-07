import Head from 'next/head'
import React from 'react'

import '../style/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Amber&apos;s portfolio</title>
      </Head>
      <div className="App">
        <Component {...pageProps} />
      </div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          max-width: 100vw;
          height: 100%;
        }

        * {
          box-sizing: border-box;
        }

        #__next {
          max-width: 100vw;
          overflow-x: hidden;
        }

        .primary-font {
          color: #ffa500;
        }

        .nav-link {
          color: #ffa500;
        }

        #nav-tab .active {
          border-top: 3px solid #ffa500;
        }

        .card {
          box-shadow: -1px 0px 14px 0px rgba(0, 0, 0, 0.125);
        }

        .border {
          border: 3px solid #ffa500;
        }

        .center-content {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .w-70 {
          width: 70%;
        }
      `}</style>
    </React.Fragment>
  )
}
