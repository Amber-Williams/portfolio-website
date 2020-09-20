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
          .CaseStudyListItem__preview img {
            width: 300px;
          }

          .CaseStudyListItem__text {
            width: calc(100% - 300px);
            padding-right: 16px;
            t
          }

          .CaseStudiesList {
            color: #0d3754;
            cursor: pointer;
          }

          .CaseStudiesList__card-bottom {
            border-top: 1px solid rgba(0, 0, 0, 0.125);
          }

          @media only screen and (max-width: 790px) {
            .CaseStudyListItem__text {
              width: 100%;
              padding: 0 16px;
            }
            .CaseStudyListItem__preview {
              border-bottom: 1px solid rgba(0, 0, 0, 0.125);
              display: flex;
              justify-content: center;
            }
            .CaseStudiesList__card-bottom {
              flex-direction: column;

            }
            .CaseStudiesList__card-bottom p {
              margin: 6px 0;
              text-align: left !important;
            }
          }

          @media only screen and (max-width: 790px) {
            .CaseStudyListItem__preview img {
              width: 100%;
            }
          }
        `}
      </style>
      <div className="CaseStudiesList">
        <Link href={{ pathname: `posts/${path}` }}>
          <div className="card m-5">
            <div className="d-flex flex-column flex-md-row">
              <div className="CaseStudyListItem__preview p-3">
                <img src={`${preview_image}`} />
              </div>
              <div className="CaseStudyListItem__text mt-3">
                <h4>{title}</h4>
                <p>{subtitle}</p>
              </div>
            </div>

            <div className="CaseStudiesList__card-bottom d-flex col-12 p-3 w-100 justify-content-between">
              <Tags tags={tags} className="d-none d-md-flex" />
              <p className="text-right">Read more &#8594;</p>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default CaseStudyListItem
