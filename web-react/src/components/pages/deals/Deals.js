import React from 'react'
import styled from '@emotion/styled'
import CardList from '../../Widgets/card_list/CardList'

const Deals = () => {
  return (
    <Container>
      I wanna...
      <CardList />
    </Container>
  )
}

export default Deals

const Container = styled.div`
margin: 56px 0 0 170px;
height: 100vh;
background: white;
`