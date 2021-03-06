import React from 'react'
import styled from 'styled-components'

import PricesCarousel from '../../component/pricesCarousel/pricesCarousel'
import Card from '../../component/card/card'
import CardHeader from '../../component/card/header'
import CardText from '../../component/card/text'

const Prices = props => (
    <PricesCarousel 
        id="imoveis-prices"
        setting={{
            autoplay: false,
        }}
    >
        {regCards(4)}
    </PricesCarousel>
)

const regCards = times => {
    const pricesCards = Array(times).fill(0).map((_, i) => (
        <Card key={`ex${i + 1}`} 
            image="https://www.portoseguro.com.br/NovoInstitucional/static_files/images/thumbnail/consorcio-reforma-casa-de-praia.jpg"
        >
            <CardHeader>Consórcio para Reforma da casa na praia no valor de R${(i + 1) * 10} mil: </CardHeader>
            <CardText>PARCELAS DE<p>R${(i + 1) * 100},00</p>NO PLANO DE 208 MESES</CardText>
        </Card>
    ))
    return pricesCards
}

export default Prices