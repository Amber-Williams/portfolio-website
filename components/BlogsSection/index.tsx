import React from 'react'

import { IBlogsListItem } from '../../types'
import PageContainer from '../PageContainer/PageContainer'
import { GradientText } from '../shared'

interface BlogsSectionProps {
  blogs: IBlogsListItem[]
}

const BlogsSection: React.FC<BlogsSectionProps> = ({ blogs }) => {
  const latestBlogs = blogs.slice(0, 2)

  return (
    <React.Fragment>
      <div className="BlogSection__background position-relative text-end">
        <PageContainer>
          <div className="BlogSection">
            <div className="BlogSection__content d-flex flex-column justify-content-center">
              <GradientText variant="green" as="h2" className="h2 text-right">
                Latest posts
              </GradientText>

              <div className="mt-3">
                {latestBlogs.map((blog) => (
                  <a key={blog.id} href={`/blogs/${blog.slug}`}>
                    <div className="BlogItem mb-3">
                      <h3 className="BlogItem__title h5">{blog.title}</h3>
                      {blog.description && (
                        <div className="BlogItem__description">
                          {blog.description}
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <a href="/blog" className="BlogSection__link">
              Read more &#8594;
            </a>
          </div>
        </PageContainer>
      </div>
      <style jsx>{`
        .BlogSection__background {
          background-color: transparent;
        }

        .BlogSection {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          grid-gap: 2%;
          padding: 3rem 6rem;
          border-color: 1px solid var(--primary-color);
          background-color: var(--primary-color);
          border-bottom-left-radius: 3rem;
          border-bottom-right-radius: 3rem;
          width: 100%;
        }

        .BlogSection__content {
          grid-column-start: 3;
          grid-column-end: 10;
          text-align: left;
          position: relative;
        }

        .BlogItem {
          margin-bottom: 2rem;
          padding: 1.5rem;
          border: 1px solid rgba(112, 255, 167, 0.4);
          border-radius: 4px;
          background-color: rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background-color: rgba(8, 49, 24, 0.3);
            border-color: rgba(112, 255, 167, 0.5);
          }
        }

        .BlogItem:last-child {
          margin-bottom: 0;
        }

        .BlogItem__title {
          color: #eafd96;
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .BlogItem__title::before {
          content: '|';
          margin-right: 0.5em;
          color: #eafd96;
          font-weight: bold;
          font-family: var(--font-header);
        }

        .BlogItem__description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .BlogSection__link {
          color: #eafd96;
          text-transform: uppercase;
          grid-column-start: 1;
          display: flex;
          grid-column-end: 10;
          justify-content: end;
          transition: all 0.3s ease;
          &:hover {
            transform: translateX(10px);
            color: #eafd96;
          }
        }

        @media only screen and (max-width: 768px) {
          .BlogSection {
            width: calc(100% - 2rem);
            padding: 2rem 2rem;
          }

          .BlogItem {
            padding: 1rem;
          }

          .BlogSection__content {
            grid-column-start: 1;
            grid-column-end: 12;
            padding: 0;
          }

          .BlogSection__link {
            grid-column-start: 1;
            grid-column-end: 12;
          }
        }
      `}</style>
    </React.Fragment>
  )
}

export default BlogsSection
