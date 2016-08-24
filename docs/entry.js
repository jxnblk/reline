
import React from 'react'
import ReactDOM from 'react-dom'
import { Slider } from 'rebass'
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

const BigDemo = (props) => (
  <div>
    <X {...props} m={2} />
    <Plus {...props} m={2} />
    <Minus {...props} m={2} />
    <Burger {...props} m={2} />
    <Square {...props} m={2} />
    <Diamond {...props} m={2} />
    <Chevron {...props} up m={2} />
    <Chevron {...props} down m={2} />
    <Chevron {...props} left m={2} />
    <Chevron {...props} right m={2} />
    <Arrow {...props} up m={2} />
    <Arrow {...props} down m={2} />
    <Arrow {...props} left m={2} />
    <Arrow {...props} right m={2} />
    <Triangle {...props} up m={2} />
    <Triangle {...props} down m={2} />
    <Triangle {...props} left m={2} />
    <Triangle {...props} right m={2} />
  </div>
)

BigDemo.defaultProps = {
  style: {
    transitionProperty: 'stroke-width',
    transitionDuration: '.2s',
    transitionTimingFunction: 'ease-out'
  }
}

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
  constructor () {
    super()
    this.state = {
      strokeWidth: 3,
      size: 128
    }
    this.handleNumberChange = this.handleNumberChange.bind(this)
  }

  handleNumberChange (e) {
    const { name, value } = e.target
    const n = parseFloat(value)
    this.setState({ [name]: n })
  }

  render () {
    const { size, strokeWidth } = this.state

    return (
      <div>
        <h1>Reline</h1>
        <Text>
          React SVG line icon components
        </Text>
          <Link href='https://github.com/jxnblk/reline'>
            GitHub
          </Link>
        <Hr />
        <div>
          <Slider
            label={`Size ${size}`}
            name='size'
            min={8}
            step={8}
            max={128}
            value={size}
            onChange={this.handleNumberChange} />
          <Slider
            label={`Stroke Width ${strokeWidth}`}
            name='strokeWidth'
            min={1}
            step={.5}
            max={8}
            value={strokeWidth}
            onChange={this.handleNumberChange} />
          <BigDemo size={size} strokeWidth={strokeWidth} />
        </div>
        <BigDemo size={128} />
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
      </div>
    )
  }
}

ReactDOM.render(<App />, app)

