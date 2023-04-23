import React from 'react'
import PageContainer from '../PageContainer/PageContainer'
import { FooterTypes } from '../../types/footer-types'

const Footer: React.FC<FooterTypes> = ({ reversed }) => (
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

        .Footer--reversed {
          background-color: #fff;
        }

        .Footer--reversed p {
          color: var(--primary-color);
        }
      `}
    </style>
    <footer>
      <div className={reversed ? 'Footer Footer--reversed' : 'Footer'}>
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
      </div>
    </footer>
  </React.Fragment>
)

export default Footer
