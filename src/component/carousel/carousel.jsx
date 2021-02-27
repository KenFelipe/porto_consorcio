import React, { useEffect } from 'react'
import styled from 'styled-components'

import ContainerStyle from '../container/containerStyle'
import './carousel.scss'

const Carousel = props => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', swiperConfig); 
    }, [])

    const swiperConfig = {
        // Optional parameters
        direction: 'horizontal',
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
            721: { slidesPerView: 4, spaceBetween: 20, }
        }
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    }

    return (
        <CarouselWrapper height={props.height || '300px'}>
            {/* Slider main container */}
            <div className="swiper-container">
                {/* Additional required wrapper */}
                <div className="swiper-wrapper">
                    {/* Slides */}
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                    <div className="swiper-slide">Slide 4</div>
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
    ${ContainerStyle};
    height: ${props => props.height};
    margin-top: 40px;
`

export default Carousel