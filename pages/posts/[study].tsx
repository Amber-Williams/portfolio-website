import { Lib } from '@mb3r/component-library'
import { NextPage } from 'next'
import React from 'react'

import CaseStudyPageHero from '../../components/CaseStudyPageHero/CaseStudyPageHero'
import CustomMarkdown from '../../components/CustomMarkdown'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import PageContainer from '../../components/PageContainer/PageContainer'
import { getAllPosts, getAPost } from '../../lib/api'
import { CaseStudyProps } from '../../types/case-study-types'

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
          <CustomMarkdown>{content}</CustomMarkdown>
        ) : (
          getDocLink(content.link_, content.text)
        )}
      </React.Fragment>
    )
  })
}

const CaseStudy: NextPage<Props> = ({ study }) => {
  const breakpointSize = Lib.useGetMediaQuerySize()

  if (!study) {
    return <div>loading</div>
  }

  return (
    <React.Fragment>
      <style jsx>
        {`
          .CaseStudy {
            background-color: var(--primary-color);
          }
          .CaseStudy__content {
            background-color: white;
            margin: 0;
            margin-left: ${breakpointSize === 'sm' ? '1rem' : '2rem'};
            margin-right: ${breakpointSize === 'sm' ? '1rem' : '2rem'};
            padding: ${breakpointSize === 'sm' ? '1rem' : '2rem'};
            border-radius: 6px;
          }
        `}
      </style>

      <div className="CaseStudy">
        <NavBar />
        <CaseStudyPageHero study={study} />
        <PageContainer>
          <main className="CaseStudy__content">
            {getContent(study.content)}
          </main>
        </PageContainer>
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
