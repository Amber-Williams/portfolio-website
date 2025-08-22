import { Lib } from '@mb3r/component-library'
import React from 'react'

import { FooterTypes } from '../../types/footer-types'
import PageContainer from '../PageContainer/PageContainer'
import { Bluesky, Github, TwitterX } from './../Socials'

const Footer: React.FC<FooterTypes> = ({ reversed }) => {
  const breakpointSize = Lib.useGetMediaQuerySize()

  return (
    <>
      <style jsx>
        {`
          .Footer {
            background-color: ${reversed ? 'white' : 'var(--primary-color)'};
            margin-top: 0;
            padding: ${breakpointSize === 'sm' ? '2rem 1rem' : '2rem'};
            text-align: center;
            width: 100vw;
            padding-top: 4rem;
            position: relative;
            ${reversed ? 'overflow: hidden;' : ''}
          }

          .Footer__curve {
            width: 100%;
            right: 0;
            top: -1px;
            position: absolute;
          }

          .Footer__curve .background-fill {
            fill: var(--primary-color);
          }

          .Footer__curve .curve-line {
            fill: none;
            stroke: var(--secondary-text-color-light);
            stroke-width: 2;
          }

          .Footer__content {
            margin-top: ${breakpointSize === 'sm' ? '2rem' : '4rem'};
            color: ${reversed
              ? 'var(--secondary-text-color-dark)'
              : 'var(--secondary-text-color-light)'};
          }

          .Footer p {
            margin: 0;
            color: ${reversed
              ? 'var(--secondary-text-color-dark)'
              : 'var(--secondary-text-color-light)'};
          }

          .Footer a {
            color: ${reversed
              ? 'var(--secondary-text-color-dark)'
              : 'var(--secondary-text-color-light)'};
            &:hover {
              color: ${reversed
                ? 'var(--primary-text-color-dark)'
                : 'var(--primary-text-color-light)'};
            }
          }
        `}
      </style>
      <footer className={'Footer'}>
        <svg
          className="Footer__curve"
          width="500"
          height="80"
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
        >
          {reversed ? (
            <path
              className="background-fill"
              d="M0,40 Q250,80 500,40 L500,0 L0,0 Z"
            />
          ) : (
            <path className="curve-line" d="M0,40 Q250,80 500,40" />
          )}
        </svg>
        <div className="Footer__content">
          <PageContainer>
            <div className="d-flex justify-content-between">
              <p className="w-auto">
                &copy; {new Date().getFullYear()} Amber Williams. All rights
                reserved.
              </p>
              <div className="d-flex justify-content-end align-items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/not_not_amber/"
                  className="hover-text-white mr-3"
                >
                  <TwitterX size={breakpointSize === 'sm' ? 24 : 32} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/amber-Williams/"
                  className="hover-text-white"
                >
                  <Github size={breakpointSize === 'sm' ? 24 : 32} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://bsky.app/profile/notnotamber.bsky.social"
                  className="ml-3 hover-text-white"
                >
                  <Bluesky size={breakpointSize === 'sm' ? 24 : 32} />
                </a>
              </div>
            </div>
          </PageContainer>
        </div>
      </footer>
    </>
  )
}

export default Footer
