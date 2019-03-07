import React from 'react'
import styled from 'styled-components'
import CommandPrompt from './CommandPrompt'
import CommandInput from './CommandInput'

const StyledCommandLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  padding: 0;
  margin: 0;
  height: 10%;
  width: 99%;
  background: #2d2c29;
  border: 3px solid;
  border-color: #3d3c39;
  border-radius: 5px;
  text-shadow: 0px 0px 8px black;
  font-family: 'Fira Code', Consolas;
  color: #5ab745;
  font-size: 28px;
  line-height: 1.2em;
  padding: 0 0 0 10px;
  vertical-align: top;
  caret-color: transparent;
`

const CommandLine = props => {
  return (
    <StyledCommandLine>
      <CommandPrompt>{'/usr/bin>'}</CommandPrompt>
      <CommandInput />
    </StyledCommandLine>
  )
}

export default CommandLine
