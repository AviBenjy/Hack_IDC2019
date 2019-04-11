import React from 'react'
import styled from '@emotion/styled'
import * as colors from '../../../theme/colors'

const Mortgages = () => {
  return (
    <Container>
      <MainTitle>Mizrahi-Tefahot International Mortgage Center</MainTitle>
      <Text>{mortgagesText}</Text>
      <SubTitle>The types of mortgages we offer</SubTitle>
      <Text>{mortgagesInfoText}</Text>
      <Info></Info>
    </Container>
  )
}

const Container = styled.div`
`

const Text = styled.p`
  padding: 16px;  
`

const MainTitle = styled.h2`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 0 16px;
  padding: 8px 16px;
`

const Info = styled.p``

const SubTitle = styled.h2`
  background-color: ${colors.TextOnS};
  padding: 0 16px;

`

const mortgagesText = `You choose the currency, the frequency of payment, and the mortgage term. We provide the award winning, best-in-breed, service & products making it an easy and pleasant experience. 
fer`

const mortgagesInfoText = `Situated in the heart of Jerusalem, the Center will deal with the mortgage approval process.
The application can also be made at your convenience through our affiliates in the U.S.A., the U.K. Switzerland and Mexico
Once approved, the mortgage is executed in any one of the 120 branches in Israel that YOU choose.

Mortgages in US $, UK £, Euros €, Swiss Francs or Japanese ¥.
Loans for up to 20 years.
Up to 60% of the property value, with options for increasing to 80% (with mortgage indemnty insurance)
LIBOR-based or fixed interest loans.
Competitive interest rates, flexible repayment terms.
No prepayment penalties on variable rate loans. 

Mizrahi-Tefahot Bank will provide you with all the facts and help you through the process of obtaining the residential loan for your home in Israel.`

export default Mortgages
