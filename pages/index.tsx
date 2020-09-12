import React from 'react'
import Header from '../components/Header/Header'
import CaseStudiesList from '../components/CaseStudiesList/CaseStudiesList'

export const Home = (): JSX.Element => (
  <React.Fragment>
    <Header />
    <main>
      <CaseStudiesList />
    </main>

    <footer></footer>
  </React.Fragment>
)

export default Home
