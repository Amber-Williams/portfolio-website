import moment from 'moment'
import React, { useEffect } from 'react'
import PageContainer from '../PageContainer/PageContainer'
import ProfileImage from './ProfileImage'
import { SectionWrapper, GradientText, ResponsiveContainer } from '../shared'

const About: React.FC = () => {
  useEffect(() => {
    const developer_since = document.querySelector(
      '.developer_since'
    ) as HTMLElement

    const start = moment('2017-04-19T08:30:00+0000')

    const interval = setInterval(() => {
      const now = moment()
      const diff = now.diff(start)
      const diffDuration = moment.duration(diff)
      developer_since.innerText = `${diffDuration.years()} years, ${diffDuration.days()} days, ${diffDuration.hours()} hours, ${diffDuration.minutes()} minutes and ${diffDuration.seconds()} seconds`
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
            margin-top: 5rem;
            width: 100%;
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
      <SectionWrapper backgroundColor="white">
        <PageContainer>
          <div className="About">
            <ResponsiveContainer direction="column" justify="center" align="start">
              <GradientText variant="blue" as="h3" className="h2">
                About me
              </GradientText>
              <p>
                I&apos;ve been professionally programming for{' '}
                <span className="developer_since"></span>. During this period, I
                have dedicated myself to the art of programming, honing my
                skills in creative problem-solving and continually seeking out
                complex challenges to enhance my expertise.
                <br />
                <br />
                I&apos;ve concentrated on integrating machine learning into
                full-stack projects, deploying them cost-effectively while
                ensuring fault tolerance. Recently, I&apos;ve been blogging
                about my experiences to demystify tech and make the project code
                accessible to all. It&apos;s an exciting journey, pushing the
                boundaries of technology and sharing insights along the way.
                <br />
                <br />
                When I&apos;m not coding, I enjoy bouldering, learning new plant
                based recipes, travelling as a local and have been learning to
                draw as well.
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