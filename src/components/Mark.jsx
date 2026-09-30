/**
 * The Redport mark, traced from the supplied logo as three facets.
 * Also exports the clip-path polygons used to cut photos into those facets.
 */
export const FACETS = {
  // bounding boxes are percentages of the 377 x 365 mark
  a: { box: { l: 3.45, t: 3.29, w: 62.07, h: 55.34 }, clip: 'polygon(0% 33.2%, 49.6% 0%, 100% 34.2%, 100% 100%)' },
  b: { box: { l: 2.65, t: 41.37, w: 31.3, h: 55.07 }, clip: 'polygon(100% 0%, 0% 33.3%, 0% 100%, 100% 66.2%)' },
  c: { box: { l: 35.01, t: 60, w: 61.54, h: 36.44 }, clip: 'polygon(0% 49.6%, 49.1% 100%, 100% 50.4%, 50.4% 0%)' },
}

export default function Mark({ className = '', title, fill = 'currentColor', ...rest }) {
  return (
    <svg viewBox="0 0 377 365" className={className} role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} {...rest}>
      {title && <title>{title}</title>}
      <polygon points="13,79 129,12 247,81 247,214" fill={fill} />
      <polygon points="128,151 10,218 10,352 128,284" fill={fill} />
      <polygon points="132,285 246,352 364,286 249,219" fill={fill} />
    </svg>
  )
}
