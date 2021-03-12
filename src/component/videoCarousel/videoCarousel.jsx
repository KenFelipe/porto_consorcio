import React from 'react'

import Carousel from '../carousel/carousel'

const VideoCarousel = props => (
    <Carousel 
        carouselId={props.carouselId}
        height="230px"
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

export default VideoCarousel