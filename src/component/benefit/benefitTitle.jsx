import React from 'react'
import styled from 'styled-components'

const TitlingHeader = props => (
    <StyledTitlingHeader>{props.children}</StyledTitlingHeader>
)

const StyledTitlingHeader = styled.h3`
    padding: 15px 0;
    color: #1C1C1C;

    font-size: 1.1rem;
    font-weight: 300;
    font-weight: 600;
    letter-spacing: 1.5px;
    line-height: 21px;
    text-align: center;
`

export default TitlingHeader