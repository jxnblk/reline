
import React from 'react'
import ReactDOM from 'react-dom'
import hello from 'hello-color'
import getColor from './get-color'
import {
  Line,
  Icon,
  X,
  Plus,
  Minus,
  Chevron,
  Arrow,
  Triangle,
  Burger,
  Square,
  Diamond
} from '../src'

const ColorBox = (props) => {
  const color = getColor({
    maxS: 1/3,
    minL: 1/8
  })
  const palette = hello(color, {
    contrast: 4.5
  })

  const sx = {
      minHeight: '100vh',
      padding: 48,
      color,
      backgroundColor: palette.color
  }

  return <div {...props} style={sx} />
}

const Text = (props) => {
  const sx = {
    fontSize: 18,
    fontWeight: 600
  }
  return <p {...props} style={sx} />
}

const Link = (props) => {
  const sx = {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '.2em',
    marginRight: '1em',
    color: 'inherit'
  }

  return <a {...props} style={sx} />
}

const Hr = () => {
  const sx = {
    marginTop: '3em',
    marginBottom: '3em',
    border: 0,
    borderBottom: '1px solid'
  }
  return <hr style={sx} />
}

const BigDemo = ({ size = 48 }) => (
  <div>
    <X size={size} m={2} />
    <Plus size={size} m={2} />
    <Minus size={size} m={2} />
    <Burger size={size} m={2} />
    <Square size={size} m={2} />
    <Diamond size={size} m={2} />
    <Chevron up size={size} m={2} />
    <Chevron down size={size} m={2} />
    <Chevron left size={size} m={2} />
    <Chevron right size={size} m={2} />
    <Arrow up size={size} m={2} />
    <Arrow down size={size} m={2} />
    <Arrow left size={size} m={2} />
    <Arrow right size={size} m={2} />
    <Triangle up size={size} m={2} />
    <Triangle down size={size} m={2} />
    <Triangle left size={size} m={2} />
    <Triangle right size={size} m={2} />
  </div>
)

const SizeDemo = ({
  sizes = [
    256,
    192,
    128,
    96,
    64,
    48,
    32,
    24,
    16,
    12,
    8
  ]
}) => (
  <div>
    {sizes.map((size, i) => <X key={i} size={size} m={2} />)}
  </div>
)

const StrokesDemo = ({
  widths = [
    6,
    4,
    3,
    2,
    1,
    .5
  ]
}) => (
  <div>
    {widths.map((w, i) => <X key={i} strokeWidth={w} m={2} />)}
  </div>
)

const DirectionalsDemo = ({ name, Component }) => (
  <div>
    <h2>{`<${name} />`}</h2>
    <Component up m={2} />
    <Component down m={2} />
    <Component left m={2} />
    <Component right m={2} />
  </div>
)

const MiscDemo = () => (
  <div>
    <h2>Misc</h2>
    <X m={2} />
    <Plus m={2} />
    <Minus m={2} />
    <Burger m={2} />
    <Square m={2} />
    <Diamond m={2} />
  </div>
)

class App extends React.Component {
  render () {
    return (
      <ColorBox>
        <h1>Reline</h1>
        <Text>
          React SVG line icon components
        </Text>
          <Link href='https://github.com/jxnblk/reline'>
            GitHub
          </Link>
        <Hr />
        <BigDemo />
        <BigDemo size={32} />
        <BigDemo size={16} />
        <Hr />
        <h2>Sizes</h2>
        <SizeDemo />
        <Hr />
        <h2>Stroke Widths</h2>
        <StrokesDemo />
        <Hr />
        <h2>{'<Line />'}</h2>
        <Line m={2} path={[
          [1.5, 16],
          [1.5, 8],
          [14.5, 8],
          [14.5, 0]
          ]} />
        <DirectionalsDemo name='Chevron' Component={Chevron} />
        <DirectionalsDemo name='Arrow' Component={Arrow} />
        <DirectionalsDemo name='Triangle' Component={Triangle} />
        <MiscDemo />
        <Hr />
        <Link href='http://jxnblk.com'>
          Made by Jxnblk
        </Link>
      </ColorBox>
    )
  }
}

ReactDOM.render(<App />, app)

