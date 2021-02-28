import React from 'react'
import styled from 'styled-components'

import Button from '../../component/button/button'

const Home = props => (
    <StyledHome>
        <Title>Home</Title>
        <Button>Button</Button>
    </StyledHome>
)

const StyledHome = styled.div`
    padding: 0 20px;
`

const Title = styled.h2`
    font-size: 3.2rem;
    margin: 0;
    padding: 10px 20px;
    background-color: plum;
`

export default Home