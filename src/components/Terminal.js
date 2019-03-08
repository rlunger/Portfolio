import React from 'react'
import styled from 'styled-components'
import Console from './Console'
import Explorer from './Explorer'
import scanlines from './scanlines.jpg'
import MonitorFrame from './MonitorFrame'

const StyledTerminal = styled.div`
  display: flex;
  background-image: url(${scanlines})
  flex-direction: row;
  background-color: #1d1c19;
  color: whitesmoke;
  width: 100vw;
  height: 100vh;
  padding: 0;
  border: 0;
  z-index: 500;
  overflow: hidden;
  font-size: 27px;
  font-family: 'Fira Code', Consolas;
  @import url('https://fonts.googleapis.com/css?family=Lobster');
`

/*
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(18, 16, 16, 0.1);
    opacity: 0;
    z-index: 2;
    pointer-events: none;
    animation: flicker 0.15s infinite;
  }
  &::before {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
      ),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.06),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.06)
      );
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }
  .crt {
  }
  */

const Terminal = props => (
  <StyledTerminal>
    {props.children}
    <Console />
    <MonitorFrame />
  </StyledTerminal>
)
export default Terminal
