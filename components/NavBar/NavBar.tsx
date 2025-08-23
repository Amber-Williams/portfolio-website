import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import PageContainer from '../PageContainer/PageContainer'

const NavBar = ({ isWide = false }: { isWide?: boolean }) => {
  return (
    <React.Fragment>
      <div className="NavBar">
        <PageContainer>
          <div className="NavBar__container">
            <Link
              href={{ pathname: `/` }}
              className="NavBar__logo pr-3 pt-2 pb-2"
            >
              <Image
                src="/images/logo.svg"
                alt="Logo for amberwilliams.io website"
                width={200}
                height={28}
              />
            </Link>
            <nav>
              <ul className="NavBar__nav">
                <li className="NavBar__nav-item">
                  <Link
                    href={{ pathname: `/` }}
                    className="text-light pr-3 pl-3 pt-2 pb-2"
                  >
                    About
                  </Link>
                </li>
                <li className="NavBar__nav-item">
                  <Link
                    href={{ pathname: `/blog` }}
                    className="text-light pr-3 pl-3 pt-2 pb-2"
                  >
                    Blog
                  </Link>
                </li>
                <li className="NavBar__nav-item">
                  <Link
                    href={{ pathname: `/projects` }}
                    className="text-light pl-3 pt-2 pb-2"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </PageContainer>
      </div>
      <style jsx>{`
        .NavBar {
          max-width: ${isWide
            ? 'calc(var(--nav-width) + var(--gap) * 10)'
            : 'calc(var(--nav-width) + var(--gap) * 2)'};
          margin: 0 auto;
          padding: var(--gap);
        }

        .NavBar__container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .NavBar__logo {
          font-size: 1.25rem;
          font-weight: bold;
          color: var(--primary-color, #333);
          text-decoration: none;
          cursor: pointer;
        }

        .NavBar__nav {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .NavBar__nav-item {
          margin: 0;
          font-size: var(--font-size-h5);
          font-weight: bold;
        }

        @media only screen and (max-width: 790px) {
          .NavBar {
            padding: var(--gap) calc(var(--gap) * 2);
          }
        }
      `}</style>
    </React.Fragment>
  )
}

export default NavBar
