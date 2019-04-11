import React from 'react'
import styled from '@emotion/styled'
import ChartInfo from '../../Widgets/chart';
import StatusAccount from '../../Widgets/status_account/StatusAccount';
import FloatingBtn from '../../Atom/FloatingBtn';
import SearchInput from '../../Atom/SearchInput';


const Dashboard = () => {

  return (
    <Container>
      <ChartInfoBasic>
        <ChartInfo />
        <Spacer/>
        <StatusAccount/>
      </ChartInfoBasic>
    </Container>
  )
}

export default Dashboard

const Container = styled.div`
    margin: 56px 0 0 170px;
    height: 100vh;
  `
    
const ChartInfoBasic = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`
const Spacer = styled.div`
  width: 20px;
`