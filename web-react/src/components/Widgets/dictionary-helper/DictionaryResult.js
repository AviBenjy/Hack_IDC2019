import React from 'react';
import styled from '@emotion/styled';

const DictionaryResult = ({ title, description }) => {

    return (
      <Container>
        <IconContainer>
          <Half><I className="fas fa-book-open"></I></Half>
        </IconContainer>
        <Span>Dictionary</Span>
        <Title>
          <h4>{title || 'mortgage'}</h4>
        </Title>
        <Description>
          {description || 'is a loan like any other loan but is specific to the purchase of a house'}
        </Description>
      </Container>
    )
}

export default DictionaryResult;

const Container = styled.div`
    width: 320px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 2px 10px 40px rgba(22, 20, 19, 0.4);
    margin: 138px 0 0 216px;
`
const Span = styled.span`
    display: block;
    border-bottom: 1px solid #e2dfdf;
`
const Title = styled.div`
    padding: 5px 0 5px 0;
    text-align: center;
`
const Description = styled.div`
    padding: 5px;
`
const IconContainer = styled.div`
    position: relative;
    top: -56px;
    left: 101px;
    height: 10px;
`
const I = styled.i`
    border-radius: 50%;
    padding: 15px;
    font-size: 45px;
    background: #fff;
`
const Half = styled.div`
    box-shadow: 1px 4px 20px rgba(22, 20, 19, 0.6);
    width: 80px;
    height: 40px;
    background-color: #fff;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    border-bottom: 0;
`

