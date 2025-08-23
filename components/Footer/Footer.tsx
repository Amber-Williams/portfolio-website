import { Lib } from '@mb3r/component-library'
import React from 'react'

import { FooterTypes } from '../../types/footer-types'
import PageContainer from '../PageContainer/PageContainer'
import { Bluesky, Github, TwitterX } from './../Socials'

const Footer: React.FC<FooterTypes> = ({ reversed }) => {
  const breakpointSize = Lib.useGetMediaQuerySize()

  return (
    <>
      <div className="Footer__wrapper">
        <svg
          className="Footer__curve"
          width="500"
          height="80"
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
        >
          <path className="curve-line" d="M0,40 Q250,80 500,40" />
          <path
            className="background-fill"
            d="M0,40 Q250,80 500,40 L500,0 L0,0 Z"
          />
        </svg>
        <footer className="Footer">
          <div className="Footer__content">
            <PageContainer>
              <div className="Footer__content-wrapper d-flex justify-content-between">
                <p className="w-auto">
                  &copy; {new Date().getFullYear()} Amber Williams. All rights
                  reserved.
                </p>
                <div className="d-flex justify-content-end align-items-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/not_not_amber/"
                  >
                    <TwitterX size={breakpointSize === 'sm' ? 24 : 32} />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/amber-Williams/"
                    className="mr-3 ml-3"
                  >
                    <Github size={breakpointSize === 'sm' ? 24 : 32} />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://bsky.app/profile/notnotamber.bsky.social"
                  >
                    <Bluesky size={breakpointSize === 'sm' ? 24 : 32} />
                  </a>
                </div>
              </div>
            </PageContainer>
          </div>
        </footer>
      </div>
      <style jsx>{`
        .Footer__wrapper {
          position: relative;
        }

        .Footer {
          background-color: ${reversed
            ? 'rgba(19,60,88,0.2)'
            : 'var(--paper-color-dark)'};
          filter: ${reversed ? 'brightness(1)' : 'brightness(0.8)'};
          margin-top: 0;
          padding: ${breakpointSize === 'sm' ? '2rem 1rem' : '2rem'};
          width: 100vw;
          padding-top: 4rem;
          position: relative;
        }

        .Footer__curve {
          width: 100%;
          right: 0;
          top: -1px;
          position: absolute;
          z-index: 1;
        }

        .Footer__curve .background-fill {
          fill: var(--paper-color-dark);
        }

        .Footer__curve .curve-line {
          fill: none;
          stroke: ${reversed ? 'rgba(35,100,137,0.3)' : 'grey'};
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
              ? 'var(--secondary-text-color-light)'
              : 'var(--primary-text-color-dark)'};
          }
        }
        @media only screen and (max-width: 768px) {
          .Footer__content-wrapper {
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;
            text-align: left;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  )
}

export default Footer
