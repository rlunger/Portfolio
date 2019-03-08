import React from 'react'
import styled from 'styled-components'
import CommandHistory from './CommandHistory'
import CommandLine from './CommandLine'
import CommandHistoryItem from './CommandHistoryItem'
import ConsoleTitle from './ConsoleTitle'
import Avatar from './Avatar'
import { Z_BLOCK } from 'zlib'

const StyledConsole = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  width: 100%;
  height: 100%;
  border-left: 1px solid;
  border-color: #3d3c39;
`

let lsProjects = [
  <ConsoleTitle>Projects</ConsoleTitle>,
  <CommandHistoryItem>
    {`
SmartShare
SocialMedia
DevDuel

Which project would you like to know about?
 [Example 'cat SmartShare']
`}
  </CommandHistoryItem>
]
let catSmartShare = [
  <ConsoleTitle>SmartShare</ConsoleTitle>,
  <CommandHistoryItem>
    {`
SmartShare

File sharing client/server suite.
`}
  </CommandHistoryItem>
]
let catSocialMedia = [
  <ConsoleTitle>SocialMedia</ConsoleTitle>,
  <CommandHistoryItem>
    {`
SmartShare

Social media backend set up to emulate Twitter.
`}
  </CommandHistoryItem>
]

let defaultItems = [
  <ConsoleTitle>Welcome</ConsoleTitle>,
  <CommandHistoryItem>
    <Avatar />
  </CommandHistoryItem>,
  <CommandHistoryItem>
    {` 
My name is Ryan.
This is my personal site.

Start with 'help' if you're stuck. 
          `}
  </CommandHistoryItem>
]

let emptyRegion = (
  <div style={{ display: 'block', width: '100%', height: '100%' }} />
)
class Console extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [emptyRegion, ...defaultItems]
    }
    /* setInterval(
      () =>
        this.setState({
          items: [
            ...this.state.items,
            <CommandHistoryItem key={this.state.items.length + 1}>
              {'=============hello================='}
            </CommandHistoryItem>
          ]
        }),
      300
    ) */
  }

  getMotd = () => {
    fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
      .then(response => response.json())
      .then(response => {
        this.insertSimpleItem(response.value.joke)
      })
  }

  insertSimpleItem = item => {
    this.setState({
      items: [
        ...this.state.items,
        <CommandHistoryItem>{item}</CommandHistoryItem>
      ]
    })
  }

  insertElement = elem => {
    this.setState({
      items: [...this.state.items, elem]
    })
  }

  insertElements = elems => {
    this.setState({
      items: [...this.state.items, ...elems]
    })
  }

  handleCommand = command => {
    switch (command) {
      case 'clear': {
        this.handleClear()
        break
      }

      case 'reset': {
        this.handleReset()
        break
      }

      case 'top': {
        this.scrollToTop()
      }

      case 'ls projects': {
        this.insertElements(lsProjects)
        break
      }

      case 'cat': {
        this.insertSimpleItem('What would you like to view?')
        break
      }

      case 'cat smartshare': {
        this.insertElements(catSmartShare)
        break
      }

      case 'motd': {
        this.getMotd()
        break
      }

      default: {
        this.insertSimpleItem(`Command '${command} unknown`)
        break
      }
    }
  }

  handleClear = () => {
    this.insertElement(emptyRegion)
    setTimeout(() => this.setState({ items: [emptyRegion] }), 300)
  }

  handleReset = () => {
    this.handleClear()
    setTimeout(() => {
      this.setState({ items: [emptyRegion, ...defaultItems] })
    }, 400)
  }

  scrollToBottom = () => {
    this.historyEnd.scrollIntoView({ behavior: 'smooth' })
  }

  scrollToTop = () => {
    this.historyStart.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  componentDidUpdate () {
    this.scrollToBottom()
  }

  componentDidMount () {
    this.scrollToBottom()
  }

  render () {
    return (
      <StyledConsole>
        <CommandHistory>
          <div
            style={{ float: 'left', clear: 'both' }}
            ref={el => {
              this.historyStart = el
            }}
          />
          {this.state.items}
          <div
            style={{
              float: 'left',
              clear: 'both'
            }}
            ref={el => {
              this.historyEnd = el
            }}
          />
        </CommandHistory>
        <CommandLine wrangler={this.handleCommand} />
      </StyledConsole>
    )
  }
}

export default Console
