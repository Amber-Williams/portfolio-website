import { NextPage } from 'next'
import React from 'react'
import PageContainer from '../components/PageContainer/PageContainer'
import { GradientText } from '../components/shared'

import NavBar from '../components/NavBar/NavBar'

const Projects: NextPage = () => {
  return (
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
              <h3 className="ProjectCard__title">FluentCheese.com</h3>

              <p className="ProjectCard__description">
                Language learning platform that puts you in the driver seat.
                Built with spaced repetition algorithms to keep lessons focused.
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
              <h3 className="ProjectCard__title">Queso</h3>

              <p className="ProjectCard__description">
                Queso browser extension is an advanced bookmark manager. Enables
                article snapshots to Markdown, save web clippings and notes for
                bookmarks.
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
              <h3 className="ProjectCard__title">Hackernews Hiring DB</h3>

              <p className="ProjectCard__description">
                Interactive database to query Hacker News Who&apos;s Hiring job
                threads.
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

        <style jsx>{`
          .ProjectsPage {
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 6rem;
          }

          .ProjectsPage__header {
            margin-bottom: 3rem;
          }

          .ProjectsPage__subtitle {
            color: rgba(255, 255, 255, 0.8);
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
            color: #adeed7;
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0;
            margin-bottom: 1rem;
          }

          .ProjectCard__description {
            color: rgba(255, 255, 255, 0.8);
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
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
      </div>
    </PageContainer>
  )
}

export default Projects
