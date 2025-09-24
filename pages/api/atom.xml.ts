import { marked } from 'marked'
import { NextApiRequest, NextApiResponse } from 'next'
import { getAllBlogs } from '../../lib/blog'

const generateAtomXml = (blogs: any[]) => {
  const siteUrl = 'https://amberwilliams.io/blog'
  const feedUpdated =
    blogs.length > 0
      ? new Date(
          Math.max(
            ...blogs.map((blog) => new Date(blog.date_created).getTime())
          )
        ).toISOString()
      : new Date().toISOString()

  const blogEntries = blogs
    .map((blog) => {
      const blogUrl = `${siteUrl}/blogs/${blog.slug}`
      const updated = new Date(blog.date_updated).toISOString()
      const created = new Date(blog.date_created).toISOString()
      const htmlContent = blog.content ? marked(blog.content) : ''

      return `
      <entry>
        <title>${blog.title}</title>
        <link href="${blogUrl}"/>
        <id>${blogUrl}</id>
        <published>${created}</published>
        <updated>${updated}</updated>
        <content type="html"><![CDATA[${htmlContent}]]></content>
      </entry>`
    })
    .join('')

  return `
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="en-us">
  <title>amberwilliams.io</title>
  <subtitle>Amber Williams’ blog</subtitle>
  <link href="${siteUrl}"/>
  <link href="${siteUrl}/api/atom.xml" rel="self"/>
  <updated>${feedUpdated}</updated>
  <author>
    <name>Amber Williams</name>
  </author>
  <id>${siteUrl}</id>
  ${blogEntries}
</feed>`
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

    const blogs = await getAllBlogs(apiUrl, apiKey, true)
    const atomXml = generateAtomXml(blogs)

    res.setHeader('Content-Type', 'text/xml')

    return res.status(200).send(atomXml)
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    res.status(500).json({ error: 'Failed to generate RSS feed' })
  }
}
