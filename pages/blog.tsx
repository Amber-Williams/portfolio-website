import Markdown from 'markdown-to-jsx'
import moment from 'moment'
import type { NextPage } from 'next'
import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import PageContainer from '../components/PageContainer/PageContainer'

interface IBlog {
  id: string
  name: string
  title: string
  content: string
  date_created: string
  date_updated: string
}

interface IBlogs {
  blogs: IBlog[]
}

const Blogs: NextPage<IBlogs> = ({ blogs }) => {
  const [openedContentId, setOpenedContentId] = React.useState<string | null>(
    null
  )

  const formatDate = (date: string) => {
    return moment(date).format('LL')
  }

  const onBlogClick = (id: string) => {
    if (openedContentId === id) {
      setOpenedContentId(null)
    } else {
      setOpenedContentId(id)
    }
  }

  if (!blogs) {
    return <div>loading</div>
  }

  return (
    <React.Fragment>
      <style jsx>
        {`
          .CaseStudy {
            background-color: var(--primary-color);
          }

          .CaseStudy__card {
            background-color: white;
            margin: 2rem;
            padding: 2rem;
            border-radius: 6px;
          }

          h4 {
            color: var(--primary-color);
          }

          .text-right {
            color: var(--primary-color);
          }
        `}
      </style>

      <div className="CaseStudy">
        <Header />
        <NavBar />
        <main>
          <PageContainer>
            {blogs.map((blog) => (
              <div key={blog.id} className="CaseStudy__card">
                <div onClick={() => onBlogClick(blog.id)}>
                  <h4>{blog.title}</h4>
                  <p>Last edited: {formatDate(blog.date_created)}</p>
                  {openedContentId === blog.id ? (
                    <>
                      <p className="text-right">&#8592; Close </p>
                      <hr />
                    </>
                  ) : (
                    <p className="text-right">Read more &#8594;</p>
                  )}
                </div>
                {openedContentId === blog.id && (
                  <div className="text-dark">
                    <Markdown>{blog.content}</Markdown>
                    <br />
                  </div>
                )}
              </div>
            ))}
          </PageContainer>
        </main>
        <Footer reversed />
      </div>
    </React.Fragment>
  )
}

export default Blogs

export async function getServerSideProps() {
  const res = await fetch(
    `https://admin.holeytriangle.com/items/posts?filter={ "status": { "_eq": "Published" }}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.HT_API_KEY}`,
      },
    }
  )
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  const blogs = data.data

  return {
    props: { blogs },
  }
}
