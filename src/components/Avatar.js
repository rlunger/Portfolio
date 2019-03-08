import React from 'react'
import styled from 'styled-components'
import avatar from './me.jpeg'

const StyledAvatar = styled.div`
  width: 250px;
  height: 250px;
  background-size: cover;
  border: 10px solid white;
  border-radius: 50%;
  background-image: url(${avatar});
  margin: auto;
  z-index: 100;
`

const Avatar = props => {
  return <StyledAvatar />
}

export default Avatar
