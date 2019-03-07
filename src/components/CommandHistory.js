import React from 'react'
import styled from 'styled-components'

const StyledCommandHistory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: flex-end;
  border: 1px solid green;
  background: #2d2c29;
  border: 3px solid;
  border-color: #3d3c39;
  border-radius: 5px
  width: 100%;
  height: 90%;
`

const CommandHistory = props => {
  return <StyledCommandHistory />
}

export default CommandHistory
