import { Icons } from '@mb3r/component-library'
import { NextPage } from 'next'
import React from 'react'

import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import PageContainer from '../components/PageContainer/PageContainer'
import { GradientText } from '../components/shared'

const Projects: NextPage = () => {
  return (
    <>
      <PageContainer>
        <NavBar />
        <div className="ProjectsPage">
          <div className="ProjectsPage__header">
            <GradientText variant="blue" as="h3" className="h1">
              Projects
            </GradientText>
            <p className="ProjectsPage__subtitle">
              Open-source and other projects I&apos;m actively working on
            </p>
          </div>

          <div className="ProjectsPage__grid">
            <div className="ProjectCard">
              <div>
                <div className="ProjectCard__title d-flex">
                  <Icons.TranslateRounded />
                  <h3 className="h4 ml-2">FluentCheese.com</h3>
                </div>

                <p className="ProjectCard__description">
                  Language learning platform that puts you in the driver seat.
                  Built with spaced repetition algorithms to keep lessons
                  focused.
                </p>
              </div>
              <div className="ProjectCard__links">
                <a
                  href="https://fluentcheese.com?utm_source=amberwilliams.io"
                  className="ProjectCard__link text-uppercase"
                >
                  Website ↗
                </a>
              </div>
            </div>

            <div className="ProjectCard">
              <div>
                <div className="ProjectCard__title d-flex">
                  <Icons.BookmarkRounded />
                  <h3 className="h4 ml-2">Queso</h3>
                </div>

                <p className="ProjectCard__description">
                  Queso browser extension is an advanced bookmark manager.
                  Enables article snapshots to Markdown, save web clippings and
                  notes for bookmarks.
                </p>
              </div>
              <div className="ProjectCard__links">
                <a
                  href="https://chromewebstore.google.com/detail/queso/cpojjpkakkkhmdopjephddfnnfalfdbd"
                  className="ProjectCard__link text-uppercase"
                >
                  Chrome Extension ↗
                </a>
                <a
                  href="https://github.com/Amber-Williams/queso-browser-extension"
                  className="ProjectCard__link text-uppercase"
                >
                  Github project ↗
                </a>
              </div>
            </div>

            <div className="ProjectCard">
              <div>
                <div className="ProjectCard__title d-flex">
                  <Icons.PersonSearchRounded />
                  <h3 className="h4 ml-2">Hackernews Hiring</h3>
                </div>

                <p className="ProjectCard__description">
                  Interactive database to query Hacker News Who&apos;s Hiring
                  job threads.
                </p>
              </div>
              <div className="ProjectCard__links">
                <a
                  href="https://amber-williams.github.io/hackernews-whos-hiring/?utm_source=amberwilliams.io"
                  className="ProjectCard__link text-uppercase"
                >
                  Website ↗
                </a>
                <a
                  href="https://github.com/Amber-Williams/hackernews-whos-hiring/"
                  className="ProjectCard__link text-uppercase"
                >
                  Github project ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
      <Footer reversed />
      <style jsx>{`
        .ProjectsPage {
          max-width: var(--main-width);
          margin: 0 auto;
        }

        .ProjectsPage__header {
          margin-bottom: 3rem;
        }

        .ProjectsPage__subtitle {
          color: var(--secondary-text-color-dark);
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 800px;
        }

        .ProjectsPage__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .ProjectCard {
          background-color: rgba(19, 60, 88, 0.2);
          border: 1px solid rgba(35, 100, 137, 0.3);
          border-radius: 8px;
          padding: 2rem;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .ProjectCard__header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .ProjectCard__title {
          margin-bottom: 1rem;
          color: #adeed7;
        }

        .ProjectCard__title h3 {
          color: #adeed7;
          margin-bottom: 0;
        }

        .ProjectCard__title svg {
          margin-bottom: 6px;
          margin-right: 8px;
        }

        .ProjectCard__description {
          color: var(--secondary-text-color-light);
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .ProjectCard__links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .ProjectCard__link {
          color: #adeed7;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: bold;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          display: inline-block;
          border-bottom: 1px solid transparent;
          width: fit-content;
          border-bottom-color: #adeed7;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .ProjectCard__link:hover {
          color: #64acff;
          border-bottom-color: #64acff;
          text-decoration: none;
          transform: translateY(-2px);
        }

        @media only screen and (max-width: 1080px) {
          .ProjectsPage {
            padding: 2rem 3rem;
          }

          .ProjectsPage__grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .ProjectsPage__title {
            font-size: 2rem;
          }
        }

        @media only screen and (max-width: 768px) {
          .ProjectsPage {
            padding: 1.5rem 2rem;
          }

          .ProjectCard {
            padding: 1.5rem;
          }

          .ProjectsPage__title {
            font-size: 1.75rem;
          }

          .ProjectCard__title {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  )
}

export default Projects
