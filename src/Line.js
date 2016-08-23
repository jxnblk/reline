
import React from 'react'
import { margin } from 'understyle'

const line = (...args) => (
  args.map(([x, y], i) => (
    i === 0
      ? `M${x} ${y}`
      : x === 'z'
      ? 'z'
      : `L${x} ${y}`
  )).join(' ')
)

const Line = ({
  path,
  paths = [],
  size = 16,
  stroke = 'currentcolor',
  strokeWidth = 3,
  style,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  debug,
  ...props
}) => {
  const sx = {
    display: 'inline-block',
    verticalAlign: 'middle',
    ...margin({
      m,
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
    }),
    style
  }

  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      width={size}
      height={size}
      fill='none'
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={sx}>
      {path && <path d={line(...path)} />}
      {paths.map((p, i) => (
        <path key={i} d={line(...p)} />
      ))}
      {debug && (
        <g strokeWidth='.25' stroke='magenta'>
          <path d={line([8, 0], [8, 16])} />
          <path d={line([0, 8], [16, 8])} />
        </g>
      )}
    </svg>
  )
}

export default Line

