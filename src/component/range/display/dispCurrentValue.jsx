import React from 'react'
import styled, { css } from 'styled-components'

import { rangeBarFont } from '../ranegBarFont.style'

export default props => (
    <CurrentValueDisplay>
        <DisplayDescription>{
            props.isParcela ?
            'VALOR DA PARCELA: ' : 'CREDITO PRETENDIDO: '
        }</DisplayDescription> 

        <DisplayValueContainer>
            <ValuePrefix>R$</ValuePrefix>
            <DisplayValue 
                type="text" 
                defaultValue="1.000.000"
            ></DisplayValue>
        </DisplayValueContainer>
    </CurrentValueDisplay>
)

const CurrentValueDisplay = styled.div`
    ${rangeBarFont};
    padding-top: 24px;
    text-align: center;

    @media (max-width: 490px) {
        margin-top: 24px;
    }
`

const DisplayDescription = styled.div`
    display: inline;
    font-size: 1.2rem;
`

const DisplayValueContainer = styled.div`
    display: inline-block;
    font-size: 1.2rem;
    margin-left: 8px;

    @media (max-width: 490px) {
        display: block;
        margin-left: 0;
        margin-top: 18px;
    }
`

const rangeBarButton = css`
    padding: 10px;
    border: 1px solid #33beff;
    border-radius: 4px 0 0 4px;
    background-color: transparent;
`

const ValuePrefix = styled.span`
    display: inline-block;

    ${rangeBarButton};
    border-right: 0;
    padding: 10px 12px;
`

const DisplayValue = styled.input`
    ${rangeBarFont};
    ${rangeBarButton};
    border-radius: 0 4px 4px 0;
    text-align: center;
`