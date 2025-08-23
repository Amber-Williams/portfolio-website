import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import PageContainer from '../PageContainer/PageContainer'

const NavBar = ({ isWide = false }: { isWide?: boolean }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <React.Fragment>
      <div className="NavBar">
        <div className="NavBar__wrapper">
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

              {/* Hamburger Menu Button */}
              <button
                className="NavBar__hamburger"
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21M3 6H21M3 18H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Desktop Navigation */}
              <nav className="NavBar__desktop-nav">
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

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
              <div className="NavBar__mobile-menu">
                <ul className="NavBar__mobile-nav">
                  <li className="NavBar__mobile-nav-item">
                    <Link
                      href={{ pathname: `/` }}
                      className="text-light"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                  </li>
                  <li className="NavBar__mobile-nav-item">
                    <Link
                      href={{ pathname: `/blog` }}
                      className="text-light"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="NavBar__mobile-nav-item">
                    <Link
                      href={{ pathname: `/projects` }}
                      className="text-light"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </PageContainer>
        </div>
      </div>
      <style jsx>{`
        .NavBar {
          max-width: ${isWide
            ? 'calc(var(--nav-width) + var(--gap) * 10)'
            : 'calc(var(--nav-width) + var(--gap) * 2)'};
          margin: 0 auto;
          padding: var(--gap);
        }

        .NavBar__wrapper {
          position: relative;
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

        .NavBar__hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: var(--text-light, #fff);
          z-index: 1001;
        }

        .NavBar__hamburger svg {
          width: 24px;
          height: 24px;
        }

        .NavBar__desktop-nav {
          display: block;
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

        .NavBar__mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          width: fit-content;
          background: var(--paper-color-dark);
          border: 1px solid var(--secondary-text-color-dark);
          filter: brightness(0.8);
          z-index: 1000;
          padding: var(--gap);
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          color: var(--primary-text-color-light);
          text-align: left;
        }

        .NavBar__mobile-nav {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .NavBar__mobile-nav-item {
          font-size: var(--font-size-h5);
          font-weight: bold;
          padding: 0 1.5rem;
        }

        .NavBar__mobile-nav-item a {
          display: block;

          text-decoration: none;
        }

        @media only screen and (max-width: 600px) {
          .NavBar__hamburger {
            display: block;
          }

          .NavBar__desktop-nav {
            display: none;
          }

          .NavBar__mobile-menu {
            display: block;
          }
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
