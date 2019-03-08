import React from 'react'
import styled from 'styled-components'
import CommandPrompt from './CommandPrompt'
import CommandInput from './CommandInput'

const StyledCommandLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  padding: 0;
  margin: 2% 1%;
  width: 99%;
  height: auto;
  background: transparent;
  text-shadow: 0px 0px 8px black;
  font-family: 'Fira Code', Consolas;
  color: #5ab745;
`

const CommandLine = props => {
  return (
    <StyledCommandLine>
      <CommandPrompt>{'>'}</CommandPrompt>
      <CommandInput />
    </StyledCommandLine>
  )
}

export default CommandLine
