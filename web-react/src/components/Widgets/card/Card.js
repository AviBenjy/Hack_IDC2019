import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectOffer } from '../../../redux/actions/dealsActions'
import styled from '@emotion/styled'
import * as colors from '../../../theme/colors'

const Card = ({ title, image, setSelectOffer}) => {
    return (
      <Container onClick={() => setSelectOffer(title)}>
        <IconWrapper>
          <Image src={image}/>
        </IconWrapper>
        <Title>{title}</Title>
      </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 200px;
  height: 200px;
  border-radius: 4px;
  cursor: pointer;
  color: ${colors.TextOnLight};
  padding: 15px;
  text-align: center;
  margin: 15px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1 1;
`

const Image = styled.img`
  width: 50%
`

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 500;
  color: linear-gradient(to right,#ff8a00,#da1b60);
`

const mapStateToProps = (state) => {
  return {
    selectedCard: state.deals.selectedOffer
  }
}

export default connect(
  mapStateToProps,
  { setSelectOffer }
)(Card)