import React from 'react'
import Link from 'next/link'
import { CaseStudyProps } from '../../types/case-study-types'
import Tags from '../Tags/Tags'

interface CaseStudyListItemProps {
  study: CaseStudyProps
}

const CaseStudyListItem: React.FC<CaseStudyListItemProps> = ({
  study: { path, title, preview_image, subtitle, tags },
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

          .CaseStudiesList__card-bottom {
            border-top: 1px solid rgba(0, 0, 0, 0.125);
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
              </div>
            </div>

            <div className="d-flex CaseStudiesList__card-bottom col-12 p-3 w-100 justify-content-between">
              <Tags tags={tags} />
              <p className="text-right">Read more &#8594;</p>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default CaseStudyListItem
