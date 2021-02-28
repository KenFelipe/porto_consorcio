import React from 'react'
import styled from 'styled-components'

import Banner from './banner'
import Catching from '../../component/catching/catching'
import Titling from './titling'
import Carousel from '../../component/carousel/carousel'

// debug
import Card from '../../component/card/card'
import CardHeader from '../../component/card/header'
import CardText from '../../component/card/text'

const Imoveis = props => (
    <div>
        <Title>Imoveis</Title>

        <Banner />
        <Catching />
        <Titling />
        <Carousel height="315px" delay="5000">
            <div>childern1</div>
            <div>childern2</div>
            <div>childern3</div>
        </Carousel>

        <Debug>
            <Card image="https://www.portoseguro.com.br/NovoInstitucional/static_files/images/thumbnail/consorcio-reforma-casa-de-praia.jpg">
                <CardHeader>Consórcio para Reforma da casa na praia no valor de R$55 mil: </CardHeader>
                <CardText>PARCELAS DE<p>R$349,00</p>NO PLANO DE 208 MESES</CardText>
            </Card>
        </Debug>
    </div>
)

const Debug = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 80px;
    padding-bottom: 80px;
    /* align-items: center; */
`

const Title = styled.h2`
    font-size: 3.2rem;
    margin: 0;
    padding: 10px 20px;
    background-color: plum;
`

export default Imoveis