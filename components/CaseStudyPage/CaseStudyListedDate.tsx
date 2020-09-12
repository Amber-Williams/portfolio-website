import React from 'react'

const CaseStudyListedDate: React.FC<{ dateAdded: string }> = ({ dateAdded }) => {
  return (
    <p className="date--listed col-12 p-3 m-0 w-100">Listed on: {dateAdded}</p>
  )
}

export default CaseStudyListedDate
