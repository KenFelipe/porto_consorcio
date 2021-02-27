import React from 'react'
import styled from 'styled-components'

import Banner from '../../component/banner/banner'

const Imoveis = props => (
    <div>
        <Title>Imoveis</Title>
        <Banner></Banner>
    </div>
)

const Title = styled.h2`
    font-size: 3.2rem;
    margin: 0;
    padding: 10px 20px;
    background-color: plum;
`

export default Imoveis