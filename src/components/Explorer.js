import React from 'react'
import styled from 'styled-components'

const StyledExplorer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  width: 30%;
  height: 100%;
  margin: 0;
  border: 0;
  background: #2d2c29;
  border: 3px solid;
  border-color: #3d3c39;
  border-radius: 5px;

  padding: 0;
`

const Explorer = props => {
  return <StyledExplorer />
}

export default Explorer
