import React from 'react'
import styled from 'styled-components'

const BannerHeader = props => (
    <StyledBannerHeader>{props.children}</StyledBannerHeader>
)

const StyledBannerHeader = styled.h2`
    font-size: 3.4rem;
    font-weight: 300;
    letter-spacing: .5px;
    line-height: 4.4rem;

    padding-bottom: 18px;
`

export default BannerHeader