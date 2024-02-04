import Markdown from 'markdown-to-jsx'
import { GetServerSidePropsContext, NextPage } from 'next'
import React from 'react'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import PageContainer from '../../components/PageContainer/PageContainer'

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
          .Blog__content {
            background-color: white;
            margin: 0 2rem;
            padding: 2rem;
            border-radius: 6px;
          }
        `}
      </style>

      <div className="Blog">
        <Header />
        <NavBar />
        <main className="Blog__content">
          <PageContainer>
            <div className="text-dark">
              <Markdown>{blog.content}</Markdown>
              <br />
            </div>
          </PageContainer>
        </main>
        <Footer reversed />
      </div>
    </React.Fragment>
  )
}

export default Blog

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const blogId = context.resolvedUrl.replace('/blogs/', '')

  const res = await fetch(
    `https://admin.holeytriangle.com/items/posts/${blogId}?filter={ "status": { "_eq": "Published" }}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.HT_API_KEY}`,
      },
    }
  )
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
