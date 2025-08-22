import { Lib } from '@mb3r/component-library'
import { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'

import Avatar from '../../components/Avatar'
import CustomMarkdown from '../../components/CustomMarkdown'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import PageContainer from '../../components/PageContainer/PageContainer'
import ReadNextSection from '../../components/ReadNextSection'
import * as BlogLib from '../../lib/blog'
import { getCache, setCache } from '../../lib/cache'

interface IBlog {
  id: string
  name: string
  title: string
  content: string
  date_created: string
  date_updated: string
  slug?: string
  description?: string
  cover_img?: string
}

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

interface IBlogProps {
  blog: IBlog
  suggestedBlogs?: IBlogsListItem[]
}

const Blog: NextPage<IBlogProps> = ({ blog, suggestedBlogs }) => {
  const contentRef = React.useRef<HTMLDivElement>(null)
  const breakpointSize = Lib.useGetMediaQuerySize()

  useEffect(() => {
    BlogLib.parseMermaidCodeBlock(contentRef)
    BlogLib.parseLinks(contentRef)
  }, [contentRef])

  const estimateReadTime = () => {
    const readTime = BlogLib.estimateReadTime(blog.content)
    if (!readTime) {
      return ''
    }
    return ` · ${readTime}`
  }

  if (!blog) {
    return <div>loading</div>
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://amberwilliams.io'
  const postUrl = `${baseUrl}/blogs/${blog.slug ? blog.slug : blog.id}`
  const imageUrl = blog.cover_img || `${baseUrl}/images/default-blog-image.jpg`

  return (
    <>
      <Head>
        {/* Character Encoding */}
        <meta charSet="utf-8" />

        {/* IE Compatibility */}
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />

        {/* Responsive Design */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* SEO - Search Engine Indexing */}
        <meta name="robots" content="index, follow" />

        {/* Page Title */}
        <title>{`${blog.title}`}</title>

        {/* SEO - Description (displays in search results) */}
        {blog.description && (
          <meta name="description" content={blog.description} />
        )}

        {/* Author Information */}
        <meta name="author" content="Amber Williams" />

        <link rel="canonical" href={postUrl} />

        {/* Open Graph Protocol (for social media sharing) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:site_name" content="Amber Williams' Blog" />

        {/* Twitter Card (for Twitter sharing) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@not_not_amber" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Publish dates for SEO */}
        <meta property="article:published_time" content={blog.date_created} />
        <meta property="article:modified_time" content={blog.date_updated} />

        {/* JSON-LD for structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: blog.title,
              image: imageUrl,
              datePublished: blog.date_created,
              dateModified: blog.date_updated,
              author: {
                '@type': 'Person',
                name: 'Amber Williams',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Amber Williams',
                logo: {
                  '@type': 'ImageObject',
                  url: `${baseUrl}/images/logo.gif`,
                },
              },
              description: blog.description,
            }),
          }}
        />
      </Head>
      <style jsx>{`
        .Blog {
          background-color: var(--primary-color);
        }
        .Blog main {
          max-width: calc(var(--main-width) + var(--gap) * 2);
          margin: ${breakpointSize === 'sm' ? '1rem' : '2rem'} auto;
        }

        .Blog__content {
          background-color: white;
          padding: ${breakpointSize === 'sm' ? '1rem' : '2rem'};
          border-radius: var(--radius);
        }

        .Blog h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
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
      `}</style>

      <div className="Blog">
        <NavBar />
        <PageContainer>
          <main>
            <div ref={contentRef} className="Blog__content">
              <h1 className="text-dark">{blog.title}</h1>
              <div className="d-flex flex-row align-items-center">
                <div className="mr-3">
                  <Avatar />
                </div>
                <div className="d-flex flex-column">
                  <p className="mb-0 text-dark">
                    <b>Amber Williams</b>
                  </p>
                  <p className="mb-0 text-dark">
                    {BlogLib.formatDate(blog.date_created)} {estimateReadTime()}
                  </p>
                </div>
              </div>
              <hr />
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
              <CustomMarkdown hideH1={true}>{blog.content}</CustomMarkdown>

              <br />
            </div>
            {suggestedBlogs && suggestedBlogs.length > 0 && (
              <ReadNextSection blogs={suggestedBlogs} />
            )}
          </main>
        </PageContainer>
        <Footer reversed />
      </div>
    </>
  )
}

export default Blog

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const blogId = context.resolvedUrl.replace('/blogs/', '')
  const cacheKey = `blog-${blogId}`
  let blog = (getCache(cacheKey) as unknown) as IBlog

  if (!blog) {
    const res = await fetch(
      `${process.env.CMS_SERVER}/items/posts?filter={ "status": { "_eq": "published" }, "slug": { "_eq": "${blogId}" }}`,
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

    const blogData = data.data[0]

    blog = {
      id: blogData.id,
      name: blogData.name,
      title: blogData.title,
      content: blogData.content,
      date_created: blogData.date_created,
      date_updated: blogData.date_updated,
      slug: blogData.slug,
      description: blogData.description,
      cover_img: blogData.cover_img
        ? `${process.env.CMS_SERVER}/assets/${blogData.cover_img}`
        : null,
    }
    setCache(cacheKey, blog)
  }

  const suggestedBlogs = await BlogLib.getSuggestedBlogPosts(
    blog.id,
    process.env.CMS_SERVER,
    process.env.CMS_API_KEY
  )

  return {
    props: {
      blog,
      suggestedBlogs,
    },
  }
}
