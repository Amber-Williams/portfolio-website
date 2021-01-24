import React from 'react'
import dynamic from 'next/dynamic'
import Header from '../components/Header/Header'
import { getAllPosts } from '../lib/api'
import { CaseStudyListProps } from '../types/case-study-types'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import PageContainer from '../components/PageContainer/PageContainer'
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
    <NavBar />
    <Hero />
    <PageContainer>
      <About />
      <CaseStudiesList allCaseStudies={allCaseStudies} />
    </PageContainer>

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
