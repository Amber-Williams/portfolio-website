import Head from 'next/head'
import React from 'react'

import '../style/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>amberwilliams.io</title>
      </Head>
      <div className="App">
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  )
}
