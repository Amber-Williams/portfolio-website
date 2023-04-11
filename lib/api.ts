import fs from 'fs'
import { join } from 'path'
import yaml from 'js-yaml'

const postsDirectory = join(process.cwd(), 'content/case-studies')

export const getPostSlugs = (dir: string) => {
  return fs.readdirSync(dir)
}

function JsonfromYaml(path: string) {
  try {
    const fileContents = fs.readFileSync(path, 'utf8')
    const data = yaml.safeLoad(fileContents)

    return data
  } catch (e) {
    console.error(e)
  }
}

function getPostBySlug(slug: string, fields = null) {
  const realSlug = slug.replace(/\.yml$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.yml`)
  const data = JsonfromYaml(fullPath)

  // if no fields return all
  if (!fields) {
    return data
  }

  const items = {}
  // else filter out
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = null) {
  const slugs = getPostSlugs(postsDirectory)
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1: any, post2: any) => (post1.order < post2.order ? -1 : 1))

  return posts
}

export function getAPost(postName: string) {
  const slugs = getPostSlugs(postsDirectory)

  const _post = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((slug) => slug.path === postName)

  return _post
}
