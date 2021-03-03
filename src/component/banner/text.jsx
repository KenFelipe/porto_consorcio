import React from 'react'
import styled from 'styled-components'

const BannerText = props => (
    <StyledBannerText>{props.children}</StyledBannerText>
)

const StyledBannerText = styled.p`
    font-size: 1.8rem;
    line-height: 2.8rem;
    padding-bottom: 30px;
`

export default BannerText