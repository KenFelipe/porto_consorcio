import React, { useEffect } from 'react'
import styled from 'styled-components'

import Container from '../container/container'
import './carousel.scss'

import Card from '../../component/card/card';import CardHeader from '../../component/card/header';import CardText from '../../component/card/text';

const Carousel = props => {
    useEffect(() => {
        const sliders = document.getElementsByClassName('swiper-wrapper').item(0)
        console.log(sliders)
        for(let i = 0; i < sliders.childElementCount; i++) {
            sliders.childNodes.item(i).className += ' swiper-slide'
        }
        const swiper = new Swiper('.swiper-container', swiperConfig); 
    }, [])

    const swiperConfig = {
        // Optional parameters
        direction: 'horizontal',
        // loop: false,
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        grabCursor: true,
        autoplay: {
            delay: props.delay || 2000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: props.breakpoints || {
            490: { slidesPerView: 2, spaceBetween: 20, },
            720: { slidesPerView: 3, spaceBetween: 20, },
        },
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // }
    }

    return (
        <CarouselWrapper height={props.height || '300px'}>
            {/* Slider main container */}
            <div className="swiper-container">
                {/* Additional required wrapper */}
                <div className="swiper-wrapper">
                    {/* Slides */}
                    {/* <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div> */}
            <Card className="swiper-slide" image="https://www.portoseguro.com.br/NovoInstitucional/static_files/images/thumbnail/consorcio-reforma-casa-de-praia.jpg"><CardHeader>Consórcio para Reforma da casa na praia no valor de R$55 mil: </CardHeader><CardText>PARCELAS DE<p>R$111,00</p>NO PLANO DE 208 MESES</CardText></Card>
            <Card className="swiper-slide" image="https://www.portoseguro.com.br/NovoInstitucional/static_files/images/thumbnail/consorcio-reforma-casa-de-praia.jpg"><CardHeader>Consórcio para Reforma da casa na praia no valor de R$55 mil: </CardHeader><CardText>PARCELAS DE<p>R$222,00</p>NO PLANO DE 208 MESES</CardText></Card>
            <Card className="swiper-slide" image="https://www.portoseguro.com.br/NovoInstitucional/static_files/images/thumbnail/consorcio-reforma-casa-de-praia.jpg"><CardHeader>Consórcio para Reforma da casa na praia no valor de R$55 mil: </CardHeader><CardText>PARCELAS DE<p>R$222,00</p>NO PLANO DE 208 MESES</CardText></Card>
            <Card className="swiper-slide" image="https://www.portoseguro.com.br/NovoInstitucional/static_files/images/thumbnail/consorcio-reforma-casa-de-praia.jpg"><CardHeader>Consórcio para Reforma da casa na praia no valor de R$55 mil: </CardHeader><CardText>PARCELAS DE<p>R$222,00</p>NO PLANO DE 208 MESES</CardText></Card>
                    {/* {props.children} */}
                </div>
                {/* If we need pagination */}
                <div className="swiper-pagination"></div>

                {/* If we need navigation buttons */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                {/* If we need scrollbar */}
                {/* <div className="swiper-scrollbar"></div> */}
            </div>
        </CarouselWrapper>
    )
}

const CarouselWrapper = styled.div`
    ${Container};
    height: ${props => props.height};
    margin-top: 40px;
`

export default Carousel