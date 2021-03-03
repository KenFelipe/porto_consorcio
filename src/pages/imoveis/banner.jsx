import React from 'react'

import BannerWrapper from '../../component/banner/banner'
import BannerHeader from '../../component/banner/header'
import BannerText from '../../component/banner/text'
// import { BannerWrapper, BannerHeader, BannerText } from '../../component/banner'

import Button from '../../component/button/button'

const Banner = props => {
    const bgUrl = 'https://www.portoseguro.com.br/NovoInstitucional/static_files/images/capas/Header_Site_Consorcio_1920x505px_Imovel-PortoSeguro.jpg'

    return (
        <BannerWrapper url={bgUrl}>
            <BannerHeader>Consórcio de Imóveis</BannerHeader>
            <BannerText>Com o consórcio imóvel você pode: comprar casa ou apartamento, construir, reformar ou comprar um terreno com parcelas acessíveis e sem juros.</BannerText>
            <Button color="green">SOLICITE UMA PROPOSTA</Button>
        </BannerWrapper>
    )
}

export default Banner