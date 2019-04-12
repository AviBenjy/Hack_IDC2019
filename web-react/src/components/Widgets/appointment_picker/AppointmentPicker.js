import React, {useState} from 'react'
import styled from '@emotion/styled'
import * as colors from '../../../theme/colors'
// import DatePicker from "react-datepicker" 
import './style_date.css'



const AppointmentPicker = () => {
    const [selected, setSelected] = useState('4')
    const handleSelectedIcon = (e) => {
        setSelected(e.target.name)
    }
  return (
    <Container>
        {/* <DatePicker /> */}
        <DatePicker>
            <h5>Date: </h5>
            <input type="date" />
        </DatePicker>
        <DatePicker>
            <h5>Time: </h5>
            <input type="time" defaultValue="12:30"/>
        </DatePicker>
        <IconPanel>
            <i name="1" onClick={handleSelectedIcon} className={selected === "1" ? "selected-btn fas fa-comments-dollar" : "fas fa-comments-dollar"}></i>
            <i name="2" onClick={handleSelectedIcon} className={selected === "2" ? "selected-btn fas fa-video" : "fas fa-video"}></i>
            <i name="3" onClick={handleSelectedIcon} className={selected === "3" ? "selected-btn fas fa-phone" : "fas fa-phone"}></i>
            <i name="4" onClick={handleSelectedIcon} className={selected === "4" ? "selected-btn fas fa-user-friends" : "fas fa-user-friends"}></i>
        </IconPanel>

        <Btn color={'#e43803'}>Cancel</Btn>
        <Btn>Confirm</Btn>
    </Container>
  )
}

export default AppointmentPicker


const Container = styled.div`
    background: #fff;
    height: 300px;
    width: 230px;
    padding: 6px;
`

const DatePicker = styled.div`
    padding: 20px 20px 0 20px;
    color: rgb(105, 105, 106);
    display: flex;
    justify-content: space-between;
`

const IconPanel = styled.div`
    margin-top: 20px;
    padding: 24px 0 20px 0;
    display: flex;
    color: #29434e;
    justify-content: space-around;
`

// background: ${colors.primary || '#1AAB8A'};
const Btn = styled.button`
    margin-top: 50px;
    margin-left: 12px;
    background: ${p => p.color || '#1AAB8A'};
    color:#fff;
    border:none;
    border-radius: 6px;
    position:relative;
    height:40px;
    font-size:0.8em;
    font-weight: bold;
    padding:0 1em;
    cursor:pointer;
    transition: 800ms ease all;
    outline:none;

  &:hover{
    background:#fff;
    color: ${ p => p.color || colors.secondary};
  }
  &:before, &:after{
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:0;
    background: ${p => p.color || colors.secondary};
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

// position: absolute;
// border: 1px solid black;
// width: 400px;
// height: 300px;
// bottom: -299px;
// left: -209px;