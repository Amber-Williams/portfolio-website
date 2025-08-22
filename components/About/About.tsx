import moment from 'moment'
import React, { useEffect } from 'react'
import PageContainer from '../PageContainer/PageContainer'
import { GradientText, ResponsiveContainer, SectionWrapper } from '../shared'
import ProfileImage from './ProfileImage'

const About: React.FC = () => {
  useEffect(() => {
    const years_exp = document.querySelector('.years_exp') as HTMLElement

    const start = moment('2017-04-19T08:30:00+0000')

    const interval = setInterval(() => {
      const now = moment()
      const diff = now.diff(start)
      const diffDuration = moment.duration(diff)
      years_exp.innerText = `${
        diffDuration.days() ? '+' : ''
      }${diffDuration.years()} years`
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <React.Fragment>
      <style jsx>
        {`
          .About {
            display: grid;
            grid-template-columns: 54% 44%;
            grid-gap: 2%;
            padding: 3rem 6rem;
            border-top-left-radius: 3rem;
            border-top-right-radius: 3rem;
            border-color: 1px solid var(--primary-color);
            background-color: var(--primary-color);
            margin-top: 0.5rem;
            width: 100%;
          }

          @media only screen and (max-width: 1450px) {
            .About {
              width: calc(100% - 4rem);
              margin: 0.5rem auto 0 auto;
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
      <SectionWrapper backgroundColor="white">
        <PageContainer>
          <div className="About">
            <ResponsiveContainer
              direction="column"
              justify="center"
              align="start"
            >
              <GradientText variant="blue" as="h3" className="h2">
                About me
              </GradientText>
              <p>
                Hello! I’m Amber, a software engineer living in London with{' '}
                <span className="years_exp"></span> of experience. For my day
                job, I work on full-stack systems that bring AI/ML/NLP into real
                products.
                <br />
                <br />
                On this website you’ll find my blog, where I share thoughts
                shaped by <b>side projects</b>
                and interests like 3D printing, productivity, and home
                automation.
              </p>
            </ResponsiveContainer>
            <ProfileImage />
          </div>
        </PageContainer>
      </SectionWrapper>
    </React.Fragment>
  )
}

export default About
