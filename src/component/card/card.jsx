import React from 'react'
import styled from 'styled-components'

const Card = props => (
    <StyledCard>
        <CardImage src={props.image} alt={props.alt} />
        <CardContent>{props.children}</CardContent>
    </StyledCard>
)

const StyledCard = styled.div`
    width: 288px;
    height: 315px;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    overflow: hidden;
    box-sizing: content-box;
`

const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 130px;
`

const CardContent = styled.div`
    width: 100%;
    height: 185px;
    padding: 15px 30px;
    text-align: center;
`

export default Card