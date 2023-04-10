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
                I've been drawn to the world of computers and the internet since
                I was young and I've been professionally programming for{' '}
                <span className="developer_since"></span>. My love for
                programming and creative problem solving has only grown since
                then, and I'm always looking for new challenges to tackle
                <br />
                <br />
                Lately, I've been particularly excited about exploring projects
                that incorporate machine learning models into a full stack
                project. I believe that these types of projects represent the
                future of software engineering, and I'm thrilled to be at the
                forefront of this exciting field
                <br />
                <br />
                When I'm not busy coding, you can find me bouldering around gyms
                in London, brushing up my Italian, experimenting with new
                recipes in the kitchen, or enjoying a nice bottle of red wine
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
