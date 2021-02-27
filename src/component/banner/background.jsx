import React from 'react'
import styled from 'styled-components'

const BannerBackground = props => (
    <Background url={props.url} />
)

const Background = styled.div`
    width: 100%;
    height: 100%;

    background-image: url(${props => props.url});
    background-position: top center;
    background-repeat: no-repeat;

    position: absolute;
    top: 0; left: 0;

    opacity: 0.3;
`

export default BannerBackground