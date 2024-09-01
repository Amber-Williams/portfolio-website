import { Lib } from '@mb3r/component-library'
import { GetServerSidePropsContext, NextPage } from 'next'
import React, { useEffect } from 'react'

import Avatar from '../../components/Avatar'
import CustomMarkdown from '../../components/CustomMarkdown'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import PageContainer from '../../components/PageContainer/PageContainer'
import * as BlogLib from '../../lib/blog'

interface IBlog {
  id: string
  name: string
  title: string
  content: string
  date_created: string
  date_updated: string
}

interface IBlogProps {
  blog: IBlog
}

const Blog: NextPage<IBlogProps> = ({ blog }) => {
  const contentRef = React.useRef<HTMLDivElement>(null)
  const breakpointSize = Lib.useGetMediaQuerySize()

  useEffect(() => {
    BlogLib.parseMermaidCodeBlock(contentRef)
    BlogLib.parseLinks(contentRef)
  }, [contentRef])

  if (!blog) {
    return <div>loading</div>
  }

  return (
    <React.Fragment>
      <style jsx>
        {`
          .Blog {
            background-color: var(--primary-color);
          }

          .Blog main {
            background-color: white;
            margin: ${breakpointSize === 'sm' ? '0 1rem' : '0 2rem'};
            padding: ${breakpointSize === 'sm' ? '1rem' : '2rem'};
            border-radius: 6px;
          }

          .Blog h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
        `}
      </style>

      <div className="Blog">
        <NavBar />
        <PageContainer>
          <main>
            <div ref={contentRef}>
              <h1 className="text-dark">{blog.title}</h1>
              <div className="d-flex flex-row align-items-center">
                <div className="mr-3">
                  <Avatar />
                </div>
                <div className="d-flex flex-column">
                  <p className="mb-0">
                    <b>Amber Williams</b>
                  </p>
                  <p className="mb-0">
                    Last edited - {BlogLib.formatDate(blog.date_updated)}
                  </p>
                </div>
              </div>
              <hr />
              <div className="Blog__content">
                <CustomMarkdown hideH1={true}>{blog.content}</CustomMarkdown>
              </div>
              <br />
            </div>
          </main>
        </PageContainer>
        <Footer reversed />
      </div>
    </React.Fragment>
  )
}

export default Blog

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const blogId = context.resolvedUrl.replace('/blogs/', '')

  const res = await fetch(
    `${process.env.CMS_SERVER}/items/posts/${blogId}?filter={ "status": { "_eq": "published" }}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CMS_API_KEY}`,
      },
    }
  )
  if (res.status === 401) {
    console.error('Unauthorized access to API.')
    return {
      notFound: true,
    }
  }
  const data = await res.json()

  if (!data || data.errors) {
    return {
      notFound: true,
    }
  }

  const blog = data.data

  return {
    props: { blog },
  }
}
