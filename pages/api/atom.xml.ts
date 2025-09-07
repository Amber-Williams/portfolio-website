import { NextApiRequest, NextApiResponse } from 'next'
import { getAllBlogs } from '../../lib/blog'

const generateRssXml = (blogs: any[]) => {
  const siteUrl = 'https://amberwilliams.io'
  const currentDate = new Date().toUTCString()

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>amberwilliams.io • Blog</title>
    <description>Latest blog posts from Amber Williams</description>
    <link>${siteUrl}</link>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${siteUrl}/api/rss.xml" rel="self" type="application/rss+xml"/>
    ${blogs
      .map((blog) => {
        const blogUrl = `${siteUrl}/blogs/${blog.slug}`
        const pubDate = new Date(blog.date_created).toUTCString()

        return `
    <item>
      <title><![CDATA[${blog.title || blog.name}]]></title>
      <description><![CDATA[${blog.description || ''}]]></description>
      <link>${blogUrl}</link>
      <guid isPermaLink="true">${blogUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      ${
        blog.cover_img
          ? `<enclosure url="${blog.cover_img}" type="image/jpeg"/>`
          : ''
      }
    </item>`
      })
      .join('')}
  </channel>
</rss>`
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const apiUrl = process.env.CMS_SERVER
    const apiKey = process.env.CMS_API_KEY

    if (!apiUrl || !apiKey) {
      return res.status(500).json({ error: 'CMS configuration missing' })
    }

    const blogs = await getAllBlogs(apiUrl, apiKey)
    const rssXml = generateRssXml(blogs)

    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=1200, stale-while-revalidate=600'
    )
    res.status(200).send(rssXml)
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    res.status(500).json({ error: 'Failed to generate RSS feed' })
  }
}
