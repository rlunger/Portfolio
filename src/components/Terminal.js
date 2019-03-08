import React from 'react'
import styled from 'styled-components'
import Console from './Console'
import scanlines from './scanlines.jpg'

const StyledTerminal = styled.div`
  display: flex;
  background-image: url(${scanlines});
  background-size: cover;
  color: whitesmoke;
  width: 100vw;
  height: 100vh;
  padding: 0;
  border: 0;
  z-index: 1;
  overflow: hidden;
  font-size: 27px;
  font-family: 'Fira Code', Consolas;
  @import url('https://fonts.googleapis.com/css?family=Lobster');
`

const Terminal = props => (
  <StyledTerminal>
    {props.children}
    <Console />
  </StyledTerminal>
)
export default Terminal
