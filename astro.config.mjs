import { defineConfig } from 'astro/config'

const site = process.env.SITE_URL || 'https://gabriele-foroni.github.io'
const base = process.env.GITHUB_PAGES_BASE || '/'

export default defineConfig({
  site,
  base,
  output: 'static',
})
