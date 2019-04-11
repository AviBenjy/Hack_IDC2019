import React, { Component } from 'react'
import styled from '@emotion/styled'
import * as colors from '../../../theme/colors'
// import travelImage from '../../../assets/images/travel.png'

const Card = ({ title, image }) => {
    return (
      <Container>
        <IconWrapper>
          <Image src={image}/>
        </IconWrapper>
        <Title>{title}</Title>
      </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.primaryLight};
  width: 200px;
  height: 200px;
  border-radius: 4px;
  cursor: pointer;
  color: ${colors.TextOnLight};
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1 1;
`

const Image = styled.img`
  width: 50%
`

const Title = styled.h2`
  
  align-self: flex-end;
`

export default Card