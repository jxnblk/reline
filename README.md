
# Reline

React SVG line icon components

http://jxnblk.com/reline

```js
npm i reline
```

```js
import React from 'react'
import { Line } from 'reline'

const Demo = () => (
  <div>
    <Line path={[
      [0, 0],
      [16, 16]
    ]} />
  </div>
)
```

```js
import React from 'react'
import { Icon } from 'reline'

const Demo = () => (
  <div>
    <Icon name='chevron' down />
  </div>
)
```

```js
import React from 'react'
import {
  X,
  Chevron
} from 'reline'

const Demo = () => (
  <div>
    <X />
    <Chevron right />
  </div>
)
```

## Components

### Line

Creates SVG icons with straight lines

**Props**

- `path` - an array of x/y coordinate arrays to create straight lines, based on a 16x16 grid
- `paths` - an array of path arrays to create segmented lines
- `size` - number indicating the width and height of the icon in pixels (default `16`)
- `strokeWidth` - number indicating the stroke width of the icon in pixels (default `3`)
- `stroke` - string for the stroke color (default `currentcolor`)

### Icon

Line component for icons based on common shapes

**Props**

- `name` - key for icon name, one of the following:
  - `x`
  - `plus`
  - `minus`
  - `chevron`
  - `arrow`
  - `triangle`
  - `square`
  - `diamond`
  - `burger`
- `up` - sets orientation for directional icons (chevron, arrow, & triangle)
- `down` - sets orientation for directional icons
- `left` - sets orientation for directional icons
- `right` - sets orientation for directional icons

### Primitive Components

- `X` - X-shaped icon
- `Plus` - plus symbol icon
- `Minus` - minus symbol icon
- `Chevron` - chevron-shaped icon
- `Arrow` - arrow-shaped icon
- `Triangle` - triangle-shaped icon
- `Square` - square-shaped icon
- `Diamond` - diamond-shaped icon
- `Burger` - hamburger icon

MIT License

