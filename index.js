
const line = (...args) => (
  args.map(([x, y], i) => (
    i === 0 ? `M${x} ${y}` : `L${x} ${y}`
  )).join(' ')
)

module.exports = line

