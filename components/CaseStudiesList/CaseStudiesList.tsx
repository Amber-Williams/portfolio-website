import React, { useState, useEffect } from 'react'
import { getAllProperties } from '../../data/gets'
import CaseStudyListItem from './CaseStudyListItem'
import PageContainer from '../PageContainer/PageContainer'

const CaseStudiesList: React.FC = () => {
  const [CaseStudiesList, setCaseStudiesList]: any = useState(null)
  let list = 'No properties are listed'

  useEffect(() => {
    async function getAndSetCaseStudies() {
      await getAllProperties().then((response) => {
          if (response.statusCode === 200) {
            const availableProperties = response.properties
            
            setCaseStudiesList(availableProperties)
          } else {
            setCaseStudiesList(response.error)
          }
        })
        .catch((error) =>
          // eslint-disable-next-line no-console
          console.log(error)
        )
    }

    getAndSetCaseStudies()
  }, [])

  if (CaseStudiesList) {
    list = CaseStudiesList.map((property, index) => (
      <CaseStudyListItem property={property} key={index} />
    ))
  }

  return <PageContainer>{list}</PageContainer>
}

export default CaseStudiesList
