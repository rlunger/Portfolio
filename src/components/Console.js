import React from 'react'
import styled from 'styled-components'
import CommandHistory from './CommandHistory'
import CommandLine from './CommandLine'
import CommandHistoryItem from './CommandHistoryItem'
import ConsoleTitle from './ConsoleTitle'
import Avatar from './Avatar'
import { Z_BLOCK } from 'zlib'
import { timingSafeEqual } from 'crypto'
import GithubLink from './GithubLink'
import Resume from '../resume.pdf'

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

let guid = 0

const directoryContents = {
  '~': ['projects/', 'docs/'],
  '~/projects': ['smartshare', 'socialmedia', 'devduel'],
  '~/docs': ['resume', 'about']
}

const resumeItem = (
  <CommandHistoryItem>
    <embed src={Resume} width={'50%'} height={'700px'} />
  </CommandHistoryItem>
)

const helpItems = [
  <ConsoleTitle fontSize='92px'>Help</ConsoleTitle>,
  <CommandHistoryItem>{`
  These are the commands you can use:

    help =>                     prints this text
   clear =>                    clears the screen
   reset =>                           start over
      cd =>             change working directory
      ls => list everything in current directory
    time =>              prints the current time
    motd =>                   message of the day
download =>                     downloads a file
     cat =>                   view file contents
    open =>  open a file (resume) in another tab
  `}</CommandHistoryItem>
]
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
  <ConsoleTitle fontSize={'92px'}>SmartShare</ConsoleTitle>,
  <CommandHistoryItem>
    {`
File sharing client/server suite.
`}
    <GithubLink target={'SmartShare'} />
  </CommandHistoryItem>
]
let catSocialMedia = [
  <ConsoleTitle fontSize={'92px'}>SocialMedia</ConsoleTitle>,
  <CommandHistoryItem>
    {`
Twitter-like RESTful API server.
`}
    <GithubLink target={'SocialMedia'} />
  </CommandHistoryItem>
]
let catDevDuel = [
  <ConsoleTitle fontSize={'92px'}>DevDuel</ConsoleTitle>,
  <CommandHistoryItem>
    {`
Two developers battle for glory on GitHub.
`}
    <GithubLink target={'DevDuel'} />
  </CommandHistoryItem>
]

let catAbout = [
  <ConsoleTitle fontSize={'92px'}>About Me</ConsoleTitle>,
  <CommandHistoryItem>
    {`
I am a father of two boys from Illinois who likes to engage with technology.
I explore game design and programming language implementation as a passion.
I've written software I'm excited about. Normally my wife and I play Minecraft
or we race as a family in Mario Kart. Most weekends you'll find me at our
local church where I've been a member of the Tech Team and the Lead Audio Engineer
for 5 years pursuing my hobby of music production.
  `}
  </CommandHistoryItem>
]

let defaultItems = [
  <div style={{ height: '100px' }} />,
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
      items: [emptyRegion, ...defaultItems],
      currentDirectory: '~'
    }
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
        <CommandHistoryItem key={guid++}>{item}</CommandHistoryItem>
      ]
    })
  }

  insertSimpleItems = items => {
    this.setState({
      items: [
        ...this.state.items,
        ...items.map(elem => (
          <CommandHistoryItem key={guid++}>{elem}</CommandHistoryItem>
        ))
      ]
    })
  }

  insertTimedItem = item => {
    let id = guid++
    this.setState({
      items: [
        ...this.state.items,
        <CommandHistoryItem key={id} color={'brown'}>
          {item}
        </CommandHistoryItem>
      ]
    })
    setTimeout(() => {
      this.setState({
        items: [...this.state.items.filter(elem => elem.key != id)]
      })
    }, 2000)
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

      case 'ls': {
        if (directoryContents[this.state.currentDirectory]) {
          this.insertSimpleItems(directoryContents[this.state.currentDirectory])
        }
        break
      }

      case 'help': {
        this.insertElements(helpItems)
        break
      }

      case 'ls projects': {
        this.insertElements(lsProjects)
        break
      }

      case 'cat': {
        this.insertTimedItem('What would you like to view?')
        break
      }

      case 'cat smartshare': {
        if (this.state.currentDirectory === '~/projects') {
          this.insertElements(catSmartShare)
        } else {
          this.insertTimedItem('smartshare not found in current directory')
        }
        break
      }
      case 'cat socialmedia': {
        if (this.state.currentDirectory === '~/projects') {
          this.insertElements(catSocialMedia)
        } else {
          this.insertTimedItem('socialmedia not found in current directory')
        }
        break
      }
      case 'cat devduel': {
        if (this.state.currentDirectory === '~/projects') {
          this.insertElements(catDevDuel)
        } else {
          this.insertTimedItem('devduel not found in current directory')
        }
        break
      }

      case 'motd': {
        this.getMotd()
        break
      }

      case 'time': {
        this.handleGetTime()
        break
      }

      case 'open resume': {
        this.handleDownloadResume()
        break
      }

      case 'cat resume': {
        this.insertElement(resumeItem)
        break
      }

      case 'cat about': {
        this.insertElements(catAbout)
        break
      }

      case 'cd ~':
      case 'cd ~/':
      case 'cd ..': {
        this.setState({ currentDirectory: '~' })
        break
      }

      case 'cd projects':
      case 'cd projects/':
      case 'cd ~/projects':
      case 'cd ~/projects/': {
        this.setState({ currentDirectory: '~/projects' })
        break
      }

      case 'cd docs':
      case 'cd docs/':
      case 'cd ~/docs':
      case 'cd ~/docs/': {
        this.setState({ currentDirectory: '~/docs' })
        break
      }

      default: {
        this.insertTimedItem(`Command '${command}' unknown`)
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
    setTimeout(() => this.insertElements(defaultItems), 400)
  }

  handleDownloadResume = () => {
    window.open(
      'https://docs.google.com/document/d/12SmE_idZ9hVfGZQQtj_fDnfDnCu6upJ4BEmGf8b34x8/edit?usp=sharing',
      '_blank'
    )
  }

  handleGetTime = () => {
    let d = new Date()
    this.insertSimpleItem(
      `The current time is ${d.getHours()}:${d.getMinutes()}`
    )
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

  handleUrlChange = (action, location) => {
    this.insertSimpleItem(location.pathname)
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
        <CommandLine
          wrangler={this.handleCommand}
          prompt={this.state.currentDirectory + '/ >'}
        />
      </StyledConsole>
    )
  }
}

export default Console
