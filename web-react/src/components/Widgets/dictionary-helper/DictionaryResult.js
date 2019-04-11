import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux'
import SearchInput from '../../Atom/SearchInput'


const Row = ({ title, description }) => (
  <div>
    <Title>
      <h4>{title || 'mortgage'}</h4>
    </Title>
    <Description>
      {description || 'is a loan like any other loan but is specific to the purchase of a house'}
    </Description>
  </div>
)

const DictionaryResult = ({ dictionary }) => {

  const [filterd, setFilterd] = useState([])
    const handleChange = (value) => {
      const data = dictionary.filter(dict => dict.title.includes(value))
      setFilterd(data)
    }

    useEffect(() => {
      handleChange('')
    })

    return (
      <Container>
        <IconContainer>
          <Half><I className="fas fa-book-open"></I></Half>
          {/* <Half><I className="fas fa-book-reader"></I></Half> */}
        </IconContainer>
        <Span>Dictionary</Span>

        <Results>

        {
          filterd.map(r => <Row title={r.title} description={r.description}/>)
        }
        </Results>

        <SearchInput width={'100%'} onChange={handleChange}/>
      </Container>
    )
}

const mapStateToProps = (state) => ({
  dictionary: state.helper.data
})

export default connect(mapStateToProps, null)(DictionaryResult)

const Container = styled.div`
    width: 320px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 2px 10px 40px rgba(22, 20, 19, 0.4);
    background: #fff;
`

const Results = styled.div`
height: 300px;
overflow: hidden;
overflow-y: scroll;
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

