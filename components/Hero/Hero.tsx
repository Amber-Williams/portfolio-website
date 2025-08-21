import { Lib } from '@mb3r/component-library'
import React, { useEffect } from 'react'

import PageContainer from '../PageContainer/PageContainer'
import { GradientText, ResponsiveContainer, SectionWrapper } from '../shared'

const Hero: React.FC = () => {
  const breakpointSize = Lib.useGetMediaQuerySize()
  const nouns = [
    'things',
    'apps',
    'PWAs',
    'websites',
    'APIs',
    'tooling',
    'systems',
    'graphs',
    'games',
    'scripts',
    'analytics',
    'middleware',
    'algorithms',
    'user interfaces',
    'libraries',
    'platforms',
    'microservices',
  ]

  const verbs = [
    'code',
    'debug',
    'optimize',
    'automate',
    'collaborate',
    'document',
    'maintain',
    'configure',
    'secure',
    'scale',
    'monitor',
    'integrate',
    'build',
    'make',
    'create',
    'design',
    'develop',
    'refactor',
    'manage',
    'test',
    'deploy',
    'ship',
  ]

  useEffect(() => {
    const noun_element = document.querySelector('.Hero__noun') as HTMLElement
    const verb_element = document.querySelector('.Hero__verb') as HTMLElement

    const nouns_interval = setInterval(() => {
      noun_element.innerText = nouns[Math.floor(Math.random() * nouns.length)]
    }, 1000)

    const verb_interval = setInterval(() => {
      verb_element.innerText = verbs[Math.floor(Math.random() * verbs.length)]
    }, 2000)

    return () => {
      clearInterval(nouns_interval)
      clearInterval(verb_interval)
    }
  }, [])

  return (
    <React.Fragment>
      <style jsx>
        {`
          .Hero {
            max-width: 50vw;
            height: 90vh;
            display: flex;
            margin: auto;
          }

          .Hero h1 {
            color: var(--secondary-text-color);
            font-weight: bolder;
            font-size: 4rem;
            font-weight: 600;
          }

          .Hero h2 {
            font-weight: bolder;
            font-size: 4rem;
            font-weight: 500;
          }

          .Hero p {
            max-width: 35vw;
          }

          .Hero__bg--1 {
            position: absolute;
            top: -225px;
            left: -367px;
            width: 718px;
            opacity: 0.8;
          }

          .Hero__bg--2 {
            position: absolute;
            bottom: -400px;
            right: -324px;
            width: 900px;
            height: 1600px;
            opacity: 0.8;
          }

          .Hero__curve {
            width: 100%;
            right: 0;
            bottom: 0;
            position: absolute;
            transform: rotate(180deg);
            fill: white;
          }

          @media only screen and (max-width: 1080px) {
            .Hero {
              max-width: 100vw;
              margin-left: calc(50% - 200px);
            }
            .Hero h2,
            .Hero h1 {
              font-size: 3rem;
            }
          }

          @media only screen and (max-width: 768px) {
            .Hero {
              margin-left: calc(30% - 100px);
            }
            .Hero h2,
            .Hero h1 {
              font-size: 2rem;
            }
            .Hero p {
              max-width: calc(80vw - 100px);
            }
          }

          @media only screen and (max-width: 450px) {
            .Hero {
              max-width: calc(100vw - 1rem);
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }

            .Hero p {
              font-size: 0.8rem;
              max-width: calc(100vw - 1rem);
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }

            .Hero h2,
            .Hero h1 {
              font-size: 1.2rem;
              margin-right: 0.5rem;
              margin-left: 0.5rem;
            }

            .Hero__button {
              padding: 8px;
            }
          }
        `}
      </style>
      <SectionWrapper backgroundColor="primary" height="90vh" hasCurve={false}>
        <img src="/images/backgrounds/bg-hero-1.svg" className="Hero__bg--1" />
        <img src="/images/backgrounds/bg-hero-2.svg" className="Hero__bg--2" />
        <PageContainer>
          <div className="Hero w-100">
            <ResponsiveContainer
              direction="column"
              justify="center"
              align="start"
              gap="0"
              className="position-relative"
              style={{ zIndex: 2 }}
            >
              <GradientText variant="blue" as="p" className="font-monospace">
                Hi, my name is
              </GradientText>
              <h1>Amber</h1>
              <h2>
                and I <span className="Hero__verb">build</span> <span> </span>
                <span className="Hero__noun">things</span>
              </h2>
              <button
                className="Hero__button font-monospace text-uppercase mt-5 bg-transparent border border-1 rounded p-3"
                style={{
                  borderColor: 'var(--secondary-color)',
                  width: '11rem',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  (location.href = 'mailto:amberwilliamsdev@gmail.com')
                }
              >
                <GradientText variant="blue" as="span">
                  Get in touch
                </GradientText>
              </button>
            </ResponsiveContainer>
          </div>
        </PageContainer>
        {breakpointSize === 'sm' ? (
          <svg
            className="Hero__curve"
            width="500"
            height="80"
            viewBox="0 0 500 80"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z"></path>
          </svg>
        ) : (
          <svg
            className="Hero__curve"
            width="500"
            height="80"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L0,100 Q250,200 500,100 L500,0 Z"></path>
          </svg>
        )}
      </SectionWrapper>
    </React.Fragment>
  )
}

export default Hero
