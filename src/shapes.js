
const getMargin = width => width / 2
const getHalf = margin => 8 - margin

const getShapes = (strokeWidth) => {
  const m = getMargin(strokeWidth)
  // a b c
  const a0 = m / 2
  const a = m
  const b = getHalf(m)
  const c = 16 - a // full width
  const c0 = 16 - a0 // full width (angled)

  const shapes = {
    x: [
      [
        [a0, a0],
        [c0, c0],
      ],
      [
        [c0, a0],
        [a0, c0],
      ],
    ],
    plus: [
      [
        [0, 8],
        [16, 8]
      ], [
        [8, 0],
        [8, 16]
      ]
    ],
    minus: [[
      [0, 8],
      [16, 8]
    ]],
    square: [[
      [a, a],
      [c, a],
      [c, c],
      [a, c],
      ['z']
    ]],
    diamond: [[
      [8, a],
      [c, 8],
      [8, c],
      [a, 8],
      ['z']
    ]],
    burger: [
      [
        [0, 1 + a],
        [16, 1 + a]
      ],
      [
        [0, 8],
        [16, 8]
      ],
      [
        [0, c - 1],
        [16, c - 1]
      ]
    ],
    chevron: {
      down: [[
        [a0, 8 - b / 2],
        [8, 8 + b / 2 + a0],
        [c0, 8 - b / 2]
      ]],
      up: [[
        [a0, 8 + b / 2],
        [8, 8 - b / 2 - a0],
        [c0, 8 + b / 2]
      ]],
      left: [[
        [8 + b / 2, a0],
        [8 - b / 2 - a0, 8],
        [8 + b / 2, c0]
      ]],
      right: [[
        [8 - b / 2, a0],
        [8 + b / 2 + a0, 8],
        [8 - b / 2, c0]
      ]]
    },
    arrow: {
      up: [
        [
          [8, a],
          [8, 16],
        ], [
          [a0, b + a + a0],
          [8, a],
          [c0, b + a + a0],
        ]
      ],
      down: [
        [
          [8, 0],
          [8, c],
        ], [
          [a0, b + a0],
          [8, c],
          [c0, b + a0],
        ]
      ],
      right: [
        [
          [0, 8],
          [c, 8]
        ], [
          [b + a0, a0],
          [c, 8],
          [b + a0, c0]
        ]
      ],
      left: [
        [
          [a, 8],
          [16, 8]
        ], [
          [b + a + a0, a0],
          [a, 8],
          [b + a + a0, c0]
        ]
      ]
    },
    triangle: {
      up: [[
        [3, 12],
        [13, 12],
        [8, 15 - (5 * Math.sqrt(5))],
        ['z']
      ]],
      down: [[
        [3, 4],
        [13, 4],
        [8, 1 + (5 * Math.sqrt(5))],
        ['z']
      ]],
      left: [[
        [12, 3],
        [12, 13],
        [15 - (5 * Math.sqrt(5)), 8],
        ['z']
      ]],
      right: [[
        [4, 3],
        [4, 13],
        [1 + (5 * Math.sqrt(5)), 8],
        ['z']
      ]]
    }
  }

  return shapes
}

export default getShapes

