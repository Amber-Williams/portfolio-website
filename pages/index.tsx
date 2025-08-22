import React from 'react'

import About from '../components/About/About'
import Blogs from '../components/BlogsSection'
import Footer from '../components/Footer/Footer'

const Home = (): JSX.Element => (
  <React.Fragment>
    <About />
    <Blogs />
    <Footer />
  </React.Fragment>
)

export default Home
