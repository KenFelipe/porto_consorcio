import React from 'react'
import styled from 'styled-components'

import Banner from './banner'
import Catching from '../../component/catching/catching'
import Titling from './titling'
import Prices from './prices'
import Benefit from './benefit'

import BreadCrumbs from '../../component/breadcrumbs/breadcrumbs'
import WhatsApp from '../../component/whatsapp/whatsapp'
import Modal from '../../component/modal/modal'
import Overlay from '../../component/modal/overlay'

// debug
import PopupButton from '../../component/modal/popupButton'

const Imoveis = props => (
    <ImoveisWrapper>
        <Title>Imoveis</Title>

        <Banner />
        <Catching />
        <Titling />
        <Prices />
        <Benefit />

        <Debug><PopupButton modal="lorem" color="white">Lorem Ipsum</PopupButton></Debug>
        <Modal id="lorem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et beatae voluptates culpa aliquid perspiciatis vero dignissimos adipisci quis labore officiis magni, animi voluptatibus quisquam molestiae mollitia cupiditate. Nisi, harum. Voluptatem?</Modal>
        <Overlay />

        <BreadCrumbs links={[
            { to: '/', label: 'Home' },
            { to: 'imoveis', label: 'Imoveis' },
            { to: 'veiculos', label: 'Veiculos' },
        ]}/>
        <WhatsApp />
    </ImoveisWrapper>
)

const Debug = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 80px;
    padding-bottom: 80px;
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