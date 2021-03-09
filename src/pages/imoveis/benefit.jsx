import React, { Fragment } from 'react'
import styled from 'styled-components'

import BenefitCard from '../../component/benefit/benefitCard'
import BenefitCarousel from '../../component/benefit/benefitCarousel'
import Modal from '../../component/modal/modal'

const Benefit = props => (
    <Fragment>
        <BenefitCarouselWrapper
            carouselId="benefit-carousel"
            setting={{
                autoplay: false,
            }}
        >
            {/* <BenefitCard modal="benefittest" islink>
                Opções de planos com parcelas reduzidas até a contemplação.
            </BenefitCard> */}
            {regCards(5)}
        </BenefitCarouselWrapper>

        {/* popup respectivo precesia estar fora do carrocel
        position: fixed nao functiona de forma correto se 
        tiver css 'transform: ... ' no elemento parente */}
        <ModalWrapper>
            <ModalA id="benefittest">BENEFIT</ModalA>
        </ModalWrapper>
    </Fragment>
)

const BenefitCarouselWrapper = styled(BenefitCarousel)`
    margin-top: 100px;
`

const ModalA = styled(Modal)`
    background-color: pink;
`

const ModalWrapper = styled.div``


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