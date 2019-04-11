import React from 'react'
import styled from '@emotion/styled'
import { Route, Link, Switch } from 'react-router-dom'

import Loans from '../../pages/content/Loans'
import Mortgages from '../../pages/content/Mortgages'
import Savings from '../../pages/content/Savings'

import * as colors from '../../../theme/colors'

const Helper = () => {
  return (
    <Container>
      <Navbar>
        <Tab>
          <Link to="/helper/mortgages" style={navLinkStyle}>Mortgages</Link>
        </Tab>
        <Tab>
          <Link to="/helper/loans" style={navLinkStyle}>Loans</Link>
        </Tab>
        <Tab>
          <Link to="/helper/savings" style={navLinkStyle}>Savings</Link>
        </Tab>
      </Navbar>
      <Switch>
        <Route exact path="/helper" component={Mortgages}/>
        <Route path="/helper/mortgages" component={Mortgages}/>
        <Route path="/helper/loans" component={Loans}/>
        <Route path="/helper/savings" component={Savings}/>
      </Switch>
    </Container>
  )
}

export default Helper

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  color: ${colors.TextOnLight};
  background-color: ${colors.primaryDark}
`

const Tab = styled.div`
  padding: 16px;
  &:hover {
    background-color: ${colors.primary};
  }
`

const Container = styled.div`
  margin: 56px 0 0 170px;
  height: 100vh;
  // background: green;
`

const navLinkStyle = {
  color: `${colors.TextOnLight}`
}