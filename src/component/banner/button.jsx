import React from 'react'
import styled from 'styled-components'

import ContentsStyle from './contentsStyle'
import Button from '../button/button'

const BannerButton = props => (
    <ButtonStyled color={props.color}>{props.children}</ButtonStyled>
)

const ButtonStyled = styled(Button)`
    ${ContentsStyle};
    display: block;
`

export default BannerButton 
