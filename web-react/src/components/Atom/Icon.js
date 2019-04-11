import React from 'react'
import styled from '@emotion/styled'
// from theme
import * as colors from '../../theme/colors'

const icons = [
    "fas fa-chart-pie", // dashboard icon
    "fas fa-comment-alt", // chat icon
    "fas fa-hands-helping", // deals icon
    "fas fa-question-circle", // helper icon
    "fas fa-book-open"
]

const Icon = ({index, size, color, label, selected}) => (
    <Container size={size} color={color} selected={selected}>
        <i className={icons[index] || icons[0]}></i>
        <Label>{label}</Label>
    </Container>
)


export default Icon

const Container = styled.div`
    font-size: ${p => p.size || 16}px; 
    color: ${p => (p.selected && colors.secondaryLight) || (p.color || '#fff')};
    cursor: pointer;
    text-align: start;
`

const Label = styled.span`
    font-size: 0.7em;
    margin-inline-start: 6px;
`