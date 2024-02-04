import dynamic from 'next/dynamic'
import React from 'react'

import About from '../components/About/About'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import { getAllPosts } from '../lib/api'
import { CaseStudyListProps } from '../types/case-study-types'

const CaseStudiesList = dynamic(() =>
  import('../components/CaseStudiesList/CaseStudiesList')
)

const Home: React.FC<CaseStudyListProps> = ({
  allCaseStudies,
}): JSX.Element => (
  <React.Fragment>
    <Header />
    <Hero />
    <About />
    <Blogs />
    <CaseStudiesList allCaseStudies={allCaseStudies} />
    <Footer />
  </React.Fragment>
)

export default Home

export async function getStaticProps() {
  const allCaseStudies = getAllPosts()

  return {
    props: { allCaseStudies },
  }
}
