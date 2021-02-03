import React from 'react'
import { CaseStudyProps } from '../../types/case-study-types'

interface Props {
  study: CaseStudyProps
}

const CaseStudyPageHero: React.FC<Props> = ({ study }) => (
  <React.Fragment>
    <style jsx>
      {`
        .CaseStudyPageHero h1 {
          z-index: 1;
          position: relative;
          color: white;
          margin-top: 80px;
          text-align: center;
          font-weight: bold;
          text-shadow: 1px 1px 12px black;
        }

        .CaseStudyPageHero {
          height: 200px;
          overflow: hidden;
          position: relative;
          margin-bottom: 20px;
        }

        .CaseStudyPageHero__background {
          width: 100%;
          border-top: 6px solid white;
          position: absolute;
          z-index: 0;
        }
      `}
    </style>
    <div className="CaseStudyPageHero ">
      <img className="CaseStudyPageHero__background" src={study.hero_image} />
      <h1>{study.title}</h1>
    </div>
  </React.Fragment>
)

export default CaseStudyPageHero
