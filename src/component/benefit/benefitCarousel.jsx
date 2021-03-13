import React from 'react'

import Carousel from '../carousel/carousel'

const BenefitCarousel = props => (
    <Carousel 
        carouselId={props.carouselId}
        height="130px"
        setting={{
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 1300,
            },
            spaceBetween: 0,
            // breakpoints: {
            //     480: {
            //         slidesPerView: 'auto',
            //     },
            // },
            ...props.setting
        }}
    >{props.children}</Carousel>
)

export default BenefitCarousel
