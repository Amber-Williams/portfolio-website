import React from 'react'

const About: React.FC = () => (
  <React.Fragment>
    <style jsx>
      {`
        .About {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          margin: 20px;
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
    <div className="About">
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
    </div>
  </React.Fragment>
)

export default About
