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
            max-width: 100%;
            overflow: hidden;
          }

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

          .Hero__page-curve {
            bottom: -1px;
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

            .Hero button {
              padding: 8px;
            }
          }
        `}
      </style>
      <div className="Hero__background position-relative">
        <img src="/images/backgrounds/bg-hero-1.svg" className="Hero__bg--1" />
        <img src="/images/backgrounds/bg-hero-2.svg" className="Hero__bg--2" />
        <PageContainer>
          <div className="Hero w-100">
            <div className="d-flex flex-column justify-content-center position-relative z-2">
              <p className="text-monospace text-gradient-blue">
                Hi, my name is
              </p>
              <h1>Amber Williams.</h1>
              <h2>
                I build <span className="Hero__things">things</span> for the
                web.
              </h2>
              <button
                className="text-monospace text-gradient-blue mt-5"
                onClick={() =>
                  (location.href = 'mailto:amberwilliamsdev@gmail.com')
                }
              >
                Get in touch
              </button>
            </div>
          </div>
        </PageContainer>
        <img
          className="Hero__page-curve position-absolute width-full z-1"
          src="/images/vectors/page-curve.svg"
        />
      </div>
    </React.Fragment>
  )
}

export default Hero
