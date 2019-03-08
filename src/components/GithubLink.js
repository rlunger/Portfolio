import React from 'react'
import styled from 'styled-components'
import Octocat from './Octocat.jpg'

const StyledGithubLink = styled.div`
  width: 100px;
  height: 100px;
  margin: auto;
  transition: all 1s;
  background-image: url(${Octocat});
  border-radius: 50%;
  background-size: cover;
  box-shadow: 10px;
  &:hover {
    width: 120px;
    height: 120px;
  }
`

const GithubLink = props => {
  return (
    <a
      style={{
        display: 'block',
        margin: 'auto',
        'margin-top': '10px',
        width: '125px',
        height: '125px'
      }}
      href={'https://github.com/rlunger/' + props.target}
      target={'_blank'}
    >
      <StyledGithubLink />
    </a>
  )
}

export default GithubLink
