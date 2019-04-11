import React from 'react'
import styled from '@emotion/styled'
import ChartInfo from '../../Widgets/chart';
import StatusAccount from '../../Widgets/status_account/StatusAccount';


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
    border: 1px solid black;
`
const Spacer = styled.div`
  width: 20px;
`