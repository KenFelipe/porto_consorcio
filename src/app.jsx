import React from 'react'
import styled from 'styled-components'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './app.scss'

// component
import Navbar from './component/navbar/Navbar'

// pages
import Home from './pages/home/home'
import Imoveis from './pages/imoveis/imoveis'
import Veiculos from './pages/veiculos/veiculos'

const App = props => (
    <Wrapper>
        <Title>Porto Consorcio</Title>
        <HashRouter hashType="noslash">
            <Navbar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/imoveis" component={Imoveis} />
                <Route path="/veiculos" component={Veiculos} />
                <Route path="/*" component={Home} />
            </Switch>
        </HashRouter>
    </Wrapper>
)

const Wrapper = styled.div`
    font-size: 2.2rem;
    background-color: skyblue;
`

const Title = styled.h1`
    padding: 12px;
    font-size: 3.6rem;
    background-color: royalblue;
`

export default App