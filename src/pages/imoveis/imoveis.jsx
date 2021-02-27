import React from 'react'
import styled from 'styled-components'

import Banner from './banner'
import Catching from '../../component/catching/catching'
import Titling from './titling'
import Carousel from '../../component/carousel/carousel'

const Imoveis = props => (
    <div>
        <Title>Imoveis</Title>

        <Banner />
        <Catching />
        <Titling />
        <Carousel>
            <div>childern1</div>
            <div>childern2</div>
            <div>childern3</div>
        </Carousel>
    </div>
)

const Title = styled.h2`
    font-size: 3.2rem;
    margin: 0;
    padding: 10px 20px;
    background-color: plum;
`

export default Imoveis