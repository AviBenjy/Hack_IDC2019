import React from 'react'
import styled from '@emotion/styled'

// components
import Icon from '../Atom/Icon'

const FloatingBtn = ({ onClick , iconIndex, size, color }) => {
  
    const handleClick = () => {
        if (onClick) onClick()
    }
    
    return (
        <Container onClick={handleClick}>
            <Icon index={iconIndex || 4} size={size || 40} color={color || '#ffbd45'}/>
        </Container>
    )
}

export default FloatingBtn


const Container = styled.div`
    display: inline-block;
`