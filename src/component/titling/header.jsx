import React from 'react'
import styled from 'styled-components'

const TitlingHeader = props => (
    <StyledTitlingHeader>{props.children}</StyledTitlingHeader>
)

const StyledTitlingHeader = styled.h3`
    font-size: 3.4rem;
    font-weight: 300;
    margin-bottom: 15px;
`

export default TitlingHeader