import React from 'react'
import styled from '@emotion/styled'

const m = 'הלוואה ברגע עד 75,000 ₪ לתקופה של עד 60 חודשים, ישירות לחשבונך תוך יום עסקים אחד, ללא ערבים ובלי לצאת מהבית. אנו מציעים ללקוחותינו הלוואה מידית בתנאים נוחים לשיפוץ, חופשה או לכל מטרה אחרת. ליהנות ולהחזיר בקצב שלך.'

const OfferCard = ({offer}) => {
  return (
    <Container>
      {offer || m}
    </Container>
  )
}

export default OfferCard


const Container = styled.div`
background-image: linear-gradient(to right,#ff8a00,#da1b60);
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
margin: 8px;
transition: 0.3s;
padding: 16px 16px;
line-height: 32px;
border-radius: 4px;
color: #fff;
font-size: 20px;
font-weight: 600;
&:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`