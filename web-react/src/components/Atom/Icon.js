import React from 'react'
import styled from '@emotion/styled'
// from theme
import * as colors from '../../theme/colors'

const icons = [
    "fas fa-chart-pie", // 0 dashboard icon
    "fas fa-comment-alt", // 1 chat icon
    "fas fa-hands-helping", // 2 i want to icon
    "fas fa-question-circle", // 3 helper icon
    "fas fa-book-open", // 4
    "fas fa-plus-circle", // 5 plus icon
    "fas fa-search", // 6 search icon
    "fas fa-times-circle", // 7 close icon 
    "fas fa-magic", // 8 wand icon
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
    color: ${p => (p.selected && colors.secondaryLight) || (p.color || '#fb8c00')};
    cursor: pointer;
    text-align: start;
`

const Label = styled.span`
    font-size: 0.7em;
    margin-inline-start: 6px;
`