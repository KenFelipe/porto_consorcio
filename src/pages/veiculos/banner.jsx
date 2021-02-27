import React from 'react'

import BannerWrapper from '../../component/banner/banner'
import BannerHeader from '../../component/banner/header'
import BannerText from '../../component/banner/text'
import BannerButton from '../../component/banner/button'
import BannerBackground from '../../component/banner/background'

const Banner = props => {
    const buttonColor = "Green"
    const bgUrl = 'https://www.portoseguro.com.br/NovoInstitucional/static_files/images/capas/Header_Site_Consorcio_1920x505px_Auto-PortoSeguro.jpg'

    return (
        <BannerWrapper>
            <BannerHeader>Consórcio de Veículos</BannerHeader>
            <BannerText>Conquiste o seu carro 0Km ou seminovo de um jeito seguro e sem pagar juros.</BannerText>
            <BannerButton color={buttonColor}>SOLICITE UMA PROPOSTA</BannerButton>
            <BannerBackground url={bgUrl} />
        </BannerWrapper>
    )
}

export default Banner