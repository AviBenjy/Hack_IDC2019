import React from 'react'
import styled from '@emotion/styled'
import image from '../../../assets/images/b.svg'

const Chat = () => {
  return (
    <Container>
      <img src={image} />
    </Container>
  )
}

export default Chat

const Container = styled.div`
margin: 56px 0 0 170px;
height: 100vh;
`