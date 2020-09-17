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
          .CaseStudy h1 {
            z-index: 1;
            position: relative;
            color: white;
            margin-top: 80px;
            text-align: center;
            font-weight: bold;
            text-shadow: 1px 1px 12px black;
          }

          .CaseStudy__background__container {
            height: 200px;
            overflow: hidden;
            position: relative;
            margin-top: 2px;
            margin-bottom: 20px;
          }

          .CaseStudy__background {
            width: 100%;
            margin-top: 3px;
            position: absolute;
            z-index: 0;
          }
        `}
      </style>
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
            <div className="CaseStudy__background__container">
              <img className="CaseStudy__background" src={study.hero_image} />
              <h1>{study.title}</h1>
            </div>

            {getContent(study.content)}
          </main>
          <Footer />
        </div>
      </PageContainer>
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
