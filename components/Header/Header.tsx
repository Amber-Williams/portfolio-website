import React from 'react'
import Head from 'next/head'

if (typeof window !== 'undefined') {
  require('jquery')
  require('popper.js')
  require('bootstrap')
}

const Header: React.FC = () => (
  <Head>
    <title>Amber Williams Portfolio</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
)

export default Header
