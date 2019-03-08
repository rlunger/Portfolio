import React from 'react'
import styled from 'styled-components'

const StyledCommandInput = styled.input`
  display: inline-block;
  height: 100%;
  background: transparent;
  border: none;
  text-shadow: 0px 1px 5px green;
  font-family: 'Fira Code', Consolas;
  color: #ffbbff;
  font-size: 100%;
  caret-color: transparent;
  margin-left: 1%;

  :focus {
    outline: none;
  }
`

let commandHistory = []

class CommandInput extends React.Component {
  constructor (props) {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.state = {
      text: '',
      cursorOn: false,
      wrangler: props.wrangler,
      currentSelection: 0
    }
    setInterval(() => {
      this.setState({ cursorOn: !this.state.cursorOn })
    }, 400)
  }
  handleChange (e) {
    let newText = e.target.value.replace('█', '')
    if (newText.length > this.state.text.length) {
      this.setState({ text: newText })
    } else {
      this.setState({
        text: this.state.text.substr(0, this.state.text.length - 1)
      })
    }
  }
  handleKeyUp (e) {
    if (e.keyCode === 13) {
      this.state.wrangler(this.state.text)
      if (
        commandHistory.length === 0 ||
        this.state.currentSelection === commandHistory.length
      ) {
        commandHistory.push(this.state.text)
      }
      this.setState({ text: '', currentSelection: commandHistory.length })
    } else if (e.keyCode === 38) {
      let selection = this.state.currentSelection
      if (selection > 0 && selection <= commandHistory.length) {
        this.setState({
          currentSelection: selection - 1,
          text: commandHistory[selection - 1]
        })
      }
    } else if (e.keyCode === 40) {
      let selection = this.state.currentSelection
      if (selection >= 0 && selection < commandHistory.length - 1) {
        this.setState({
          currentSelection: selection + 1,
          text: commandHistory[selection + 1]
        })
      }
    }
  }

  render () {
    return (
      <StyledCommandInput
        type='text'
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        value={this.state.text + (this.state.cursorOn ? '█' : '')}
        autoFocus
        spellCheck={'false'}
      />
    )
  }
}

export default CommandInput
