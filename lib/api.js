import fs from 'fs'
import { join } from 'path'
import yaml from 'js-yaml'

const postsDirectory = join(process.cwd(), 'content/case-studies')

export function getPostSlugs(dir) {
  return fs.readdirSync(dir)
}

function JsonfromYaml(path) {
  try {
    let fileContents = fs.readFileSync(path, 'utf8')
    let data = yaml.safeLoad(fileContents)

    return data
  } catch (e) {
    console.error(e)
  }
}

function getPostBySlug(slug, fields = null) {
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
    // sort posts by order in accending order
    .sort((post1, post2) => (post1.order < post2.order ? '-1' : '1'))

  return posts
}
