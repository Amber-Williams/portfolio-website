import React from 'react'

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
            text-shadow: none;
            color: black;
          }
          .Hero__h2 {
            font-size: 1.2rem;
            top: 84px;
            text-shadow: none;
            color: black;
          }
        }

        @media only screen and (max-width: 575px) {
          .Hero__h1 {
            top: 362px;
            position: absolute;
          }

          .Hero__h2 {
            top: 400px;
            position: absolute;
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
      `}
    </style>
    <div className="Hero">
      <h1 className="Hero__h1">Amber Williams</h1>
      <h2 className="Hero__h2">
        Full-Stack Developer with an emphasis in Front-end
      </h2>
      <img className="Hero__background" src="/images/hero-plants.jpg" />
    </div>
    <div className="Hero__profile-photo__container">
      <img className="Hero__profile-photo" src="/images/profile-photo.png" />
    </div>
  </React.Fragment>
)

export default Hero
