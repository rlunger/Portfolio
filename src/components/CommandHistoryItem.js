import React from 'react'
import styled from 'styled-components'

const StyledCommandHistoryItem = styled.div`
  display: block;
  text-align: center;
  width: 100%;
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 80%;
  font-variant-ligatures: normal;
`

const CommandHistoryItem = props => {
  return <StyledCommandHistoryItem>{props.children}</StyledCommandHistoryItem>
}

export default CommandHistoryItem
