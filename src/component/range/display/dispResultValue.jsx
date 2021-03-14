import React from 'react'
import styled, { css } from 'styled-components'

import { rangeBarFont } from '../ranegBarFont.style'

export default props => (
    <ResultValueDisplay>
        <DisplayTitle>PLANOS E TAXAS</DisplayTitle>
        <DisplayResultContainer>
            <DisplayResultDescription>120 MESES</DisplayResultDescription>
            <DisplayResult>R${props.result || '1.000.000'}</DisplayResult>
        </DisplayResultContainer>
    </ResultValueDisplay>
)

const ResultValueDisplay = styled.div`
    ${rangeBarFont};
    margin-top: 42px;
    text-align: center;
`

const DisplayTitle = styled.div`
    font-size: 1.2rem;
`

const DisplayResultContainer = styled.div`
    display: inline-block;
    margin-top: 28px;

    border-bottom: 2px solid #ccc;
    padding: 0 4px;
`

const DisplayResultDescription = styled.div`
    display: inline-block;
    padding-bottom: 8px;
`

const DisplayResult = styled.div`
    display: inline-block;
    padding-bottom: 8px;

    margin-left: 80px;

    @media (max-width: 340px) {
        margin-left: 50px;
    }
`
