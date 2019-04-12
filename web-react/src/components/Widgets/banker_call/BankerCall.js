import React, {useState} from 'react'
import styled from '@emotion/styled'
import * as colors from '../../../theme/colors'
import AppointmentPicker from '../appointment_picker/AppointmentPicker';

import "react-datepicker/dist/react-datepicker.css"


const BankerCall = () => {
    const [showBanker, setShowBanker] = useState(false)
    const handleClick = () => {
        setShowBanker(true)
    }
  return (
    <Container>
        <Card>
            <Header>
                <Img src="http://tandur.in/uploads/list_items/contact/2017-05-19-02-35-40-people19.png"/>
                <Title>
                </Title>
                <Btn onClick={handleClick}>Consult Yossi</Btn>
            </Header>
            {
                showBanker &&
            <WrapperDate>
                <AppointmentPicker/>
            </WrapperDate>}
        </Card>
    </Container>
  )
}

export default BankerCall


// background-image: linear-gradient(to right,#ff8a00,#da1b60);
const Container = styled.div`
`

const Card = styled.div`
    position: relative;
    height: 300px;
    width: 190px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin: 8px;
    transition: 0.3s;
    padding: 16px 16px;
    line-height: 32px;
    border-radius: 4px;
    color: ${colors.secondary || '#fff'};
    font-size: 20px;
    font-weight: 600;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
`
// background: ${colors.primaryDark};
const Header = styled.div`
    text-align: center;
    padding-top: 14px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;

`

const Img = styled.img`
    margin-top: 12px;
    border-radius: 50%;
    border: 2px solid ${colors.secondaryDark};
    width: 100px;
    height: 100px;
    padding: 4px;
    `

const Btn = styled.button`
    margin-top: 50px;
    background: ${colors.primary || '#1AAB8A'};
    color:#fff;
    border:none;
    border-radius: 6px;
    position:relative;
    height:50px;
    font-size:0.8em;
    font-weight: bold;
    padding:0 1em;
    cursor:pointer;
    transition: 800ms ease all;
    outline:none;

  &:hover{
    background:#fff;
    color: ${colors.secondary};
  }
  &:before, &:after{
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:0;
    background: ${colors.secondary};
    transition:400ms ease all;
  }
  &:after{
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
  }
  &:hover:before,&:hover:after{
    width:100%;
    transition:800ms ease all;
  }
`

const WrapperDate = styled.div`
    position: absolute;
    bottom: -10px;
    left: -244px;
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin: 8px;
    transition: 0.3s;
    line-height: 32px;
    border-radius: 4px;
    color: ${colors.secondary || '#fff'};
    font-size: 20px;
    font-weight: 600;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`
// width: 400px;
// height: 300px;