import styled from 'styled-components'
import React from 'react'
import frame from './scanlines.jpg'

const MonitorFrame = styled.img`
  position: absolute;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.1;
  pointer-events: none;
`

export default props => (
  <MonitorFrame src={frame}>{props.children}</MonitorFrame>
)
