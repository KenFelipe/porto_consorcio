import React from 'react'
import styled from 'styled-components'

const CardText = props => (
    <StyledCardText>{props.children}</StyledCardText>
)

const StyledCardText = styled.div`
    color: rgba(28,28,28,.6);
    font-size: 1rem;
    letter-spacing: 1.5px;
    margin-top: 8px;

    p {
        font-size: 3.4rem;
        line-height: 44px;
        letter-spacing: .5px;
        margin-bottom: 3px;
    }
`

export default CardText