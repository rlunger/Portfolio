import React from 'react'
import styled from 'styled-components'
import CommandHistory from './CommandHistory'
import CommandLine from './CommandLine'

const StyledConsole = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  width: 70%;
  height: 100%;
  border: 0;
  padding: 0;
`

const Console = props => {
  return (
    <StyledConsole>
      <CommandHistory />
      <CommandLine />
    </StyledConsole>
  )
}

export default Console
