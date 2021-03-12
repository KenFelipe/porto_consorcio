import React from 'react'
import styled from 'styled-components'
import * as ButtonStyle from './buttonColor'
import ButtonTypeFill from './buttonType'

const Button = props => (
    <StyledButton 
        className={props.className} 
        color={props.color}
        type={props.type}
        onClick={props.onClick}
    >{props.children}</StyledButton>
)

const StyledButton = styled.button`
    ${props => {
        if(props.type === 'fill') {
            return ButtonTypeFill
        }

        const color = props.color && props.color[0].toUpperCase() + props.color.slice(1)
        
        return ButtonStyle[
            ButtonStyle.hasOwnProperty(color) ? color : 'Green' 
        ]
    }};
`

export default Button