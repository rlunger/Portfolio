import React from 'react'
import styled from 'styled-components'

const StyledExplorer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  width: 25%;
  height: 100%;
  margin: 0;
  border: 0;
  background: #1d1c19;
  border-color: #3d3c39;

  padding: 0;
`

const Explorer = props => {
  return <StyledExplorer />
}

export default Explorer
