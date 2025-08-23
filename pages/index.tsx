import { NextPage } from 'next'
import React from 'react'

import About from '../components/About/About'
import Blogs from '../components/BlogsSection'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import * as BlogLib from '../lib/blog'
import { IBlogsListItem } from '../types'

interface HomeProps {
  blogs: IBlogsListItem[]
}

const Home: NextPage<HomeProps> = ({ blogs }) => (
  <React.Fragment>
    <NavBar isWide={true} />
    <About />
    <Blogs blogs={blogs} />
    <Footer />
  </React.Fragment>
)

export async function getServerSideProps() {
  const blogs = await BlogLib.getAllBlogs(
    process.env.CMS_SERVER,
    process.env.CMS_API_KEY
  )

  return {
    props: { blogs },
  }
}

export default Home
