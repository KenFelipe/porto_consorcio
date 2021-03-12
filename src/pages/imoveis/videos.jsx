import React from 'react'
import styled from 'styled-components'

import VideoCarousel from '../../component/videoCarousel/videoCarousel'
import VideoItem from '../../component/videoCarousel/videoItem'

const Videos = props => (
    <Wrapper>
        <VideoCarousel
            carouselId="video-carousel"
        >
            {/* <VideoItem
                width="286px"
                modal="lorem"
                img="https://www.portoseguro.com.br/NovoInstitucional/static_files/images/videos/porto-seguro-consorcio-investimento-286x230.jpg"
            ></VideoItem> */}
            {regItems(5)}
        </VideoCarousel>
    </Wrapper>
)

const Wrapper = styled.div`
    margin: 30px 0px;
`

const regItems = times => {
    const videos = Array(times).fill(0).map((_, i) => (
        <VideoItem
            key={`video-${i}`}
            // width={`${286+(15*i)}px`}
            // width="500px"
            width="286px"
            modal="benefittest"
            // modal="lorem"
            img="https://www.portoseguro.com.br/NovoInstitucional/static_files/images/videos/porto-seguro-consorcio-investimento-286x230.jpg"
        >Lorem Ipsum</VideoItem>
    ))
    return videos
}

export default Videos