import React from 'react'
import Link from 'next/link'
import PageContainer from '../PageContainer/PageContainer'

const NavBar: React.FC = () => (
  <React.Fragment>
    <style jsx>
      {`
        .NavBar {
          width: fit-content;
          margin-left: 2rem;
          padding: 1rem;
        }
        .NavBar__logo {
          width: 50px;
          cursor: pointer;
        }

        .NavBar__logo-wrapper {
          padding: 10px;
          background-color: #ffffff;
          border-radius: 3px;
        }
      `}
    </style>
    <div className="NavBar">
      <PageContainer>
        <Link href={{ pathname: `/` }}>
          <div className="NavBar__logo-wrapper">
            <img className="NavBar__logo" src="/images/logo.gif" />
          </div>
        </Link>
      </PageContainer>
    </div>
  </React.Fragment>
)

export default NavBar
