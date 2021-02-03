import React from 'react'
import CaseStudyListItem from './CaseStudyListItem'
import PageContainer from '../PageContainer/PageContainer'
import { CaseStudyListProps } from '../../types/case-study-types'

const CaseStudiesList: React.FC<CaseStudyListProps> = ({ allCaseStudies }) => {
  const list = allCaseStudies.map((study, index) => (
    <CaseStudyListItem study={study} key={index} index={index} />
  ))

  return (
    <React.Fragment>
      <style jsx>
        {`
          .CaseStudiesList {
            padding: 50px 0;
            background: var(--primary-color);
            border-bottom-left-radius: 3rem;
            border-bottom-right-radius: 3rem;
            width: 100%;
            margin-left: 7px; // fixes offset bug
          }
          .CaseStudiesList h3 {
            margin: 0 6rem;
          }
        `}
      </style>
      <PageContainer>
        <div className="CaseStudiesList">
          <h3 className="text-gradient-orange text-right">
            Some things I&apos;ve built
          </h3>
          {list ? list : 'loading...'}
        </div>
      </PageContainer>
    </React.Fragment>
  )
}

export default CaseStudiesList
