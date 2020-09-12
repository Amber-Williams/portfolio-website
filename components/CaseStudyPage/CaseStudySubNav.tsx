import React from 'react'

export const ProperyFeatureList: React.FC<{ features: string[] }> = ({
  features,
}) => {
  const featureList: JSX.Element[] = features.map((feature, index) => {
    return (
      <li key={index}>
        <p>{feature}</p>
      </li>
    )
  })

  return <React.Fragment>{featureList}</React.Fragment>
}

interface CaseStudySubNavProps {
  numberBedrooms: number
  address: string
  features: string[]
  description: string
  price: string
}

const CaseStudySubNav: React.FC<CaseStudySubNavProps> = ({
  numberBedrooms,
  address,
  features,
  description,
  price,
}) => {
  return (
    <div>
      <nav>
        <div className="nav nav-tabs m-3" id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link active"
            id="nav-info-tab"
            data-toggle="tab"
            href="#nav-info"
            role="tab"
            aria-controls="nav-info"
            aria-selected="true"
          >
            Info
          </a>
          <a
            className="nav-item nav-link"
            id="nav-features-tab"
            data-toggle="tab"
            href="#nav-features"
            role="tab"
            aria-controls="nav-features"
            aria-selected="false"
          >
            Features
          </a>
          <a
            className="nav-item nav-link"
            id="nav-description-tab"
            data-toggle="tab"
            href="#nav-description"
            role="tab"
            aria-controls="nav-description"
            aria-selected="false"
          >
            Description
          </a>
        </div>
      </nav>
      <div className="tab-content p-3" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-info"
          role="tabpanel"
          aria-labelledby="nav-info-tab"
        >
          <h2 className="primary-font">Guide price</h2>
          <h1>{price}</h1>
          <h3>Bedrooms: {numberBedrooms}</h3>
          <p>{address}</p>
        </div>
        <div
          className="tab-pane fade"
          id="nav-features"
          role="tabpanel"
          aria-labelledby="nav-features-tab"
        >
          <ul>
            <ProperyFeatureList features={features} />
          </ul>
        </div>
        <div
          className="tab-pane fade"
          id="nav-description"
          role="tabpanel"
          aria-labelledby="nav-description-tab"
        >
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default CaseStudySubNav
