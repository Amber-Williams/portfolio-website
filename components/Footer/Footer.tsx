import React from 'react'
import { FooterTypes } from '../../types/footer-types'
import PageContainer from '../PageContainer/PageContainer'

const Footer: React.FC<FooterTypes> = ({ reversed }) => (
  <React.Fragment>
    <style jsx>
      {`
        .Footer {
          background-color: var(--primary-color);
          margin-top: 12rem;
          padding: 16px;
          text-align: center;
          width: 100vw;
          padding-top: 4rem;
          position: relative;
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

        .Footer--reversed {
          background-color: #fff;
        }

        .Footer--reversed p {
          color: var(--primary-color);
        }
      `}
    </style>
    <footer className={reversed ? 'Footer Footer--reversed' : 'Footer'}>
      {reversed ? (
        <img
          className="position-absolute z-1"
          src="/images/vectors/page-curve--dark.svg"
        />
      ) : (
        <img
          className="position-absolute z-1"
          src="/images/vectors/page-curve.svg"
        />
      )}

      <PageContainer>
        <p>
          Made by <br /> Amber with ☕️
        </p>
      </PageContainer>
    </footer>
  </React.Fragment>
)

export default Footer
