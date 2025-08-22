import React from 'react'

import About from '../components/About/About'
import Blogs from '../components/BlogsSection'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'

const Home = (): JSX.Element => (
  <React.Fragment>
    <Hero />
    <About />
    <Blogs />
    <Footer />
  </React.Fragment>
)

export default Home
