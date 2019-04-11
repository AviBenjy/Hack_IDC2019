import React from 'react'
import styled from '@emotion/styled'
import CardList from '../../Widgets/card_list/CardList'
import OfferResults from '../../Widgets/offers_results/OffersRsults';

const Deals = () => {
  return (
    <Container>
      <Title>I wanna...</Title>
      <CardList />

      <WrapperOfferResults>
        <div style={{width: '80%'}}>
          <OfferResults/>
        </div>
      </WrapperOfferResults>
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

const WrapperOfferResults = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`