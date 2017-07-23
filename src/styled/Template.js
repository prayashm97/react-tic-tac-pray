import React from 'react'
import styled from 'styled-components'
import {media} from '../utils/media'

export const Header = styled.header`
  text-align:center;
  font-size: 5em;
  font-face: 'Raleway', 'Ubuntu';
  padding-bottom: 15px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 80%;
  min-height: 80vh;
  ${media.handheld`
      width: 100%;
  `}
`

export const Main = (props) =>{
  return (
    <div>
      <Container>
        {props.children}
      </Container>
    </div>
  )
}
