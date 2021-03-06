import React, { useEffect } from 'react'
import styled from 'styled-components'

import Container from '../container/container'
import swiperDefaultConfig from './swiperDefaultConfig'

const Carousel = props => {
    useEffect(() => {
        const sliders = document.getElementById(props.id)
        for(let i = 0; i < sliders.childElementCount; i++) {
            sliders.childNodes.item(i).className += ' swiper-slide'
        }

        const swiperConfig = { ...swiperDefaultConfig, ...props.setting }
        const swiper = new Swiper('.swiper-container', swiperConfig); 
    }, [])

    return (
        <CarouselWrapper height={props.height}>
            {/* Slider main container */}
            <div className="swiper-container">

                {/* Additional required wrapper */}
                <div className="swiper-wrapper" id={props.id}>
                    {/* Slides */}
                    {props.children}
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
    height: ${props => props.height || '300px'};
    margin-top: 40px;

    .swiper-container {
        height: 100%;
    }

    .swiper-slide {
        height: 100%;
        max-width: 293px;
        background-color: #fff;
    }
`

export default Carousel