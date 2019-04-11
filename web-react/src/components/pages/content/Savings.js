import React from 'react'
import styled from '@emotion/styled'
import * as colors from '../../../theme/colors'

const Savings = () => {
  return (
    <Container>
      <MainTitle>Savings and Deposits</MainTitle>
      <Text>{savingsText}</Text>
      <SubTitle>Variety of Savings</SubTitle>
      <Text>{savingsInfoText}</Text>
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
`

const Info = styled.p``

const SubTitle = styled.h2`
  background-color: ${colors.TextOnS};
  padding: 0 16px;

`

const savingsText = `Wondering what to do with your money?
Is your money simply lying idle in your current account?
We offer a range of attractive deposits for different time periods.

Our investment experts will suggest a deposit plan that best suits your needs with the highest returns.`

const savingsInfoText = `Pomelit (Pomelo): medium-term deposits (1 to 5 years)
This plan offers different types of index-linked deposits of more than one   
year. Pomelit may suit you if you need to save for a specific purpose at a          specific time in the future.​

​Petel (Raspberry): immediate deposits
 This plan allows you to invest in the short term while you decide on a long-       term investment, or to invest funds for a specific purpose. You can choose         to have the deposit plan renew automatically. 

A​farsemon (Persimmon): short-term deposits (3 months to 1 year) .

Kokus (Coconut): long-term deposits (5 years or more)
 ​You can earn money even when interest rates are negligible: the Kokus plan     guarantees a return of up to 1.75 times the amount you deposited. 


Graded deposits (interest rate that increases over time plus exit points) A medium to long-term investment where the interest is defined in advance, and you have the option of withdrawing funds along theway.  

): twin-track deposits (combines 2 types of index linkage in a single product) A medium-term deposit where you can combine several index linkage tracks in a single deposit plan, allowing you to spread your risk and exploit opportunities in diversified investment avenues at the same time

): monthly income deposiits
This plan could be for you if have a large sum in hand, and you want to enjoy

plan.`

export default Savings

