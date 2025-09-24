import { Lib } from '@mb3r/component-library'
import React from 'react'

import { IBlogsListItem } from '../../types'
import BlogCard from '../shared/BlogCard'
import GradientText from '../shared/GradientText'

interface IReadNextSectionProps {
  blogs: IBlogsListItem[]
}

const ReadNextSection: React.FC<IReadNextSectionProps> = ({ blogs }) => {
  const breakpointSize = Lib.useGetMediaQuerySize()

  if (!blogs || blogs.length === 0) {
    return null
  }

  return (
    <>
      <style jsx>
        {`
          .ReadNext {
            margin-top: 3rem;
            padding-top: 2rem;
          }

          .ReadNext__grid {
            display: grid;
            gap: 1.5rem;
            grid-template-columns: ${breakpointSize === 'sm'
              ? '1fr'
              : 'repeat(auto-fit, minmax(300px, 1fr))'};
          }
        `}
      </style>

      <div className="ReadNext">
        <GradientText variant="green" as="p" className="h2 mb-3">
          Read Next
        </GradientText>
        <div className="ReadNext__grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ReadNextSection
