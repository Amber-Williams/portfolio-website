import React, { useEffect } from 'react'
import moment from 'moment'
import ProfileImage from './ProfileImage'
import PageContainer from '../PageContainer/PageContainer'

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
              <h3 className="text-gradient-blue">About me</h3>
              <p>
                I’m a self-taught engineer that has been in the professional
                industry for <span className="developer_since"></span>. Growing
                up I always gravitated towards computers, internet of things and
                most mesmerizingly the world wide web. So when I started to
                cultivate that passion after university it grew into a career!
                <br />
                <br />
                Often in my spare time I try to work on projects that use
                technology I don’t normally use in my work stack. Currently, I’m
                working on a custom productivity tracking application that I
                want to collect data with and use to make some sweet graphs to
                learn things about myself and optimize how I spend my time.
                <br />
                <br />
                When I’m not developing, I enjoy skiing, traveling, making
                pottery and uncorking a bottle of wine.
              </p>
            </div>
            <ProfileImage />
          </div>
        </PageContainer>
      </div>
    </React.Fragment>
  )
}

export default About
