import React from 'react'
import styled from '@emotion/styled'
import * as colors from '../../../theme/colors'

const Loans = () => {
  return (
    <Container>
      <MainTitle>Loans</MainTitle>
      <Text>{loansText}</Text>
      <SubTitle>The types of loans we offer</SubTitle>
      <Text>{loansInfoText}</Text>
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
  padding: 8px 16px;
  position: sticky;
`

const Info = styled.p``

const SubTitle = styled.h2`
  background-color: ${colors.TextOnS};
  padding: 0 16px;

`

const loansText = `Mizrahi-Tefahot offers a variety of attractive loans to help you meet your needs and realize your dreams.
Whether you are planning to buy a new car, renovate your home or take a trip abroad, we provide the means to achieve your goal.`

const loansInfoText = `​Instant loan: a loan of up to NIS 75,000 without guarantors and without leaving home: to finance high education, take a trip abroad, celebrate your child's bar/bat mitzvah, or any other purpose you may have in mind.

Home renovation loan: you can renovate your home the way you have always dreamed of. Instead of taking a short term loan with high monthly repayments, Tefahot experts can design a loan tailored specifically for you.

Car loan:  a loan at preferred interest rates for up to as much as 85% of the cost of the car.

All-purpose loan: a special loan in which your home serves as collateral for a loan you can take for any purpose.

Student loan: in order to give you peace of mind during your academic studies, we offer you a loan to finance your tuition fees as well as loans of up to NIS 60,000 with special terms.

Business loan: a whole raft of financing solutions, convenient terms, to help you grow your business, including small-business loans from a state-guaranteed fund, and a factoring service that turns your customer's debt into cash.`

export default Loans
