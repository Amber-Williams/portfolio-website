import React from 'react'
import CaseStudyListItem from './CaseStudyListItem'
import PageContainer from '../PageContainer/PageContainer'
import { CaseStudyListProps } from '../../types/case-study'

const CaseStudiesList: React.FC<CaseStudyListProps> = ({ allCaseStudies }) => {
  const list = allCaseStudies.map((study, index) => (
    <CaseStudyListItem study={study} key={index} />
  ))

  return <PageContainer>{list ? list : 'loading...'}</PageContainer>
}

export default CaseStudiesList
