import styled from 'styled-components'
import React from 'react'
import frame from './retro-frame.png'

const MonitorFrame = styled.img`
  position: absolute;
  z-index: 100;
  width: 100vw;
  height: 100vh;
`

export default props => (
  <MonitorFrame src={frame}>{props.children}</MonitorFrame>
)
