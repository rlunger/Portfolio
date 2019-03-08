import React from 'react'
import styled from 'styled-components'

const StyledConsoleTitle = styled.span`
  display: block;
  text-align: center;
  font-family: 'Lobster';
  font-size: 192px;
  font-weight: normal;
  color: rgba(200, 200, 200, 0.8);
  text-shadow: 2px 3px 3px green, -1px -1px 3px red;
`

const ConsoleTitle = props => {
  return <StyledConsoleTitle>{props.children}</StyledConsoleTitle>
}

export default ConsoleTitle
