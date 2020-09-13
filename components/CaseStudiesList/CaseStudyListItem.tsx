import React from 'react'
import Link from 'next/link'
import { CaseStudyProps } from '../../types/case-study-types'

interface CaseStudyListItemProps {
  study: CaseStudyProps
}

const CaseStudyListItem: React.FC<CaseStudyListItemProps> = ({
  study: { path, title, preview_image },
}) => {
  return (
    <Link href={{ pathname: `posts/${path}` }}>
      <div className="card m-3">
        <div className="d-flex flex-column flex-md-row align-items-center">
          <div className="col-md-5 p-0">
            <img src={`${preview_image}`} width="300px" />
          </div>
          <div className="col-md-7">{title}</div>
        </div>

        <p className="date--listed col-12 p-3 m-0 w-100">[Tags, here]</p>
      </div>
    </Link>
  )
}

export default CaseStudyListItem
