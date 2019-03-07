import React from 'react'
import styled from 'styled-components'

const StyledCommandPrompt = styled.span`
  padding: 0;
  margin: 0;
  height: 100%;
  line-height: 2.55em;
  background: #2d2c29;
  vertical-align: text-bottom;
  text-shadow: 0px 0px 8px black;
  font-family: 'Fira Code', Consolas;
  color: #5ab745;
  font-size: 28px;
  padding: 0 0 0 0px;
`

const CommandPrompt = props => {
  return <StyledCommandPrompt>{props.children}</StyledCommandPrompt>
}

export default CommandPrompt
