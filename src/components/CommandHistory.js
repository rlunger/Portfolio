import React from 'react'
import styled from 'styled-components'

const StyledCommandHistory = styled.div`
  display: block;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  background: #1d1c19;
  text-shadow: 0 0 4px green;
  border: none;
  width: 100%;
  height: 90%;
  flex-grow: 1;
  overflow-y: scroll;
  padding-right: 17px;
`

const CommandHistory = props => {
  return <StyledCommandHistory>{props.children}</StyledCommandHistory>
}

export default CommandHistory
