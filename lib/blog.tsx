import moment from 'moment'
import React from 'react'
import { createRoot } from 'react-dom/client'

import { IBlogsListItem } from '../types'
import { getCache, setCache } from './cache'

const Mermaid = ({ graphDefinition }: { graphDefinition: string }) => {
  const mermaidRef = React.useRef(null)
  React.useEffect(() => {
    const _m = (window as any).mermaid

    if (graphDefinition) {
      try {
        _m.render('graphDiv', graphDefinition).then(({ svg }) => {
          mermaidRef.current.innerHTML = svg
        })
      } catch (e) {
        console.error(e)
      }
    }
  }, [graphDefinition])

  return graphDefinition ? (
    <div ref={mermaidRef} style={{ color: 'var(--primary-color)' }} />
  ) : null
}

export const parseMermaidCodeBlock = async (
  contentRef: React.MutableRefObject<HTMLDivElement>
) => {
  if (contentRef?.current) {
    const elements = contentRef.current.querySelectorAll('.lang-mermaid')
    elements.forEach((el) => {
      const replacementDiv = document.createElement('div')
      replacementDiv.style.margin = '0 auto'
      replacementDiv.style.width = 'fit-content'
      const root = createRoot(replacementDiv)
      root.render(<Mermaid graphDefinition={el.textContent} />)

      el.replaceWith(replacementDiv)
    })
  }
}

export const parseLinks = async (
  contentRef: React.MutableRefObject<HTMLDivElement>
) => {
  if (contentRef?.current) {
    const elements = contentRef.current.querySelectorAll('a')
    elements.forEach((el) => {
      el.target = '_blank'
    })
  }
}

export const formatDate = (date: string) => {
  return moment(date).format('LL')
}

export const estimateReadTime = (content: string): string | undefined => {
  try {
    const WORDS_PER_MINUTE = 250 // Average reading speed
    const SECONDS_PER_IMAGE = 10
    const SECONDS_PER_CODE_BLOCK = 30
    const ROUND_UP = true

    const wordCount = content
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .filter((word) => word.length > 0).length

    // Match both markdown format ![...](...)  and HTML format <img ... />
    const markdownImageRegex = /!\[.*?\]\(.*?\)/g
    const htmlImageRegex = /<img\s[^>]*>/g

    const markdownImageMatches = content.match(markdownImageRegex) || []
    const htmlImageMatches = content.match(htmlImageRegex) || []
    const imageCount = markdownImageMatches.length + htmlImageMatches.length

    const codeBlockMatches = content.match(/```[\s\S]*?```/g) || []
    const codeBlockCount = codeBlockMatches.length

    const readTimeMinutes = wordCount / WORDS_PER_MINUTE

    const imageTimeMinutes = (imageCount * SECONDS_PER_IMAGE) / 60
    const codeBlockTimeMinutes = (codeBlockCount * SECONDS_PER_CODE_BLOCK) / 60
    let totalReadTimeMinutes =
      readTimeMinutes + imageTimeMinutes + codeBlockTimeMinutes

    if (ROUND_UP) {
      totalReadTimeMinutes = Math.ceil(totalReadTimeMinutes)
    }

    let readTimeDisplay: string
    if (totalReadTimeMinutes < 1) {
      const seconds = Math.round(totalReadTimeMinutes * 60)
      readTimeDisplay = `${seconds} sec${seconds !== 1 ? 's' : ''}`
    } else {
      readTimeDisplay = `${totalReadTimeMinutes} min${
        totalReadTimeMinutes !== 1 ? 's' : ''
      }`
    }

    return readTimeDisplay
  } catch (error) {
    return undefined
  }
}

export const getSuggestedBlogPosts = async (
  excludeId: string,
  apiUrl: string,
  apiKey: string
): Promise<any[]> => {
  try {
    const BLOG_LIMIT = 3
    const blogs = await getAllBlogs(apiUrl, apiKey)

    return blogs
      .filter((blog: any) => blog.id !== excludeId)
      .sort(() => Math.random() - 0.5)
      .slice(0, BLOG_LIMIT)
      .map((blog: any) => ({
        id: blog.id,
        slug: blog.slug,
        name: blog.name,
        title: blog.title,
        description: blog.description,
        cover_img: blog.cover_img,
      }))
  } catch (error) {
    console.error('Error fetching suggested blog posts:', error)
    return []
  }
}

export const getAllBlogs = async (apiUrl: string, apiKey: string) => {
  const cacheKey = 'blog-posts'
  let blogs = (getCache(cacheKey) as unknown) as IBlogsListItem[]

  if (!blogs) {
    const res = await fetch(
      `${apiUrl}/items/posts?fields=id,slug,name,title,description,date_created,date_updated,cover_img&filter={"status":{"_eq":"published"}}&sort=-date_created`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
    if (res.status === 401) {
      console.error('Unauthorized access to API.')
      return []
    }
    const data = await res.json()

    if (!data) {
      return []
    }

    blogs = data.data.map((blog: any) => {
      return {
        id: blog.id,
        slug: blog.slug,
        name: blog.name,
        title: blog.title,
        date_created: blog.date_created,
        date_updated: blog.date_updated,
        description: blog.description,
        cover_img: blog.cover_img
          ? `${process.env.CMS_SERVER}/assets/${blog.cover_img}`
          : null,
      }
    })

    setCache(cacheKey, blogs)
  }
  return blogs
}
