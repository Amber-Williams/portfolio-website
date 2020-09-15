import React from 'react'
import Header from '../components/Header/Header'
import CaseStudiesList from '../components/CaseStudiesList/CaseStudiesList'
import { getAllPosts } from '../lib/api'
import { CaseStudyListProps } from '../types/case-study-types'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import PageContainer from '../components/PageContainer/PageContainer'

const Home: React.FC<CaseStudyListProps> = ({
  allCaseStudies,
}): JSX.Element => (
  <React.Fragment>
    <style jsx>
      {`
        .Home__background {
          width: 100%;
          margin-top: 3px;
        }

        .Home__profile-photo__container {
          display: flex;
          justify-content: center;
        }

        .Home__profile-photo {
          border-radius: 50%;
          width: 215px;
          margin: -107px 0 107px 0;
          border: white solid 3px;
          position: relative;
        }

        .Home__h1 {
          font-size: 48px;
          font-weight: bold;
          position: absolute;
          text-shadow: 1px 1px 12px black;
          color: white;
          left: 50%;
          top: 102px;
          transform: translate(-50%, 0);
        }

        .Home__h2 {
          font-size: 24px;
          position: absolute;
          text-shadow: 1px 1px 6px black;
          font-weight: 400;
          color: white;
          left: 50%;
          top: 164px;
          text-align: center;
          transform: translate(-50%, 0);
        }

        .Home__hero {
          position: relative;
        }
      `}
    </style>

    <PageContainer>
      <Header />
      <NavBar />
      <div className="Home__hero">
        <h1 className="Home__h1">Amber Williams</h1>
        <h2 className="Home__h2">
          Full-Stack Developer with an emphasis in Front-end
        </h2>
        <img className="Home__background" src="/images/hero-plants.jpg" />
      </div>
      <div className="Home__profile-photo__container">
        <img className="Home__profile-photo" src="/images/profile-photo.png" />
      </div>

      <CaseStudiesList allCaseStudies={allCaseStudies} />

      <Footer />
    </PageContainer>
  </React.Fragment>
)

export default Home

export async function getStaticProps() {
  const allCaseStudies = getAllPosts()

  return {
    props: { allCaseStudies },
  }
}
