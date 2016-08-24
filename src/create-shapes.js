
const createShapes = (strokeWidth = 3) => {
  // Coordinates for compensating for perpendicular strokes
  // 0 a    8    c 16
  const a = strokeWidth / 2
  const b = 8 - a
  const c = 16 - a

  // 45 degree angles
  const a0 = a / Math.sqrt(2)
  const b0 = 8 - a0
  const c0 = 16 - a0

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
        [a0, 5],
        [8, 5 + b0],
        [c0, 5]
      ]],
      up: [[
        [a0, 11],
        [8, 11 - b0],
        [c0, 11]
      ]],
      left: [[
        [11, a0],
        [11 - b0, 8],
        [11, c0]
      ]],
      right: [[
        [5, a0],
        [5 + b0, 8],
        [5, c0]
      ]]
    },
    arrow: {
      up: [
        [
          [8, a],
          [8, 16],
        ], [
          [a0, b0 + a],
          [8, a],
          [c0, b0 + a],
        ]
      ],
      down: [
        [
          [8, 0],
          [8, c],
        ], [
          [a0, 16 - b0 - a],
          [8, c],
          [c0, 16 - b0 - a],
        ]
      ],
      right: [
        [
          [0, 8],
          [c, 8]
        ], [
          [16 - b0 - a, a0],
          [c, 8],
          [16 - b0 - a, c0]
        ]
      ],
      left: [
        [
          [a, 8],
          [16, 8]
        ], [
          [b0 + a, a0],
          [a, 8],
          [b0 + a, c0]
        ]
      ]
    },
    triangle: {
      up: [[
        [a, 13],
        [c, 13],
        [8, 13 - b * Math.sqrt(3)],
        ['z']
      ]],
      down: [[
        [a, 3],
        [c, 3],
        [8, 3 + b * Math.sqrt(3)],
        ['z']
      ]],
      left: [[
        [13, a],
        [13, c],
        [13 - b * Math.sqrt(3), 8],
        ['z']
      ]],
      right: [[
        [3, a],
        [3, c],
        [3 + b * Math.sqrt(3), 8],
        ['z']
      ]]
    }
  }

  return shapes
}

export default createShapes

