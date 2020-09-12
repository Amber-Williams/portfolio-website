import React from 'react'
import Link from 'next/link'

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

interface CaseStudyListItemProps {
  property: PropertyProps
}

const CaseStudyListItem: React.FC<CaseStudyListItemProps> = ({
  property: { id, images, numberBedrooms, address, price, dateAdded }
}) => (
    <Link href={{ pathname: 'property', query: { id } }}>
      <div className="card m-3">
        <div className="d-flex flex-column flex-md-row align-items-center">
          <div className="col-md-5 p-0">
            <img src={images[0]} width="300px" />
          </div>
          <div className="col-md-7">
            <h2 className="primary-font">Guide price</h2>
            <h1 className="primary-font">{price}</h1>
            <h3>
              {numberBedrooms > 1
                ? `${numberBedrooms} bedrooms`
                : `${numberBedrooms} bedroom`}{' '}
            </h3>
            <p>{address}</p>
          </div>
        </div>

        <p className="date--listed col-12 p-3 m-0 w-100">
          Listed on: {dateAdded}
        </p>
      </div>
    </Link>
)

export default CaseStudyListItem
