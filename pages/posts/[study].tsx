import React from 'react'
import { NextPage } from 'next'
import Markdown from 'markdown-to-jsx'
import { getAllPosts, getAPost } from '../../lib/api'
import Header from '../../components/Header/Header'
// import CaseStudyImagesCarousel from '../../components/CaseStudyPage/CaseStudyImagesCarousel'
// import CaseStudySubNav from '../../components/CaseStudyPage/CaseStudySubNav'
import PageContainer from '../../components/PageContainer/PageContainer'
import { CaseStudyProps } from '../../types/case-study-types'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

interface Props {
  study: CaseStudyProps
}

const getImage = (img) => <img src={`${img}`} className="w-50" />

const getDocLink = (link, text) => (
  <a href={link} target="_blank" rel="noreferrer">
    {text}
  </a>
)

const getContent = (contents) => {
  return contents.map((content, i) => {
    return (
      <React.Fragment key={i}>
        {typeof content === 'string' && content.indexOf('/images/') > -1 ? (
          getImage(content)
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
    <PageContainer>
      <div className="CaseStudy">
        <Header />
        <NavBar />
        <main>
          {/* <CaseStudyImagesCarousel images={images} />
          <CaseStudySubNav
            numberBedrooms={numberBedrooms}
            address={address}
            price={price}
            description={description}
            features={features}
          /> */}
          <h1>{study.title}</h1>
          {getContent(study.content)}
        </main>
        <Footer />
      </div>
    </PageContainer>
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
