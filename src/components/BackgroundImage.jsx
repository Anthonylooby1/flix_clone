import React from 'react'
import background from '../assests/login.jpg'
import styled from 'styled-components'

export default function BackgroundImage() {
  return (
    <Container>
        <img src={background} alt='background image'></img>
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    img {
        height: 100vh;
        width: 100vw;
    }
    `;
