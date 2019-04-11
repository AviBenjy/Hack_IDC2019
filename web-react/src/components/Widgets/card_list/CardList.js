import React from 'react'
import styled from '@emotion/styled'
import { cardConfig } from '../../../utils/constants'
import Card from '../card/Card'


const CardList = () => {

  const renderCards = (cards) => {
    const offers = Object.keys(cards)
     return offers.map(offer => <Card title={cards[offer].title} image={cards[offer].image} />)
    
  }

  return (
    <Container>
      {renderCards(cardConfig)}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

`

export default CardList
