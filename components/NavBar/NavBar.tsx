import { Lib } from '@mb3r/component-library'
import Link from 'next/link'
import React from 'react'

import PageContainer from '../PageContainer/PageContainer'

const NavBar: React.FC = () => {
  const breakpointSize = Lib.useGetMediaQuerySize()
  return (
    <React.Fragment>
      <style jsx>
        {`
          .NavBar {
            max-width: calc(var(--nav-width) + var(--gap)* 2);
            margin: 0 auto;
            padding: var(--gap);
          }
          .NavBar__logo {
            width: 50px;
            cursor: pointer;
          }

          .NavBar__logo-wrapper {
            padding: 10px;
            background-color: #ffffff;
            border-radius: var(--radius);
            width: fit-content;
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
}

export default NavBar
