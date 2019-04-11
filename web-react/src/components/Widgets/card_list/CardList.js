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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 30%));
  grid-gap: 30px;
  width: 60%;
  margin: 0 auto;
`

export default CardList
