import { Lib } from '@mb3r/component-library'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import PageContainer from '../components/PageContainer/PageContainer'
import GradientText from '../components/shared/GradientText'
import * as BlogLib from '../lib/blog'
import { IBlogsListItem } from '../types'

export interface IBlogs {
  blogs: IBlogsListItem[]
}

const Blogs: NextPage<IBlogs> = ({ blogs }) => {
  const breakpointSize = Lib.useGetMediaQuerySize()

  if (!blogs) {
    return <div>loading</div>
  }

  return (
    <>
      <div className="Blog">
        <NavBar />
        <main>
          <PageContainer>
            <GradientText variant="green" as="h1" className="h1 mb-5">
              Blog posts
            </GradientText>
            <div>
              {blogs.map((blog) => {
                const blogUrl = `/blogs/${blog.slug ? blog.slug : blog.id}`

                return (
                  <div key={blog.id} className="Blog__card">
                    <Link href={blogUrl}>
                      {blog.cover_img && (
                        <div className="Blog__cover-image-wrapper">
                          <Image
                            src={blog.cover_img}
                            alt={`Cover image for ${blog.title}`}
                            className="Blog__cover-image img-fluid"
                            loading="lazy"
                            width={1280}
                            height={720}
                            placeholder="blur"
                            blurDataURL={
                              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOc1OrTCQAFAgHuigYfLgAAAABJRU5ErkJggg=='
                            }
                          />
                        </div>
                      )}

                      <div>
                        <h2 className="h4 text-dark mt-3">{blog.title}</h2>

                        {blog.description && (
                          <div>
                            <p className="text-dark-secondary">
                              {blog.description}
                            </p>
                          </div>
                        )}
                        <div className="d-flex flex-row justify-content-between">
                          <p className="mb-2 text-dark-secondary">
                            {BlogLib.formatDate(blog.date_created)} · Amber
                            Williams
                          </p>
                          <div className="text-uppercase text-dark">
                            Read more →
                          </div>
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
      <style jsx>{`
        .Blog {
          background-color: var(--primary-color);
        }

        .Blog main {
          max-width: var(--main-width);
          margin: 0 auto;
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

        .Blog__cover-image-wrapper {
          margin: 1rem 0 2rem 0;
          width: 100%;
          border-radius: var(--radius);
          overflow: hidden;
        }

        .Blog__cover-image {
          width: 100%;
          max-height: 60vh;
          object-fit: contain;
        }

        @media only screen and (max-width: 790px) {
          .Blog main {
            padding: 1.5rem 2rem;
          }
        }
      `}</style>
    </>
  )
}

export default Blogs

export async function getServerSideProps() {
  const blogs = await BlogLib.getAllBlogs(
    process.env.CMS_SERVER,
    process.env.CMS_API_KEY
  )

  return {
    props: { blogs },
  }
}
