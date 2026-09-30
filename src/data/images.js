/**
 * Every photo on the site is declared here, in one place.
 *
 * Each slot lists Unsplash photo IDs in priority order. If the first fails to
 * load, the next is tried; if all fail, a designed art panel is shown instead,
 * so a missing photo never leaves a hole in the layout.
 *
 * To swap a picture: replace the ID (the part after "photo-" in an Unsplash
 * image URL) or add your own file to /public/photos and list it as
 * "/photos/your-file.jpg" in `own`.
 *
 * For production, run `npm run images` once. It downloads every photo into
 * /public/photos so the site no longer depends on Unsplash at runtime.
 */
import manifest from './local-manifest.json' with { type: 'json' }

export const IMAGES = {
  // Hero: the three facets of the mark
  heroA: { ids: ['1550751827-4bd374c3f58b', '1526374965328-7f61d4dc18c5'], alt: 'Analyst reviewing security telemetry in a dark operations room', pos: '50% 40%' },
  heroB: { ids: ['1600880292203-757bb62b4baf', '1521737604893-d14cc237f11d'], alt: 'Consultants collaborating around a table', pos: '50% 35%' },
  heroC: { ids: ['1558494949-ef010cbdcc31', '1544197150-b99a580bb7a8'], alt: 'Rows of network and server infrastructure', pos: '50% 50%' },

  // About
  aboutMain: { ids: ['1522071820081-009f0129c71c', '1531482615713-2afd69097998'], alt: 'A team working together on laptops', pos: '50% 40%' },
  aboutSide: { ids: ['1573164713714-d95e436ab8d6', '1573496359142-b8d87734a5a2'], alt: 'A consultant in a client meeting', pos: '50% 25%' },

  // Capabilities
  capCyber: { ids: ['1563986768609-322da13575f3', '1510511459019-5dda7724fd87'], alt: 'Digital padlock representing cybersecurity', pos: '50% 50%' },
  capSoc: { ids: ['1551288049-bebda4e38f71', '1534972195531-d756b9bfa9f2'], alt: 'Monitoring dashboards in a security operations centre', pos: '50% 50%' },
  capCloud: { ids: ['1451187580459-43490279c0fa', '1544197150-b99a580bb7a8'], alt: 'Global network connections over the earth', pos: '50% 50%' },
  capAI: { ids: ['1677442136019-21780ecad995', '1620712943543-bcc4688e7485'], alt: 'Abstract artificial intelligence visual', pos: '50% 50%' },
  capGov: { ids: ['1450101499163-c8848c66ca85', '1554224155-6726b3ff858f'], alt: 'Reviewing and signing compliance documents', pos: '50% 50%' },

  // How we work
  pbSec: { ids: ['1555066931-4365d14bab8c', '1518770660439-4636190af475'], alt: 'Code and security tooling on a laptop', pos: '50% 50%' },
  pbAI: { ids: ['1485827404703-89b55fcc595e', '1620712943543-bcc4688e7485'], alt: 'A robot representing responsible AI', pos: '50% 40%' },

  // Purpose band
  lagos: { ids: ['1618828665011-0abd973f7bb8', '1486406146926-c627a92ad1ab'], alt: 'City skyline', pos: '50% 60%' },

  // Services
  svcManaged: { ids: ['1531297484001-80022131f5a1', '1497366216548-37526070297c'], alt: 'Engineers running managed IT operations', pos: '50% 50%' },
  svcCloud: { ids: ['1544197150-b99a580bb7a8', '1451187580459-43490279c0fa'], alt: 'A modern data centre corridor', pos: '50% 50%' },
  svcInfra: { ids: ['1597852074816-d933c7d2b988', '1558494949-ef010cbdcc31'], alt: 'Network cabling in a rack', pos: '50% 50%' },

  // Compliance / Why / Contact
  compliance: { ids: ['1554224155-6726b3ff858f', '1450101499163-c8848c66ca85'], alt: 'Documents and a calculator on a desk', pos: '50% 50%' },
  why: { ids: ['1504384308090-c894fdcc538d', '1521737604893-d14cc237f11d'], alt: 'A team in a working session', pos: '50% 40%' },
  contact: { ids: ['1486406146926-c627a92ad1ab', '1618828665011-0abd973f7bb8'], alt: 'Glass office towers', pos: '50% 50%' },

  // Ribbon
  rb1: { ids: ['1518770660439-4636190af475'], alt: 'Circuit board close-up', pos: '50% 50%' },
  rb2: { ids: ['1526374965328-7f61d4dc18c5'], alt: 'Streaming code', pos: '50% 50%' },
  rb3: { ids: ['1460925895917-afdab827c52f'], alt: 'Analytics on a laptop screen', pos: '50% 50%' },
  rb4: { ids: ['1521737604893-d14cc237f11d'], alt: 'Colleagues collaborating', pos: '50% 40%' },
  rb5: { ids: ['1639762681485-074b7f938ba0'], alt: 'Abstract encrypted data', pos: '50% 50%' },
  rb6: { ids: ['1620712943543-bcc4688e7485'], alt: 'AI concept', pos: '50% 40%' },
  rb7: { ids: ['1531482615713-2afd69097998'], alt: 'A meeting in progress', pos: '50% 40%' },
  rb8: { ids: ['1510511459019-5dda7724fd87'], alt: 'Data security concept', pos: '50% 50%' },
}

/** Build the ordered list of URLs to try for a slot. */
export function sourcesFor(key, width = 1400) {
  const slot = IMAGES[key]
  if (!slot) return []
  const list = []
  // 1. Local, downloaded copy (only once `npm run images` has been run)
  if (manifest[key]) list.push(`/photos/${key}.jpg`)
  // 2. Any file you placed yourself
  if (slot.own) list.push(...slot.own)
  // 3. Unsplash, tried in order
  for (const id of slot.ids || []) {
    list.push(`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=72`)
  }
  return list
}
