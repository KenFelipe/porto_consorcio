import React from 'react'

import BannerWrapper from '../../component/banner/banner'
import BannerHeader from '../../component/banner/header'
import BannerText from '../../component/banner/text'
import BannerButton from '../../component/banner/button'
import BannerBackground from '../../component/banner/background'

const Banner = props => {
    const buttonColor = "Green"
    const bgUrl = 'https://www.portoseguro.com.br/NovoInstitucional/static_files/images/capas/Header_Site_Consorcio_1920x505px_Imovel-PortoSeguro.jpg'

    return (
        <BannerWrapper>
            <BannerHeader>Consórcio de Imóveis</BannerHeader>
            <BannerText>Com o consórcio imóvel você pode: comprar casa ou apartamento, construir, reformar ou comprar um terreno com parcelas acessíveis e sem juros.</BannerText>
            <BannerButton color={buttonColor}>SOLICITE UMA PROPOSTA</BannerButton>
            <BannerBackground url={bgUrl} />
        </BannerWrapper>
    )
}

export default Banner