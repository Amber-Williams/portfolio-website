import React from 'react'
import dynamic from 'next/dynamic'
import Header from '../components/Header/Header'
import { getAllPosts } from '../lib/api'
import { CaseStudyListProps } from '../types/case-study-types'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'

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
