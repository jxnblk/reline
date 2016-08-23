
import chroma from 'chroma-js'

const createIsOk = ({
  minS,
  maxS,
  minL,
  maxL
}) => (color) => {
  const [ h, s, l ] = chroma(color).hsl()
  if (minS >= maxS || minL >= maxL) return true
  return s >= minS && s <= maxS && l >= minL && l <= maxL
}

const getColor = ({
  minS = 0,
  maxS = 1,
  minL = 0,
  maxL = 1
}) => {
  const isOk = createIsOk({ minS, maxS, minL, maxL })
  let color = chroma.random()

  while (!isOk(color)) {
    color = chroma.random()
  }

  return color.hex()
}

export default getColor

