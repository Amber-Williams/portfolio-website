import Link from 'next/link'
import React from 'react'

import PageContainer from '../PageContainer/PageContainer'

const Blogs: React.FC = () => {
  return (
    <React.Fragment>
      <style jsx>
        {`
          .About__background {
            background-color: white;
          }

          .About {
            display: grid;
            grid-template-columns: 54% 44%;
            grid-gap: 2%;
            padding: 3rem 6rem;
            border-top-left-radius: 3rem;
            border-top-right-radius: 3rem;
            border-color: 1px solid var(--primary-color);
            background-color: var(--primary-color);
            margin-top: 5rem;
            width: 100%;
          }

          .About h1 {
            font-weight: 800;
            font-family: 'Open Sans', sans-serif;
            color: white;
            font-size: 3rem;
          }

          .About h2 {
            font-weight: 400;
            font-family: 'PT Sans', sans-serif;
            color: white;
            font-size: 1.5rem;
          }

          @media only screen and (max-width: 1450px) {
            .About {
              width: calc(100% - 4rem);
              margin: 5rem auto 0 auto;
            }
          }

          @media only screen and (max-width: 1080px) {
            .About {
              grid-template-columns: 100%;
            }

            .About h3 {
              font-size: 3rem;
            }
          }

          @media only screen and (max-width: 768px) {
            .About {
              width: calc(100% - 2rem);
              padding: 2rem 2rem;
            }

            .About h3 {
              font-size: 2rem;
            }
          }
        `}
      </style>
      <div className="About__background position-relative">
        <PageContainer>
          <div className="About">
            <div className="d-flex flex-column justify-content-center">
              {/* <h3 className="text-gradient-green">Blogs</h3>
              <Link href={{ pathname: `/blog` }}>
                <p>View my blogs here</p>
              </Link> */}
            </div>
          </div>
        </PageContainer>
      </div>
    </React.Fragment>
  )
}

export default Blogs
