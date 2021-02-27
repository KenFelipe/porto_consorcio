import React from 'react'
import styled, { css } from 'styled-components'

import ContainerStyle from '../container/containerStyle'
import Button from '../button/button'

const Banner = props => (
    <BannerWrapper>
        <BannerHeader>Consórcio de Veículos Pesados e Máquinas Agrícolas</BannerHeader>
        <BannerContent>Vem fazer acontecer de forma programada a sua frota de caminhões, ônibus, tratores, máquinas e implementos agrícolas e rodoviários.</BannerContent>
        <ButtonStyled color="Blue">SOLICITE UMA PROPOSTA</ButtonStyled>
        <BannerImage />
    </BannerWrapper>
)

const BannerWrapper = styled.div`
    ${ContainerStyle};
    position: relative;
    height: 340px;
    background-color: #555861;
    color: #fff;
    padding: 64px 0;
`

const BannerImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('https://www.portoseguro.com.br/NovoInstitucional/static_files/images/capas/Desktop/porto-seguro-consorcio-pesado-bg-header-1920x505.jpg');
    background-position: top center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    opacity: 0.3;
`

const ContentStyle = css`
    margin: 0 auto;
    max-width: 590px;
    text-align: center;
    position: relative;
    z-index: 1;
`

const BannerHeader = styled.div`
    ${ContentStyle};
    font-size: 3.4rem;
    letter-spacing: .5px;
    line-height: 4.4rem;
    padding-bottom: 18px;
`

const BannerContent = styled.div`
    ${ContentStyle};
    font-size: 1.8rem;
    line-height: 2.8rem;
    padding-bottom: 30px;
`

const ButtonStyled = styled(Button)`
    ${ContentStyle};
    display: block;
`

export default Banner