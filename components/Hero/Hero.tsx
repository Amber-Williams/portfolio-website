import React, { useEffect } from 'react'
import PageContainer from '../PageContainer/PageContainer'

const Hero: React.FC = () => {
  const things = [
    'things',
    'apps',
    'websites',
    'APIs',
    'tools',
    'tests',
    'hooks',
    'graphs',
    'games',
  ]

  useEffect(() => {
    const things_element = document.querySelector(
      '.Hero__things'
    ) as HTMLElement
    let count = 0

    const interval = setInterval(() => {
      count++
      things_element.innerText = things[count % things.length]
    }, 700)

    return () => clearInterval(interval)
  }, [])

  return (
    <React.Fragment>
      <style jsx>
        {`
          .Hero__background {
            background-color: var(--primary-color);
            width: 100vw;
            height: 90vh;
            position: relative;
            overflow: hidden;
          }

          .Hero {
            max-width: 50vw;
            height: 90vh;
            display: flex;
            margin: auto;
          }

          .Hero h1 {
            color: var(--secondary-text-color) !important;
            font-weight: bolder;
            font-size: 4rem;
          }

          .Hero h2 {
            font-weight: bolder;
            font-size: 4rem;
          }

          .Hero p {
            max-width: 35vw;
          }

          .Hero button {
            border: 1px solid var(--secondary-color);
            border-radius: 6px;
            padding: 1rem;
            width: 11rem;
          }

          .Hero__bg--1 {
            position: absolute;
            top: -125px;
            left: -367px;
            width: 718px;
          }

          .Hero__bg--2 {
            position: absolute;
            top: -200px;
            right: -224px;
            width: 700px;
          }
        `}
      </style>
      <div className="Hero__background position-relative">
        <img src="/images/backgrounds/bg-hero-1.svg" className="Hero__bg--1" />
        <img src="/images/backgrounds/bg-hero-2.svg" className="Hero__bg--2" />
        <PageContainer>
          <div className="Hero w-100">
            <div className="d-flex flex-column justify-content-center">
              <p className="text-monospace text-gradient-blue">
                Hi, my name is
              </p>
              <h1>Amber Williams.</h1>
              <h2>
                I build <span className="Hero__things">things</span> for the
                web.
              </h2>
              <p className="py-3">
                I am a software engineer based in London that’s passionate about
                building exceptional software which improves lives. I specialize
                in creating software user interfaces for clients ranging from
                individuals to businesses.
              </p>
              <button
                className="text-monospace text-gradient-blue"
                onClick={() =>
                  (location.href = 'mailto:amberwilliamsdev@gmail.com')
                }
              >
                Get in touch
              </button>
            </div>
          </div>
        </PageContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1680 40"
          className="position-absolute width-full z-1 bottom-0"
        >
          <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
        </svg>
      </div>
    </React.Fragment>
  )
}

export default Hero
