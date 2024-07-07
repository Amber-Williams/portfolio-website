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
          color: var(--primary-color);
          margin-top: 80px;
          text-align: center;
          font-weight: bold;
          text-transform: uppercase;
        }

        .CaseStudyPageHero {
          height: 200px;
          overflow: hidden;
          position: relative;
          margin-bottom: 20px;
          background-color: var(--primary-color);
        }

        .CaseStudyPageHero__background {
          width: 100%;
          position: absolute;
          z-index: 0;
          opacity: 1;
          filter: invert(1) blur(3px) opacity(0.7);
        }
      `}
    </style>
    <div className="CaseStudyPageHero">
      <img className="CaseStudyPageHero__background" src={study.hero_image} />
      <h1>{study.title}</h1>
    </div>
  </React.Fragment>
)

export default CaseStudyPageHero
