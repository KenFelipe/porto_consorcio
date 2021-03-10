import React from 'react'
import styled from 'styled-components'

import Container from '../container/container'

const Titling = props => (
    <TitlingWrapper>{props.children}</TitlingWrapper>
)

const TitlingWrapper = styled.div`
    ${Container};
    
    margin: 0 175px 30px;
    text-align: center;

    color: rgba(28, 28, 28, .6);
    font-size: 34px;
    letter-spacing: .5px;
    line-height: 44px;`

export default Titling