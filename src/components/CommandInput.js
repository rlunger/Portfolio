import React from 'react'
import styled from 'styled-components'

const StyledCommandInput = styled.input`
  padding: 0;
  margin: 0;
  height: 100%;
  width: 99%;
  background: #2d2c29;
  border: none;
  text-shadow: 0px 0px 8px black;
  font-family: 'Fira Code', Consolas;
  color: #5ab745;
  font-size: 28px;
  line-height: 0.2em;
  padding: 0 0 0 10px;
  vertical-align: top;
  caret-color: transparent;

  :focus {
    outline: none;
  }
`

class CommandInput extends React.Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.state = { text: '' }
  }
  handleChange (e) {
    let newText = e.target.value.replace('█', '')
    if (newText.length > this.state.text.length) {
      this.setState({ text: newText })
    } else {
      this.setState({
        text: e.target.value.substr(0, e.target.value.length - 1)
      })
    }
  }
  handleKeyUp (e) {
    if (e.keyCode === 13) {
      this.setState({ text: '' })
      window.alert('You sent the command ' + this.state.text)
    }
  }

  render () {
    return (
      <StyledCommandInput
        type='text'
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        value={this.state.text + '█'}
      />
    )
  }
}

export default CommandInput
