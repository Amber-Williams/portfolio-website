import type { NextPage } from 'next'
import React, { useEffect } from 'react'

import CustomMarkdown from '../components/CustomMarkdown'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import PageContainer from '../components/PageContainer/PageContainer'
import * as BlogLib from '../lib/blog'

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
  const contentRef = React.useRef<HTMLDivElement>(null)
  const [openedContentId, setOpenedContentId] = React.useState<string | null>(
    null
  )

  useEffect(() => {
    BlogLib.parseMermaidCodeBlock(contentRef)
    BlogLib.parseLinks(contentRef)
  }, [openedContentId])

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
          .Blog {
            background-color: var(--primary-color);
            min-height: 100vh;
            position: relative;
          }

          .BlogFooter {
            position: absolute;
            bottom: 0;
            pointer-events: none;
          }

          .Blog__card {
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

      <div className="Blog">
        <NavBar />
        <main>
          <PageContainer>
            {blogs.map((blog) => (
              <div key={blog.id} className="Blog__card">
                <div onClick={() => onBlogClick(blog.id)}>
                  <h4>{blog.title}</h4>
                  <p>
                    By Amber Williams | Last updated on{' '}
                    {BlogLib.formatDate(blog.date_updated)}
                  </p>
                  {openedContentId === blog.id ? (
                    <>
                      <p className="text-uppercase text-right">
                        &#8592; Close{' '}
                      </p>
                      <hr />
                    </>
                  ) : (
                    <p className="text-uppercase text-right">
                      Read more &#8594;
                    </p>
                  )}
                </div>
                {openedContentId === blog.id && (
                  <div ref={contentRef}>
                    <CustomMarkdown hideH1={true}>
                      {blog.content}
                    </CustomMarkdown>
                    <br />
                  </div>
                )}
              </div>
            ))}
          </PageContainer>
        </main>
        <div className="BlogFooter">
          <Footer reversed />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Blogs

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.CMS_SERVER}/items/posts?filter={ "status": { "_eq": "published" }}`,
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
