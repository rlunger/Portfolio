import React from 'react'
import styled from 'styled-components'
import Console from './Console'
import Explorer from './Explorer'

const StyledTerminal = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  color: green;
  width: 90vw;
  height: 90vh;
  margin: 0;
  padding: 0;
  border: 0;
  animation: textShadow 1.6s infinite;
  z-index: 5;

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
`

const Terminal = props => (
  <StyledTerminal>
    {props.children}
    <Explorer />
    <Console />
  </StyledTerminal>
)
export default Terminal