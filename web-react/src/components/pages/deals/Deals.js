import React from 'react'
import styled from '@emotion/styled'
import CardList from '../../Widgets/card_list/CardList'
import OfferCard from '../../Widgets/offer_card/OfferCard';

const Deals = () => {
  return (
    <Container>
      <Title>I wanna...</Title>
      <CardList />

      <OfferCard/>
    </Container>
  )
}

export default Deals

const Container = styled.div`
margin: 56px 0 0 170px;
height: 100vh;
background: white;
`

const Title = styled.h3`
  
`