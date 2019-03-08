import React from 'react'
import styled from 'styled-components'
import CommandHistory from './CommandHistory'
import CommandLine from './CommandLine'
import CommandHistoryItem from './CommandHistoryItem'
import ConsoleTitle from './ConsoleTitle'

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

const Console = props => {
  return (
    <StyledConsole>
      <CommandHistory>
        <ConsoleTitle>Welcome</ConsoleTitle>
        <CommandHistoryItem>
          {` 
My name is Ryan.
This is my personal site.

Start with 'help' if you're stuck. 
          `}
        </CommandHistoryItem>
      </CommandHistory>
      <CommandLine />
    </StyledConsole>
  )
}

export default Console
