import React from 'react'
import styled from 'styled-components'

import Container from '../container/container'

const Banner = props => (
    <BannerWrapper>
        <BannerBg url={props.url} />
        <BannerContent>{props.children}</BannerContent>
    </BannerWrapper>
)

const BannerWrapper = styled.div`
    height: 340px;
    padding: 64px 0;
    color: #fff;

    background-color: #555861;
    position: relative;
`

const BannerBg = styled.div`
    width: 100%;
    height: 100%;

    background-image: url(${props => props.url});
    background-position: top center;
    background-repeat: no-repeat;

    position: absolute;
    top: 0; left: 0;

    opacity: 0.3;
`

const BannerContent = styled.div`
    ${Container};

    * {
        display: block;
        margin: 0 auto;
        max-width: 590px;
        text-align: center;
        position: relative;
        z-index: 1;
    }
`

export default Banner