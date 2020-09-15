import React from 'react'
import CaseStudyListItem from './CaseStudyListItem'
import PageContainer from '../PageContainer/PageContainer'
import { CaseStudyListProps } from '../../types/case-study-types'

const CaseStudiesList: React.FC<CaseStudyListProps> = ({ allCaseStudies }) => {
  const list = allCaseStudies.map((study, index) => (
    <CaseStudyListItem study={study} key={index} />
  ))

  return (
    <React.Fragment>
      <style jsx>
        {`
          .CaseStudiesList {
            margin: 50px 0;
          }

          .CaseStudiesList h3 {
            color: #0d3754;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            letter-spacing: 2px;
            padding-bottom: 20px;
          }
        `}
      </style>
      <PageContainer>
        <div className="CaseStudiesList">
          <h3>CASE STUDIES</h3>
          {list ? list : 'loading...'}
        </div>
      </PageContainer>
    </React.Fragment>
  )
}

export default CaseStudiesList
