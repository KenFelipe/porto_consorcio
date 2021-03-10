import React from 'react'
import styled from 'styled-components'

import BenefitCard from '../../component/benefit/benefitCard'
import BenefitCarousel from '../../component/benefit/benefitCarousel'
import BenefitTitle from '../../component/benefit/benefitTitle'
import Modal from '../../component/modal/modal'

const Benefit = props => (
    <Wrapper>
        <BenefitTitle>
            VANTAGENS DO PORTO SEGURO CONSÓRCIO DE IMÓVEL
        </BenefitTitle>
        <BenefitCarousel
            carouselId="benefit-carousel"
            setting={{
                autoplay: false,
            }}
        >
            {/* <BenefitCard modal="benefittest" islink>Opções de planos com parcelas reduzidas até a contemplação.</BenefitCard> */}

            {regCards(5)}
        </BenefitCarousel>

        {/* popup respectivo precesia estar fora do carrocel
        position: fixed nao functiona de forma correto se 
        tiver css 'transform: ... ' no elemento parente */}
        <ModalWrapper>
            <ModalA id="benefittest">BENEFIT</ModalA>
        </ModalWrapper>
    </Wrapper>
)

const Wrapper = styled.div`
    margin-bottom: 30px;
    padding-bottom: 45px; /* debug */
`
const ModalWrapper = styled.div``

const ModalA = styled(Modal)`
    background-color: pink;
`

const regCards = times => {
    const benefitCard = Array(times).fill(0).map((_, i) => (
        <BenefitCard 
            key={`benefit${i}`}
            modal="benefittest" 
            islink
        >
            Opções de planos com parcelas reduzidas até a contemplação.
        </BenefitCard>
    ))
    return benefitCard
}

export default Benefit