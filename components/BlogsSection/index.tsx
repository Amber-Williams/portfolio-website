import React from 'react'

import PageContainer from '../PageContainer/PageContainer'

const BlogsSection: React.FC = () => {
  return (
    <React.Fragment>
      <style jsx>
        {`
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
          }

          @media only screen and (max-width: 1450px) {
            .BlogSection {
              width: calc(100% - 4rem);
              padding-top: 5rem;
              margin: 0 auto 0 auto;
            }

            .BlogSection__content {
              padding-right: 5rem;
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
      <div className="BlogSection__background position-relative text-right">
        <PageContainer>
          <div className="BlogSection">
            <div className="BlogSection__content d-flex flex-column justify-content-center">
              <h3 className="text-gradient-green">Blogs</h3>
              <a href="/blog">
                <p>
                  <small className="text-muted">
                    This section is currently under construction, so the
                    selection may be limited.
                  </small>
                </p>
                <p className="font-weight-bold text-uppercase text-right mt-3 bold text-gradient-green">
                  Read more &#8594;
                </p>
              </a>
            </div>
          </div>
        </PageContainer>
      </div>
    </React.Fragment>
  )
}

export default BlogsSection
