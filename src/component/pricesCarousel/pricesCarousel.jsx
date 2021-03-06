import React from 'react'

import Carousel from '../carousel/carousel'

const PricesCarousel = props => (
    <Carousel 
        id={props.id}
        height="315px"
        setting={{
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 1300,
            },
            // breakpoints: {
            //     480: {
            //         slidesPerView: 'auto',
            //     },
            // },
            ...props.setting
        }}
    >{props.children}</Carousel>
)

export default PricesCarousel