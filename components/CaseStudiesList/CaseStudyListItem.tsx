import { Lib } from '@mb3r/component-library'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import Link from 'next/link'
import React, { useEffect } from 'react'

import { CaseStudyProps } from '../../types/case-study-types'
import Tags from '../Tags/Tags'

interface CaseStudyListItemProps {
  study: CaseStudyProps
  index: number
}

const CaseStudyListItem: React.FC<CaseStudyListItemProps> = ({
  study: { path, title, preview_image, subtitle, tags },
  index,
}) => {
  const breakpointSize = Lib.useGetMediaQuerySize()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const direction = index % 2 === 0 ? 1 : -1

    gsap.fromTo(
      `.CaseStudyListItem__${path}`,
      {
        x:
          document.querySelector(`.CaseStudyListItem__${path}`).clientWidth *
            direction +
          100,
        y: 0,
        opacity: 0.5,
      },
      {
        scrollTrigger: {
          trigger: `.CaseStudyListItem__${path}`,
          start: '-=200 center',
          end: `center center`,
          scrub: true,
        },
        duration: 0.5,
        x: 0,
        opacity: 1,
      }
    )

    gsap.fromTo(
      `.CaseStudyListItem__${path} .CaseStudyListItem__card`,
      { ['box-shadow']: 'none' },
      {
        scrollTrigger: {
          trigger: `.CaseStudyListItem__${path}`,
          start: '-=200 center',
          end: `center center`,
          scrub: true,
        },
        ['box-shadow']: '-1px 0px 14px 0px rgba(0,0,0, 0.5)',
      }
    )
  }, [])

  return (
    <React.Fragment>
      <style jsx>
        {`
          .CaseStudyListItem {
            max-width: 1200px;
            min-width: 80%;
            margin: 3rem auto;
          }

          .CaseStudyListItem__card {
            background-color: var(--paper-color-light);
            margin: ${breakpointSize === 'sm' ? '1rem' : '2rem'} auto;
            padding: 0;
            border-radius: var(--radius);
            max-width: calc(var(--nav-width) + var(--gap) * 2);
          }

          .CaseStudyListItem p,
          .CaseStudyListItem h4 {
            color: var(--primary-color);
          }

          .CaseStudyListItem__preview img {
            border-radius: var(--radius);
            max-height: 200px;
          }

          .CaseStudyListItem__text {
            width: calc(100% - 300px);
            padding-right: 16px;
          }

          .CaseStudyListItem {
            color: #0d3754;
            cursor: pointer;
          }

          .CaseStudyListItem__card-top {
            padding: var(--gap);
          }

          .CaseStudyListItem__card-bottom {
            border-top: 1px solid rgba(0, 0, 0, 0.125);
            padding: var(--gap);
          }

          @media only screen and (max-width: 790px) {
            .CaseStudyListItem__text {
              width: 100%;
              padding: 0 16px;
            }

            .CaseStudyListItem__preview {
              display: none;
            }

            .CaseStudyListItem__card-bottom {
              flex-direction: column;
            }

            .CaseStudyListItem__card-bottom p {
              margin: 6px 0;
              text-align: left !important;
            }
          }
        `}
      </style>
      <div
        className={`CaseStudyListItem CaseStudyListItem__${path}`}
        id={title}
      >
        <Link href={{ pathname: `posts/${path}` }}>
          <div className="CaseStudyListItem__card">
            <div className="CaseStudyListItem__card-top d-flex flex-column flex-md-row">
              <div className="CaseStudyListItem__preview p-3">
                <img src={`${preview_image}`} />
              </div>
              <div className="CaseStudyListItem__text mt-3">
                <h4>{title}</h4>
                <p>{subtitle}</p>
              </div>
            </div>

            <div className="CaseStudyListItem__card-bottom d-flex col-12 w-100 justify-content-between">
              <Tags tags={tags} className="d-none d-md-flex mb-0" />
              <p className="text-right text-uppercase mb-0">
                Read more &#8594;
              </p>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default CaseStudyListItem
