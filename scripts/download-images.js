/**
 * Downloads every photo declared in src/data/images.js into public/photos,
 * so the live site no longer depends on Unsplash at request time.
 *
 * Run once before your first deploy, and again whenever you add or change
 * an entry in src/data/images.js:
 *
 *   npm run images
 *
 * This requires normal internet access to images.unsplash.com. It is safe
 * to skip: without it, the site still works, falling back to Unsplash URLs
 * directly (see sourcesFor() in src/data/images.js), which is fine for
 * development but adds a third-party runtime dependency in production.
 */
import { createWriteStream, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { pipeline } from 'node:stream/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outDir = path.join(root, 'public', 'photos')
const manifestPath = path.join(root, 'src', 'data', 'local-manifest.json')

/*
async function loadImages() {
  const mod = await import(path.join(root, 'src', 'data', 'images.js'))
  return mod.IMAGES
}
*/

async function loadImages() {
  const imagePath = path.join(root, 'src', 'data', 'images.js')
  const mod = await import(pathToFileURL(imagePath).href)
  return mod.IMAGES
}

async function download(url, dest) {
  const res = await fetch(url)
  if (!res.ok || !res.body) throw new Error(`HTTP ${res.status} for ${url}`)
  await pipeline(res.body, createWriteStream(dest))
}

async function main() {
  const IMAGES = await loadImages()
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

  const manifest = {}
  const entries = Object.entries(IMAGES)
  console.log(`Downloading ${entries.length} photos into ${path.relative(root, outDir)}/ ...`)

  for (const [key, slot] of entries) {
    const id = slot.ids?.[0]
    if (!id) { console.warn(`  skip ${key}: no Unsplash id configured`); continue }
    const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1800&q=78`
    const dest = path.join(outDir, `${key}.jpg`)
    try {
      await download(url, dest)
      manifest[key] = true
      console.log(`  ok    ${key}`)
    } catch (err) {
      console.warn(`  fail  ${key}: ${err.message}`)
    }
  }

  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n')
  const okCount = Object.keys(manifest).length
  console.log(`Done. ${okCount}/${entries.length} photos saved. Manifest written to ${path.relative(root, manifestPath)}.`)
  if (okCount < entries.length) {
    console.log('Some photos fell back to Unsplash at runtime; re-run this script later to retry them.')
  }
}

main().catch((err) => { console.error(err); process.exit(1) })
