import React from 'react'
import styled from 'styled-components'
import * as ButtonStyle from './buttonStyle'

const Button = props => (
    <StyledButton 
        color={props.color}
        className={props.className} 
    >{props.children}</StyledButton>
)

const StyledButton = styled.button`
    ${props => ButtonStyle[
        ButtonStyle.hasOwnProperty(props.color) ? 
        props.color : 'Green'
    ]};
`

export default Button