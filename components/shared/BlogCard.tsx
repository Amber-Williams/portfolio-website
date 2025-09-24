import { Lib } from '@mb3r/component-library'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { IBlogsListItem } from '../../types'

interface IBlogCardProps {
  blog: IBlogsListItem
  isCompact?: boolean
}

const BlogCard: React.FC<IBlogCardProps> = ({ blog, isCompact = false }) => {
  const breakpointSize = Lib.useGetMediaQuerySize()
  const blogUrl = `/blogs/${blog.slug ? blog.slug : blog.id}`

  return (
    <>
      <style jsx>
        {`
          .BlogCard {
            background-color: var(--paper-color-light);
            border-radius: var(--radius);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            border: 1px solid var(--primary-color);
            height: 100%;
            position: relative;
            overflow: hidden;
          }

          .BlogCard:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .BlogCard h3 {
            margin-bottom: 0.75rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            margin-top: 1.5rem;
          }

          .BlogCard p {
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

          .BlogCard__link {
            text-decoration: none;
            color: inherit;
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          .BlogCard__content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            margin-bottom: ${isCompact ? '0' : '2rem'};
          }

          .BlogCard__read-more {
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

          .BlogCard__cover-image-wrapper {
            width: 100%;
            height: ${isCompact
              ? '130px'
              : breakpointSize === 'sm'
              ? '200px'
              : '150px'};
            object-fit: cover;
            overflow: hidden;
          }
        `}
      </style>

      <div className="BlogCard">
        <Link href={blogUrl} className="BlogCard__link">
          <div className="BlogCard__content">
            {blog.cover_img && (
              <div className="BlogCard__cover-image-wrapper">
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
          {!isCompact && <div className="BlogCard__read-more">Read more →</div>}
        </Link>
      </div>
    </>
  )
}

export default BlogCard
