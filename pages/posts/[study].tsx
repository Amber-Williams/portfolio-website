import React from 'react'
import { NextPage } from 'next'
import Markdown from 'markdown-to-jsx'

import { getAllPosts, getAPost } from '../../lib/api'
import Header from '../../components/Header/Header'
import PageContainer from '../../components/PageContainer/PageContainer'
import { CaseStudyProps } from '../../types/case-study-types'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import CaseStudyPageHero from '../../components/CaseStudyPageHero/CaseStudyPageHero'

interface Props {
  study: CaseStudyProps
}

const getImage = (img, classes) => (
  <div className="center-content">
    <img src={`${img}`} className={classes} />
  </div>
)

const getDocLink = (link, text) => (
  <h4>
    <a href={link} target="_blank" rel="noreferrer">
      {text}
    </a>
  </h4>
)

const getContent = (contents) => {
  return contents.map((content, i) => {
    return (
      <React.Fragment key={i}>
        {content.image && content.image.indexOf('/images/') > -1 ? (
          getImage(content.image, content.classes)
        ) : typeof content === 'string' ? (
          <Markdown>{content}</Markdown>
        ) : (
          getDocLink(content.link_, content.text)
        )}
      </React.Fragment>
    )
  })
}

const CaseStudy: NextPage<Props> = ({ study }) => {
  if (!study) {
    return <div> loading</div>
  }

  return (
    <React.Fragment>
      <style jsx>
        {`
          .CaseStudy {
            background-color: var(--primary-color);
          }
          .CaseStudy__content {
            margin: 0 2rem;
          }

          .CaseStudy__content p {
            color: black !important;
          }
        `}
      </style>

      <div className="CaseStudy">
        <Header />
        <NavBar />
        <CaseStudyPageHero study={study} />
        <main className="CaseStudy__content">
          <PageContainer>{getContent(study.content)}</PageContainer>
        </main>
        <Footer reversed />
      </div>
    </React.Fragment>
  )
}

export default CaseStudy

export function getStaticProps({ params }) {
  let study = getAPost(params.study)

  if (study) {
    study = study[0]
  }

  return {
    props: {
      study: study || null,
    },
  }
}

export function getStaticPaths() {
  const posts = getAllPosts(['slug']) || null

  return {
    paths: posts.map((post) => {
      return {
        params: {
          study: post.slug || null,
        },
      }
    }),
    fallback: false,
  }
}
