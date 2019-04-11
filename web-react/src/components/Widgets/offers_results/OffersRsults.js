import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import OfferCard from '../offer_card/OfferCard'

const category = {
    'redo my kitchen': ['Up to 75,000 NIS for a period of up to 60 months, directly to your account within one business day, without guarantors and without leaving home. We offer our customers an immediate loan on convenient terms for renovation, vacation or any other purpose. Enjoy and return at your own pace.'],
    'buy a new home': ["Do you need a mortgage? We invite you to apply for a mortgage and determine communication with your personal, banking life. Tefahot's leading mortgage experts will give you quick approval in principle to the amount you need and an estimate of the financing you can get to purchase the apartment you've always dreamed of."],
    'go on holiday': ["Need a mortgage? We invite you to apply for a mortgage and determine communication with your personal, banking life. Tefahot's experts, leading mortgages, will give you quick approval in principle to the amount you need and an estimate of the financing you can get to purchase the apartment you have always dreamed of."],
    'dream big': [`We offer you, Rachel, a mortgage in a winning team - Loan period: 4-30 years. Linkage: a combination of CPI-linked, unlinked (on a prime-rate basis) and foreign currency linked (USD / EUR) tracks.`],
    'make my money grow': [`Interest: a combination of fixed and / or variable interest tracks, tracks on the basis of prime interest and on the basis of the Libor rate, subject to the type of linkage.`],
    'go to university': [`Determining attachment with Yossi, your personal banker. Choose the day and time and the best way for you to make a commitment to Yossi.`],
}

const OffersResults = ({ selectedOffer }) => {
  return (
    <Container>
      {category[selectedOffer].map(offer => <OfferCard key={offer} offer={offer}/>)}
    </Container>
  )
}

const mapStateToProps = (state) => ({
    selectedOffer: state.deals.selectedOffer
})

export default connect(mapStateToProps, null)(OffersResults)


const Container = styled.div`

`