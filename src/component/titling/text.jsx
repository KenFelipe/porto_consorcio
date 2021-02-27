import React from 'react'
import styled from 'styled-components'

const TitlingText = props => (
    <StyledTitlingText>{props.children}</StyledTitlingText>
)

const StyledTitlingText = styled.div`
    p {
        margin-bottom: 16px;
    }
`

export default TitlingText