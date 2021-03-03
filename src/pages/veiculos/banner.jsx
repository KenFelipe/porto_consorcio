import React from 'react'

import BannerWrapper from '../../component/banner/banner'
import BannerHeader from '../../component/banner/header'
import BannerText from '../../component/banner/text'
import Button from '../../component/button/button'

const Banner = props => {
    const bgUrl = 'https://www.portoseguro.com.br/NovoInstitucional/static_files/images/capas/Header_Site_Consorcio_1920x505px_Auto-PortoSeguro.jpg'

    return (
        <BannerWrapper url={bgUrl}>
            <BannerHeader>Consórcio de Veículos</BannerHeader>
            <BannerText>Conquiste o seu carro 0Km ou seminovo de um jeito seguro e sem pagar juros.</BannerText>
            <Button color="green">SOLICITE UMA PROPOSTA</Button>
        </BannerWrapper>
    )
}

export default Banner