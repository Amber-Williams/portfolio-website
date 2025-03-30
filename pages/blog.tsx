import { Lib } from '@mb3r/component-library'
import type { NextPage } from 'next'
import React from 'react'

import Link from 'next/link'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import PageContainer from '../components/PageContainer/PageContainer'
import * as BlogLib from '../lib/blog'

interface IBlogsListItem {
  id: string
  name: string
  title: string
  date_created: string
  date_updated: string
  slug?: string
  description?: string
  cover_img?: string
}

interface IBlogs {
  blogs: IBlogsListItem[]
}

const Blogs: NextPage<IBlogs> = ({ blogs }) => {
  const breakpointSize = Lib.useGetMediaQuerySize()

  if (!blogs) {
    return <div>loading</div>
  }

  return (
    <>
      <style jsx>
        {`
          .Blog {
            background-color: var(--primary-color);
          }

          .Blog__title {
            max-width: var(--main-width);
            margin: 0 auto;
            font-size: 2rem;
          }

          .Blog__card {
            background-color: white;
            margin: 0 auto;
            padding: ${breakpointSize === 'sm' ? '1rem' : '1.5rem'};
            border-radius: var(--radius);
            max-width: var(--main-width);

            &:not(:last-child) {
              margin-bottom: 1.5rem;
            }
          }

          .Blog__card img {
            border-radius: var(--radius);
          }
        `}
      </style>

      <div className="Blog">
        <NavBar />
        <main>
          <PageContainer>
            <h1 className="Blog__title mb-3 text-light" >Blog posts</h1>
            <div>
              {blogs.map((blog) => {
                const blogUrl = `/blogs/${blog.slug ? blog.slug : blog.id}`

                return (
                  <div key={blog.id} className="Blog__card">
                    <Link href={blogUrl}>
                        {blog.cover_img && (
                          <div >
                            <img
                              src={blog.cover_img}
                              alt={`Cover image for ${blog.title}`}
                              className="img-fluid"
                            />
                          </div>
                        )}

                        <div >
                          <h2 className="text-dark mt-3">{blog.title}</h2>


                          {blog.description && (
                            <div >
                              <p>{blog.description}</p>
                            </div>
                          )}
                          <div className="d-flex flex-row justify-content-between">

                            <p className="mb-2">
                            {BlogLib.formatDate(blog.date_created)} · Amber Williams
                          </p>
                          <div className="text-uppercase text-dark">Read more →</div>
                          </div>
                        </div>

                    </Link>
                  </div>
                )
              })}
            </div>
          </PageContainer>
        </main>
        {['md', 'lg', 'xl'].includes(breakpointSize) && <Footer reversed />}
      </div>
    </>
  )
}

export default Blogs

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.CMS_SERVER}/items/posts?filter={"status":{"_eq":"published"}}&sort=-date_created`,
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
    .map((blog: any) => {
      return {
        id: blog.id,
        slug: blog.slug,
        name: blog.name,
        title: blog.title,
        date_created: blog.date_created,
        date_updated: blog.date_updated,
        description: blog.description,
        cover_img: blog.cover_img ? `${process.env.CMS_SERVER}/assets/${blog.cover_img}` : null,
      }
    })

  return {
    props: { blogs },
  }
}
