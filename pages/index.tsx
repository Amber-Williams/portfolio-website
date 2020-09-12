import React from 'react'
import Header from '../components/Header/Header'
import CaseStudiesList from '../components/CaseStudiesList/CaseStudiesList'
import { getAllPosts } from '../lib/api'
import { CaseStudyList } from '../types/case-study'

const Home: React.FC<CaseStudyList> = ({ allCaseStudies }): JSX.Element => (
  <React.Fragment>
    <Header />
    <main>
      <CaseStudiesList allCaseStudies={allCaseStudies} />
    </main>

    <footer></footer>
  </React.Fragment>
)

export default Home

export async function getStaticProps() {
  const allCaseStudies = getAllPosts()

  return {
    props: { allCaseStudies },
  }
}
