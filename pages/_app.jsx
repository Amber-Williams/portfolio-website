import React from 'react'
import '../style/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .primary-font {
          color: #ffa500;
        } 

        .page-container {
          max-width: 900px;
          margin: 0 auto;
          overflow: hidden;
        }

        .nav-link {
          color: #ffa500;
        }

        #nav-tab .active {
          border-top: 3px solid #ffa500;
        }

        .date--listed {
          border-top: 1px solid rgba(0,0,0,.125);
        }
      `}</style>

    </React.Fragment>
  )
}