import React from 'react'
import Link from 'next/link'
import { CaseStudyProps } from '../../types/case-study-types'

interface CaseStudyListItemProps {
  study: CaseStudyProps
}

const CaseStudyListItem: React.FC<CaseStudyListItemProps> = ({
  study: { path, title, preview_image, subtitle },
}) => {
  return (
    <React.Fragment>
      <style jsx>
        {`
          .CaseStudyListItem__preview {
            width: 30%;
          }

          .CaseStudiesList {
            color: #0d3754;
          }
        `}
      </style>
      <div className="CaseStudiesList">
        <Link href={{ pathname: `posts/${path}` }}>
          <div className="card m-5">
            <div className="d-flex flex-column flex-md-row">
              <div className="CaseStudyListItem__preview p-3">
                <img src={`${preview_image}`} width="300px" />
              </div>
              <div className="col-md-8 mt-3">
                <h4>{title}</h4>
                <p>{subtitle}</p>
                <h4>Read more &#8594;</h4>
              </div>
            </div>

            <p className="date--listed col-12 p-3 m-0 w-100">[Tags, here]</p>
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default CaseStudyListItem
