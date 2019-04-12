import React, { useState } from 'react'
import { Link } from "react-router-dom"
import styled from '@emotion/styled'
import * as colors from '../../../theme/colors'

// components
import Icon from '../../Atom/Icon'


const Menu = () => {
  const [selected, setSelected] = useState(0)
  return (
    <Container>
        <Link to='/dashboard'>
            <IconWrapper onClick={() => setSelected(0)}>
                <Icon index={0} size={24} 
                      color={colors.TextOnS} 
                      selected={selected === 0}
                      label='Dashboard' />
            </IconWrapper>
        </Link>
        <Link to='/chat'>
            <IconWrapper onClick={() => setSelected(1)}>
                <Icon index={1} size={24} 
                      color={colors.TextOnS} 
                      selected={selected === 1}
                      label='Chat'/>
            </IconWrapper>
        </Link>
        <Link to='/deals'>
            <IconWrapper onClick={() => setSelected(2)}>
                <Icon index={8} size={24} 
                      color={colors.TextOnS} 
                      selected={selected === 2}
                      label='I wanna...'/>
            </IconWrapper>
        </Link>
        <Link to='/helper'>
            <IconWrapper onClick={() => setSelected(3)}>
                <Icon index={3} size={24} 
                      color={colors.TextOnS} 
                      selected={selected === 3}
                      label='Helper'/>
            </IconWrapper>
        </Link>

        <Link to='/dream-list'>
            <IconWrapper onClick={() => setSelected(9)}>
                <Icon index={9} size={24} 
                      color={colors.TextOnS} 
                      selected={selected === 9}
                      label='Dream List'/>
            </IconWrapper>
        </Link>
    </Container>
  )
}

export default Menu


const Container = styled.div`
    position: fixed;
    background: ${colors.primary};
    color: ${colors.TextOnP};
    height: 100vh;
    top: 0;
    width: 170px;
    padding-top: 70px;
    box-shadow: 0px 0px 8px rgba(0,0,0,.6);
`

const IconWrapper = styled.div`
    padding: 12px 6px 6px 12px;
    &:hover {
        background: ${colors.primaryDark};
    }
`