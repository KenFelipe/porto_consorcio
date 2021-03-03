import React from 'react'
import styled from 'styled-components'
import * as ButtonStyle from './buttonStyle'

const Button = props => (
    <StyledButton 
        color={props.color}
        className={props.className} 
        onClick={props.onClick}
    >{props.children}</StyledButton>
)

const StyledButton = styled.button`
    ${props => {
        const color = props.color[0].toUpperCase() + props.color.slice(1)

        return ButtonStyle[
            ButtonStyle.hasOwnProperty(color) ? color : 'Green' 
        ]
    }}
`

export default Button