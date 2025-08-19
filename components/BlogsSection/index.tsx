import React from 'react'

import PageContainer from '../PageContainer/PageContainer'
import { SectionWrapper, GradientText, ResponsiveContainer } from '../shared'

const BlogsSection: React.FC = () => {
  return (
    <React.Fragment>
      <style jsx>
        {`
          .BlogSection__background {
            background-color: transparent;
          }

          .BlogSection {
            display: grid;
            grid-template-columns: 40% 60%;
            grid-gap: 2%;
            padding: 3rem 6rem;
            border-color: 1px solid var(--primary-color);
            background-color: var(--primary-color);
            width: 100%;
          }

          .BlogSection__content {
            grid-column-start: 2;
            grid-column-end: 4;
            padding-right: 8rem;
            text-align: right;
          }

          @media only screen and (max-width: 1450px) {
            .BlogSection {
              width: calc(100% - 4rem);
              padding-top: 5rem;
              margin: 0 auto 0 auto;
            }

            .BlogSection__content {
              padding-right: 5rem;
              text-align: right;
            }
          }

          @media only screen and (max-width: 1080px) {
            .BlogSection {
              grid-template-columns: 100%;
            }

            .BlogSection h3 {
              font-size: 3rem;
            }

            .BlogSection__content {
              grid-column-start: 1;
              grid-column-end: 4;
              padding-right: inherit;
              text-align: right;
            }
          }

          @media only screen and (max-width: 768px) {
            .BlogSection {
              width: calc(100% - 2rem);
              padding: 2rem 2rem;
            }

            .BlogSection h3 {
              font-size: 2rem;
            }
          }
        `}
      </style>
      <div className="BlogSection__background position-relative text-end">
        <PageContainer>
          <div className="BlogSection">
            <div className="BlogSection__content d-flex flex-column justify-content-center">
              <GradientText variant="green" as="h3" className="h2">
                Blogs
              </GradientText>
              <a href="/blog">
                <p>
                  My personal blog, where I share my thoughts, experiences, and
                  insights as a software engineer. Join me as I explore the
                  latest trends, technologies, and best practices in the
                  ever-evolving world of software development.
                </p>
                <GradientText
                  variant="green"
                  as="p"
                  className="text-uppercase mt-3"
                >
                  Read more &#8594;
                </GradientText>
              </a>
            </div>
          </div>
        </PageContainer>
      </div>
    </React.Fragment>
  )
}

export default BlogsSection