/** @type {import('next').NextConfig} */
module.exports = {
  serverRuntimeConfig: {
    CMS_API_KEY: process.env.CMS_API_KEY,
    CMS_SERVER: process.env.CMS_SERVER,
  },
  images: {
    domains: ['notes.holeytriangle.com'],
  },
}
