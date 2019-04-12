import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import OfferCard from '../offer_card/OfferCard'
import BankerCall from '../banker_call/BankerCall'

// const category = {
//     'redo my kitchen': ['Up to 75,000 NIS for a period of up to 60 months, directly to your account within one business day, without guarantors and without leaving home. We offer our customers an immediate loan on convenient terms for renovation, vacation or any other purpose. Enjoy and return at your own pace.',
//     "We invite you to apply for a mortgage and determine communication with your personal, banking life. Tefahot's experts, leading mortgages, will give you quick approval in principle to the amount you need and an estimate of the financing you can get to purchase the apartment you have always dreamed of."],
//     'buy a new home': ["Do you need a mortgage? We invite you to apply for a mortgage and determine communication with your personal, banking life. Tefahot's leading mortgage experts will give you quick approval in principle to the amount you need and an estimate of the financing you can get to purchase the apartment you've always dreamed of.",
//     "Need a mortgage? We invite you to apply for a mortgage and determine communication with your personal, banking life. Tefahot's experts, leading mortgages, will give you quick approval in principle to the amount you need and an estimate of the financing you can get to purchase the apartment you have always dreamed of."],
//     'go on holiday': ["We invite you to apply for a mortgage and determine communication with your personal, banking life. Tefahot's experts, leading mortgages, will give you quick approval in principle to the amount you need and an estimate of the financing you can get to purchase the apartment you have always dreamed of."],
//     'dream big': [`We offer you, Rachel, a mortgage in a winning team - Loan period: 4-30 years. Linkage: a combination of CPI-linked, unlinked (on a prime-rate basis) and foreign currency linked (USD / EUR) tracks.`, 
//     "We invite you to apply for a mortgage and determine communication with your personal, banking life. Tefahot's experts, leading mortgages, will give you quick approval in principle to the amount you need and an estimate of the financing you can get to purchase the apartment you have always dreamed of."],
//     'make my money grow': [`Interest: a combination of fixed and / or variable interest tracks, tracks on the basis of prime interest and on the basis of the Libor rate, subject to the type of linkage.`],
//     'go to university': [`Determining attachment with Yossi, your personal banker. Choose the day and time and the best way for you to make a commitment to Yossi.`, 
//     "Need a mortgage? We invite you to apply for a mortgage and determine communication with your personal, banking life. Tefahot's experts, leading mortgages, will give you quick approval in principle to the amount you need and an estimate of the financing you can get to purchase the apartment you have always dreamed of."],
// }

const category = {
  'redo my kitchen': [
    {
      title: 'How about a loan?',
      description: `Up to 75,000 NIS for a period of up to 60 months, directly to your account within one business day, without guarantors and without leaving home. We offer our customers an immediate.`
    },
    {
      title: 'Maybe this loan is for you?',
      description: `We offer you, Rachel, a mortgage in a winning team - Loan period: 4-30 years. Linkage: a combination of CPI-linked and foreign currency linked (USD / EUR) tracks.`
    }
  ],
  'buy a new home': [{
    title: 'Maybe a mortgage?',
    description: `We invite you to apply for a mortgage and determine communication with your personal.`
  },{
    title: 'Maybe this path is right for you...',
    description: `We offer you, Rachel, a mortgage in a winning team - Loan period: 4-30 years. Linkage: a combination of CPI-linked and foreign currency linked (USD / EUR) tracks.`
  }],
  'go on holiday': [{
    title: 'Maybe a mortgage?',
    description: `We invite you to apply for a mortgage and determine communication with your personal, banking life. Tefahot's experts, leading mortgages, will give you quick approval in principle to the amount you need and an estimate.`
  },{
    title: 'How about a loan?',
    description: `We offer you, Rachel, a mortgage in a winning team - Loan period: 4-30 years. Linkage: a combination of CPI-linked, unlinked (on a prime-rate basis) and foreign currency linked (USD / EUR) tracks.`
  }],
  'dream big': [{
    title: 'How about a loan?',
    description: `We offer you, Rachel, a mortgage in a winning team - Loan period: 4-30 years. Linkage: a combination of CPI-linked, unlinked (on a prime-rate basis) and foreign currency linked (USD / EUR) tracks.`
  },{
    title: 'How about a loan?',
    description: `We offer you, Rachel, a mortgage in a winning team - Loan period: 4-30 years. Linkage: a combination of CPI-linked, unlinked (on a prime-rate basis) and foreign currency linked (USD / EUR) tracks.`
  }], 
  'make my money grow': [{
    title: 'Invest a little, and get a lot',
    description: `Interest: a combination of fixed and / or variable interest tracks, tracks on the basis of prime interest and on the basis of the Libor rate, subject to the type of linkage.`
  },{
    title: 'Invest a little, and get a lot',
    description: `Interest: a combination of fixed and / or variable interest tracks, tracks on the basis of prime interest and on the basis of the Libor rate, subject to the type of linkage.`
  }],
  'go to university': [{
    title: 'Need a student loan?',
    description: `Up to 75,000 NIS for a period of up to 60 months, directly to your account within one business day, without guarantors and without leaving home. We offer our customers.`
  },{
    title: 'Need a student loan?',
    description: `Up to 75,000 NIS for a period of up to 60 months, directly to your account within one business day, without guarantors and without leaving home. We offer our customers.`
  }] 
}

const OffersResults = ({ selectedOffer }) => {
    console.log('selectedOffer', selectedOffer)
  return (
      <div>
          {
            category[selectedOffer] && 
              <Container>
                 <Title>Maybe these might interest you?...</Title>
                <WrapperResult>
                    {category[selectedOffer].map(offer => {
                         return (
                             <FlexItem>
                                 <OfferCard key={offer.title} offer={offer}/>
                             </FlexItem>
                         )
        })}
        <FlexItem>
            <BankerCall/>
        </FlexItem>
      </WrapperResult>
    </Container>
    }
        </div>
  )
}

const mapStateToProps = (state) => ({
    selectedOffer: state.deals.selectedOffer
})

export default connect(mapStateToProps, null)(OffersResults)


const Container = styled.div`
    padding-top: 50px;
    margin-bottom: 90px;
    `
    // background: #e91e63;

const Title = styled.h1`
    margin: 24px;
    color: rgb(105, 105, 106);
`

const WrapperResult = styled.div`
    display: flex;
`

const FlexItem = styled.div`
`
// border: 1px solid black;
// flex-grow: 1;
// flex-basis: 0;