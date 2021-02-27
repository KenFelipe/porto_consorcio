import React from 'react'
import styled from 'styled-components'

import ContainerStyle from '../container/containerStyle'

const Titling = props => (
    <TitlingWrapper>{props.children}</TitlingWrapper>
)

const TitlingWrapper = styled.div`
    ${ContainerStyle};
    
    color: rgba(28, 28, 28, .6);
    text-align: center;
    margin-top: 30px;
`

export default Titling