import React from 'react'
import styled from '@emotion/styled'

// theme 
import * as colors from '../../../theme/colors'


const StatusAccount = () => {
  return (
    <Container>
        <Title>Status Account</Title>
        <p>Balance: $ 3006</p> 
    </Container>
  )
}

export default StatusAccount

const Container = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 35%;
    height: 280px;
    padding: 16px 16px;
    line-height: 32px;
    border-radius: 4px;
    background: ${'#fff' || colors.greenDark};
    color: ${colors.secondaryLight};
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
`
  