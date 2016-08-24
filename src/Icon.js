
import React from 'react'
import Line from './Line'
import getShapes from './shapes'

const getDirection = (props) => Object.keys(props).reduce((a, b) => a || (props[b] ? b : null), null)

const getShape = strokeWidth => ({
  name,
  up,
  down,
  left,
  right
}) => {
  const shapes = getShapes(strokeWidth)
  const direction = getDirection({ up, down, left, right }) || 'right'
  if (!shapes[name]) {
    return shapes.x
  }

  return shapes[name][direction] || shapes[name]
}

const Icon = ({
  name = 'x',
  up,
  down,
  left,
  right,
  ...props
}) => {
  const shape = getShape(props.strokeWidth || 1)({ name, up, down, left, right })

  return (
    <Line {...props}
      debug
      paths={shape} />
  )
}

export default Icon

