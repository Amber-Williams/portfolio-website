import React from 'react'
import Link from 'next/link'
import { CaseStudyProps } from '../../types/case-study'

interface CaseStudyListItemProps {
  study: CaseStudyProps
}

const CaseStudyListItem: React.FC<CaseStudyListItemProps> = ({
  study: { path, test },
}) => (
  <Link href={{ pathname: `posts/${path}` }}>
    <div className="card m-3">
      <div className="d-flex flex-column flex-md-row align-items-center">
        <div className="col-md-5 p-0">
          {/* <img src={images[0]} width="300px" /> */}
          images here
        </div>
        <div className="col-md-7">{test}</div>
      </div>

      <p className="date--listed col-12 p-3 m-0 w-100">Listed on: 2019-10-10</p>
    </div>
  </Link>
)

export default CaseStudyListItem
