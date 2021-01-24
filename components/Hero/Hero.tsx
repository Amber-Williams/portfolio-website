import React from 'react'
import HeroProfileImage from './HeroProfileImage'
import PageContainer from '../PageContainer/PageContainer'

const Hero: React.FC = () => (
  <React.Fragment>
    <style jsx>
      {`
        .Hero {
          position: relative;
        }

        .Hero__background {
          width: 100%;
          margin-top: 3px;
        }

        .Hero__profile-photo__container {
          display: flex;
          justify-content: center;
        }

        .Hero__profile-photo {
          border-radius: 50%;
          width: 215px;
          height: 215px;
          margin: -107px 0 64px 0;
          border: white solid 3px;
          position: relative;
        }

        .Hero__h1 {
          font-size: 48px;
          font-weight: bold;
          position: absolute;
          text-shadow: 1px 1px 12px black;
          color: white;
          left: 50%;
          top: 102px;
          transform: translate(-50%, 0);
        }

        .Hero__h2 {
          font-size: 24px;
          position: absolute;
          text-shadow: 1px 1px 6px black;
          font-weight: 400;
          color: white;
          left: 50%;
          top: 164px;
          text-align: center;
          transform: translate(-50%, 0);
        }

        @media only screen and (max-width: 790px) {
          .Hero__h1 {
            font-size: 1.7rem;
            top: 30px;
          }
          .Hero__h2 {
            font-size: 1.2rem;
            top: 84px;
          }
        }

        @media only screen and (max-width: 575px) {
          .Hero__h1 {
            top: 362px;
            position: absolute;
            color: black;
            text-shadow: none;
          }

          .Hero__h2 {
            top: 400px;
            position: absolute;
            color: black;
            text-shadow: none;
          }

          .Hero__profile-photo {
            margin-bottom: 156px;
          }
        }

        @media only screen and (max-width: 535px) {
          .Hero__h1 {
            top: 355px;
          }

          .Hero__h2 {
            top: 400px;
            width: 93%;
          }

          .Hero__profile-photo {
            margin-bottom: 230px;
          }
        }

        @media only screen and (max-width: 415px) {
          .Hero__h1 {
            display: none;
          }

          .Hero__h2 {
            top: 300px;
            width: 93%;
          }
        }

        .new--Hero__background {
          background-color: #040d21;
          width: 100vw;
        }

        .new--Hero {
          display: grid;
          grid-template-columns: 49% 49%;
          grid-gap: 2%;
          padding: 1rem 1rem 100px 1rem;
        }

        .new--Hero h1 {
          font-weight: 800;
          font-family: 'Open Sans', sans-serif;
          color: white;
          font-size: 3rem;
        }

        .new--Hero h2 {
          font-weight: 400;
          font-family: 'PT Sans', sans-serif;
          color: white;
          font-size: 1.5rem;
        }
      `}
    </style>
    <div className="new--Hero__background position-relative">
      <PageContainer>
        <div className="new--Hero w-100">
          <div className="d-flex flex-column justify-content-center">
            <h1>Full-Stack Developer</h1>
            <h2>
              Hi name is <b>Amber Williams</b>, and I am passionate about
              building exceptional software that improves lives. I specialize in
              creating software for clients ranging from individuals and
              businesses. <br /> <br /> Have a look around my site and feel free
              to drop me an email even just to say hi!
            </h2>
          </div>
          <HeroProfileImage />
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
    {/* <div className="Hero">
      <h1 className="Hero__h1">Amber Williams</h1>
      <h2 className="Hero__h2">
        Full-Stack Developer with an emphasis in Front-end
      </h2>
      <img className="Hero__background" src="/images/hero-plants.jpg" />
    </div>
    <div className="Hero__profile-photo__container">
      <img className="Hero__profile-photo" src="/images/profile-photo.png" />
    </div> */}
  </React.Fragment>
)

export default Hero
