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
    </React.Fragment>
  )
}
