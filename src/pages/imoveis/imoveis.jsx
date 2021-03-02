import React from 'react'
import styled from 'styled-components'

import Banner from './banner'
import Catching from '../../component/catching/catching'
import Titling from './titling'
import Carousel from '../../component/carousel/carousel'
import BreadCrumbs from '../../component/breadcrumbs/breadcrumbs'
import WhatsApp from '../../component/whatsapp/whatsapp'
import Modal from '../../component/modal/modal'
import Overlay from '../../component/modal/overlay'

// debug
import Card from '../../component/card/card'
import CardHeader from '../../component/card/header'
import CardText from '../../component/card/text'

import PopupButton from '../../component/modal/popupButton'

const Imoveis = props => (
    <ImoveisWrapper>
        <Title>Imoveis</Title>

        <Banner />
        <Catching />
        <Titling />
        <Carousel height="315px" delay="5000"></Carousel>

        <Debug>
            <Card image="https://www.portoseguro.com.br/NovoInstitucional/static_files/images/thumbnail/consorcio-reforma-casa-de-praia.jpg">
                <CardHeader>Consórcio para Reforma da casa na praia no valor de R$55 mil: </CardHeader>
                <CardText>PARCELAS DE<p>R$349,00</p>NO PLANO DE 208 MESES</CardText>
            </Card>
        </Debug>

        <Debug><PopupButton modal="lorem" color="White">Lorem Ipsum</PopupButton></Debug>
        <Modal id="lorem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et beatae voluptates culpa aliquid perspiciatis vero dignissimos adipisci quis labore officiis magni, animi voluptatibus quisquam molestiae mollitia cupiditate. Nisi, harum. Voluptatem?</Modal>
        <Overlay />
        <Debug> <PopupButton modal="test2" color="White">TEST</PopupButton> </Debug>
        <Modal id="test2">TEST</Modal>

        <BreadCrumbs />
        <WhatsApp />
    </ImoveisWrapper>
)

const Debug = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 80px;
    padding-bottom: 80px;
    /* align-items: center; */
`

const ImoveisWrapper = styled.div`
    padding-bottom: 80px;
`

const Title = styled.h2`
    font-size: 3.2rem;
    margin: 0;
    padding: 10px 20px;
    background-color: plum;
`

export default Imoveis