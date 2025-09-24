import { Lib } from '@mb3r/component-library'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import PageContainer from '../components/PageContainer/PageContainer'
import BlogCard from '../components/shared/BlogCard'
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
                  <React.Fragment key={blog.id}>
                    {/* Desktop layout */}
                    <div className="Blog__card Blog__card--desktop">
                      <Link href={blogUrl}>
                        {blog.cover_img && (
                          <div className="Blog__cover-image-wrapper">
                            <Image
                              src={blog.cover_img}
                              alt={`Cover image for ${blog.title}`}
                              className="Blog__cover-image"
                              loading="lazy"
                              fill
                              placeholder="blur"
                              blurDataURL={
                                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOc1OrTCQAFAgHuigYfLgAAAABJRU5ErkJggg=='
                              }
                            />
                          </div>
                        )}

                        <div className="Blog__text-content">
                          <h2 className="h5 text-dark">{blog.title}</h2>

                          {blog.description && (
                            <div>
                              <p className="text-dark-secondary p-0 text-sm">
                                {blog.description}
                              </p>
                            </div>
                          )}

                          <p className="Blog__text-content-date m-0 text-dark-secondary text-sm">
                            {BlogLib.formatDate(blog.date_created)}
                          </p>
                        </div>
                      </Link>
                    </div>

                    {/* Mobile layout */}
                    <div className="Blog__card--mobile">
                      <BlogCard blog={blog} isCompact />
                    </div>
                  </React.Fragment>
                )
              })}
            </div>
          </PageContainer>
        </main>
        <Footer reversed />
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
          background-color: var(--paper-color-light);
          margin: 0 auto;
          border-radius: var(--radius);
          max-width: var(--main-width);
          overflow: hidden;
          position: relative;

          &:not(:last-child) {
            margin-bottom: 1.5rem;
          }
        }

        .Blog__card--mobile {
          display: none;
          margin-bottom: 1.5rem;
        }

        .Blog__card--desktop {
          display: block;
        }

        .Blog__cover-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          z-index: 1;
        }

        .Blog__cover-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .Blog__text-content {
          position: relative;
          z-index: 2;
          background-color: var(--paper-color-light);
          margin-left: 35%;
          padding: ${breakpointSize === 'sm' ? '1rem' : '1.2rem'};
          min-height: 200px;
        }

        .Blog__text-content-date {
          position: absolute;
          bottom: 1rem;
        }

        .text-sm {
          font-size: 0.875rem;
        }

        @media only screen and (max-width: 790px) {
          .Blog main {
            padding: 1.5rem 2rem;
          }

          .Blog__card--desktop {
            display: none;
          }

          .Blog__card--mobile {
            display: block;
          }

          .Blog__cover-image-wrapper {
            position: static;
            width: 100%;
            height: 200px;
          }

          .Blog__cover-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
          }

          .Blog__text-content {
            margin-left: 0;
            min-height: auto;
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
