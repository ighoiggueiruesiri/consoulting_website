import { useEffect, useRef, useState } from 'react'
import { IMAGES, sourcesFor } from '../data/images'

const ART_ANGLES = [0, 24, -18, 42, -34, 12, 60, -8]

/**
 * A photo that can't leave a hole in the layout.
 * - shows a designed art panel underneath while loading (or if every source fails)
 * - walks the fallback list in data/images.js when a source errors
 * - fades the photo in once decoded
 */
export default function Photo({ name, width = 1400, eager = false, className = '', style, imgClass = '', tint = true, hideArt = false, bare = false }) {
  const slot = IMAGES[name]
  const srcs = useRef(sourcesFor(name, width)).current
  const [i, setI] = useState(0)
  const [ready, setReady] = useState(false)
  const imgRef = useRef(null)
  const failed = i >= srcs.length
  const seed = Math.abs([...name].reduce((a, c) => a + c.charCodeAt(0), 0)) % ART_ANGLES.length

  // Cached images can finish loading before React attaches onLoad
  useEffect(() => {
    const el = imgRef.current
    if (el && el.complete && el.naturalWidth > 0) setReady(true)
  }, [i])

  return (
    <div className={`photo ${tint ? 'photo--tint' : ''} ${bare ? 'photo--bare' : ''} ${className}`} style={style}>
      {!hideArt && <div className="photo__art" style={{ '--a': `${ART_ANGLES[seed]}deg` }} aria-hidden="true" />}
      {!failed && (
        <img
          ref={imgRef}
          key={srcs[i]}
          className={`photo__img ${ready ? 'is-ready' : ''} ${imgClass}`}
          src={srcs[i]}
          alt={slot?.alt || ''}
          style={{ objectPosition: slot?.pos }}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setReady(true)}
          onError={() => { setReady(false); setI((n) => n + 1) }}
        />
      )}
      {failed && slot?.alt && <span className="sr-only">{slot.alt}</span>}
    </div>
  )
}
