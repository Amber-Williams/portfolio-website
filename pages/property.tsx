import React from 'react'
import { NextPage } from 'next'
import { getProperty } from '../data/gets'
import Header from '../components/Header/Header'
import CaseStudyImagesCarousel from '../components/CaseStudyPage/CaseStudyImagesCarousel'
import CaseStudySubNav from '../components/CaseStudyPage/CaseStudySubNav'
import CaseStudyListedDate from '../components/CaseStudyPage/CaseStudyListedDate'
import PageContainer from '../components/PageContainer/PageContainer'

interface PropertyProps {
  id: number
  images: string[]
  numberBedrooms: number
  address: string
  postcode: string
  features: string[]
  description: string
  price: string
  expired: boolean
  dateAdded: string
}

interface Props {
  statusCode: number
  property: PropertyProps | null
  error: string | null
}

const Property: NextPage<Props> = ({ statusCode, property, error }) => {
  if (statusCode !== 200) {
    return (
      <div>
        <h1>Oops</h1>
        <p>{error ? error : 'Something has gone wrong'}</p>
      </div>
    )
  }

  const {
    images,
    numberBedrooms,
    address,
    price,
    dateAdded,
    description,
    features,
  } = property

  return (
    <PageContainer>
      <Header />
      <main>
        <CaseStudyImagesCarousel images={images} />
        <CaseStudySubNav
          numberBedrooms={numberBedrooms}
          address={address}
          price={price}
          description={description}
          features={features}
        />
        <CaseStudyListedDate dateAdded={dateAdded} />
      </main>
      <footer></footer>
    </PageContainer>
  )
}

Property.getInitialProps = async ({ query }) => {
  const id = query.id as string
  const { statusCode, property, error } = await getProperty(id)

  return {
    statusCode,
    property,
    error,
  }
}

export default Property
