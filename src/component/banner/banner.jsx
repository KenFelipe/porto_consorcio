import React from 'react'
import styled from 'styled-components'

import ContainerStyle from '../container/containerStyle'

const Banner = props => (
    <BannerWrapper>{props.children}</BannerWrapper>
)

const BannerWrapper = styled.div`
    ${ContainerStyle};

    height: 340px;
    padding: 64px 0;
    color: #fff;

    background-color: #555861;
    position: relative;
`

export default Banner