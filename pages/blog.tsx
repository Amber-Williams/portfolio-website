import { Lib } from '@mb3r/component-library'
import type { NextPage } from 'next'

import Link from 'next/link'
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
            margin: ${breakpointSize === 'sm' ? '1rem' : '2rem'};
            padding: ${breakpointSize === 'sm' ? '1rem' : '2rem'};
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
              <Link href={{ pathname: `blogs/${blog.id}` }} key={blog.id}>
                <div className="Blog__card">
                  <h4>{blog.title}</h4>
                  <p>
                    By Amber Williams | Last updated on{' '}
                    {BlogLib.formatDate(blog.date_updated)}
                  </p>
                  <p className="text-uppercase text-right">Read more &#8594;</p>
                </div>
              </Link>
            ))}
          </PageContainer>
        </main>
        {['md', 'lg', 'xl'].includes(breakpointSize) && (
          <div className="BlogFooter">
            <Footer reversed />
          </div>
        )}
      </div>
    </>
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
    .map((blog: any) => {
      return {
        id: blog.id,
        name: blog.name,
        title: blog.title,
        date_created: blog.date_created,
        date_updated: blog.date_updated,
      }
    })
    .sort((a: any, b: any) => {
      return (
        new Date(b.date_created).getTime() - new Date(a.date_created).getTime()
      )
    })

  return {
    props: { blogs },
  }
}
