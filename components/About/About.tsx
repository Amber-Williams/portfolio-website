import React from 'react'
import HeroProfileImage from './ProfileImage'
import PageContainer from '../PageContainer/PageContainer'

const About: React.FC = () => (
  <React.Fragment>
    <style jsx>
      {`
        .new--About__background {
          background-color: white;
          width: 100vw;
        }

        .new--About {
          display: grid;
          grid-template-columns: 54% 44%;
          grid-gap: 2%;
          padding: 3rem 6rem;
          border-top-left-radius: 3rem;
          border-top-right-radius: 3rem;
          border-color: 1px solid var(--primary-color);
          background-color: var(--primary-color);
          margin-top: 5rem; // TODO: remove once navbar is in
        }

        .new--About h1 {
          font-weight: 800;
          font-family: 'Open Sans', sans-serif;
          color: white;
          font-size: 3rem;
        }

        .new--About h2 {
          font-weight: 400;
          font-family: 'PT Sans', sans-serif;
          color: white;
          font-size: 1.5rem;
        }

        .About {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          margin: 20px;
        }

        .About p {
          color: var(--primary-color);
        }

        @media only screen and (max-width: 900px) {
          .About {
            grid-template-columns: 100% !important;
            grid-template-rows: 1fr 1fr 1fr;
            rid-gap: 42px;
            max-width: 400px;
            margin: 0 auto;
            justify-content: center;
          }
        }

        .About img {
          width: 150px;
          margin: 0 auto;
        }

        .About div {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .About h3 {
          font-size: 1.17em;
          text-align: center;
          margin: 16px 0;
        }

        .About p {
          font-size: 18px;
          margin: 10px;
          text-align: justify;
        }
      `}
    </style>
    <div className="new--About__background position-relative">
      <PageContainer>
        <div className="new--About w-100">
          <div className="d-flex flex-column justify-content-center">
            <h3 className="text-gradient-blue">About me</h3>
            <p>
              I’m a self-taught engineer that has been in the professional
              industry for X years, days, and minutes and seconds (april 19th
              2017 8:30am Central time). As a kid growing up I always gravitated
              towards computers, internet of things and most mesmerizingly the
              world wide web. So when I started to cultivate that passion after
              university it grew into a career!
              <br />
              <br />
              Often in my spare time I try to work on projects that use
              technology I don’t normally use in my work stack. Currently, I’m
              working on a custom productivity tracking application that I want
              to collect data with and use to make some sweet graphs to learn
              things about myself and look back on overtime.
              <br />
              <br />
              When I’m not developing, I enjoy skiing, traveling, making pottery
              and uncorking a bottle of wine.
            </p>
          </div>
          <HeroProfileImage />
        </div>
      </PageContainer>
    </div>

    {/* <div className="About">
      <div>
        <img src="/images/design.svg" />
        <h3>Web/App/Software Design</h3>
        <p>
          Customized intuitive user experiences and designs based on your needs,
          challenges and goals. Responsive designs across all browsers and
          devices.
        </p>
      </div>
      <div>
        <img src="/images/development.svg" />
        <h3>Development</h3>
        <p>
          Building out projects with the latest JavaScript technologies.
          Implemented with longevity in mind so your project does not suffer
          from software corrosion.
        </p>
      </div>
      <div>
        <img src="/images/usability.svg" />
        <h3>Production</h3>
        <p>
          Launching projects featured with analytical software to analyze your
          projects data and progress.
        </p>
      </div>
    </div> */}
  </React.Fragment>
)

export default About
