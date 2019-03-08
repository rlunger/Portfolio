import React from 'react'
import styled from 'styled-components'

const StyledCommandPrompt = styled.span`
  display: inline-block;
  height: 100%;
  background: #1d1c19;
  text-align: center;
  text-shadow: 0px 0px 4px green;
  font-family: 'Fira Code', Consolas;
  color: #99c24d;
  font-size: 100%;
  padding-top: 2px;
`

const CommandPrompt = props => {
  return <StyledCommandPrompt>{props.children}</StyledCommandPrompt>
}

export default CommandPrompt
