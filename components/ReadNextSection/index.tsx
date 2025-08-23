import { Lib } from '@mb3r/component-library'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { IBlogsListItem } from '../../types'
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

          .ReadNext__card {
            background-color: var(--paper-color-light);
            border-radius: var(--radius);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            border: 1px solid var(--primary-color);
            height: 100%;
            position: relative;
            overflow: hidden;
          }

          .ReadNext__card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .ReadNext__card h3 {
            margin-bottom: 0.75rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            margin-top: 1.5rem;
          }

          .ReadNext__card p {
            font-size: 0.9rem;
            color: #6c757d;
            margin-bottom: 1rem;
            line-height: 1.4;
            overflow: hidden;
            flex-grow: 1;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            padding-bottom: 1.5rem;
          }

          .ReadNext__meta {
            font-size: 0.8rem;
            color: #6c757d;
            margin-bottom: 0.75rem;
          }

          .ReadNext__link {
            text-decoration: none;
            color: inherit;
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          .ReadNext__content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
          }

          .ReadNext__read-more {
            font-size: 0.85rem;
            color: var(--primary-color);
            font-weight: 500;
            text-transform: uppercase;
            margin-top: auto;
            flex-shrink: 0;
            position: absolute;
            bottom: 1.5rem;
            left: 1.5rem;
          }

          .ReadNext__cover-image-wrapper {
            width: 100%;
            height: ${breakpointSize === 'sm' ? '200px' : '150px'};
            object-fit: cover;
            overflow: hidden;
          }
        `}
      </style>

      <div className="ReadNext">
        <GradientText variant="green" as="p" className="h2 mb-3">
          Read Next
        </GradientText>
        <div className="ReadNext__grid">
          {blogs.map((blog) => {
            const blogUrl = `/blogs/${blog.slug ? blog.slug : blog.id}`

            return (
              <div key={blog.id} className="ReadNext__card">
                <Link href={blogUrl} className="ReadNext__link">
                  <div className="ReadNext__content">
                    {blog.cover_img && (
                      <div className="ReadNext__cover-image-wrapper">
                        <Image
                          src={blog.cover_img}
                          alt={`Cover image for ${blog.title}`}
                          className="img-fluid"
                          loading="lazy"
                          width={1280}
                          height={720}
                          sizes="(max-width: 768px) 100vw, 300px"
                          placeholder="blur"
                          blurDataURL={
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOc1OrTCQAFAgHuigYfLgAAAABJRU5ErkJggg=='
                          }
                          style={{
                            transform: 'scale(1.3)',
                          }}
                        />
                      </div>
                    )}
                    <h3 className="h5">{blog.title}</h3>
                    {blog.description && <p>{blog.description}</p>}
                  </div>
                  <div className="ReadNext__read-more">Read more →</div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ReadNextSection
