import React from 'react'
import PageContainer from '../PageContainer/PageContainer'

const Footer: React.FC = () => (
  <React.Fragment>
    <style jsx>
      {`
        .Footer {
          background-color: var(--primary-color);
          width: 100%;
          margin-top: 12rem;
          padding: 16px;
          text-align: center;
          position: relative;
          padding-top: 4rem;
        }

        .Footer img {
          width: 100%;
          transform: rotate(180deg);
          right: 0;
          top: -1px;
        }

        .Footer p {
          width: 100%;
          color: white;
          text-align: center;
          margin-top: 20px;
        }
      `}
    </style>
    <footer>
      <div className="Footer">
        <img
          className="position-absolute z-1"
          src="/images/vectors/page-curve.svg"
        />
        <PageContainer>
          <p>
            Made by <br /> Amber Williams with 💖
          </p>
        </PageContainer>
      </div>
    </footer>
  </React.Fragment>
)

export default Footer
