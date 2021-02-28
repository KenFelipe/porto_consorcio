import React from 'react'
import styled from 'styled-components'

const CardHeader = props => (
    <StyledCardHeader>{props.children}</StyledCardHeader>
)

const StyledCardHeader = styled.div`
    width: 230px;
    margin: 0 auto;
    color: #1c1c1c;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
`

export default CardHeader