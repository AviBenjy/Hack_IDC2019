import React, { useState } from 'react'
import { connect } from 'react-redux'

import styled from '@emotion/styled'
import DictionaryResult from '../dictionary-helper/DictionaryResult'
import FloatingBtn from '../../Atom/FloatingBtn'
import * as colors from '../../../theme/colors'

// actions 
import { toggleDictionary } from '../../../redux/actions/helperActions'


const FloatingWidget = (props) => {

  const handleClickFloatingBtn = () => {
      props.toggleDictionary(!props.showDictionary)
  } 



  const iconIndex = props.showDictionary ? 7 : 3
  return (
    <Container>
        {
            props.showDictionary ? <DictionaryResult /> : null
        }
      
      <BtnWrapper>
        <FloatingBtn onClick={handleClickFloatingBtn} iconIndex={iconIndex} color={colors.secondary}/>
      </BtnWrapper>
    </Container>
  )
}

const mapStateToProps = (state) => ({
    showDictionary: state.helper.showDictionary
})

const mapDispatchToProps = {
    toggleDictionary
}

export default connect(mapStateToProps, mapDispatchToProps)(FloatingWidget)


const Container = styled.div`
    right: 12px;
    bottom: 0;
    z-index: 12;
    position: fixed;
    padding: 0 12px 0px 0;

`
    
const BtnWrapper = styled.div`
    text-align: right;
    padding: 0 0px 12px 0;
`