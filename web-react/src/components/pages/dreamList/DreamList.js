import React from 'react'
import styled from '@emotion/styled'
import image from '../../../assets/images/a.svg'

const DreamList  = () => {
  return (
    <Container>
      <img src={image} />
    </Container>
  )
}

export default DreamList;

const Container = styled.div`
margin: 56px 0 0 170px;
height: 100vh;
`