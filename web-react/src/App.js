import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import styled from '@emotion/styled'

// component
import Dashboard from './components/pages/dashboard/Dashboard'
import Chat from './components/pages/chat/Chat'
import Deals from './components/pages/deals/Deals'
import Helper from './components/pages/helper/Helper'
import Header from './components/Widgets/header/Header'
import Menu from './components/Widgets/menu/Menu'
import DictionaryResult from './components/Widgets/dictionary-helper/DictionaryResult'
import FloatingWidget from './components/Widgets/floating_widget/FloatingWidget';


class App extends Component {
    render() {
      	return (
			<BrowserRouter>
				<Container>
					<Header/>
					<MainScreen>
						<Menu/>
						<Route path='/dashboard' render={() => <Dashboard/>}/>
						<Route path='/chat' render={() => <Chat/>}/>
						<Route path='/deals' render={() => <Deals/>}/>
						<Route path='/helper' render={() => <Helper/>}/>
					</MainScreen>
					<FloatingWidget />
						
				</Container>
			</BrowserRouter>
      );
   	}
}

export default App

const Container = styled.div`
`

const MainScreen = styled.div`
`
// display: flex;