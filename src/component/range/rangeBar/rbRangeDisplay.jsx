import React from 'react'
import styled, { css } from 'styled-components'

import { rangeBarFont } from '../ranegBarFont.style'

export default props => (
    <RangeBarRangeDisplay>
        <Min>{props.min}</Min>
        <Max>{props.max}</Max>
    </RangeBarRangeDisplay>
)

const RangeBarRangeDisplay = styled.div`
    ${rangeBarFont};

    width: 85%;
    // width: 80%;
    margin: 0 auto;
    margin-top: 22px;
    text-align: left;

    @media (max-width: 774px) {
        width: 95%;
    }
    @media (max-width: 490px) {
        width: 100%;
    }
`

const rangeDisplay = css`
    display: inline-block;
    height: 100%;
    position: relative;
    /* top: 4px; */
`

const Min = styled.div`
    ${rangeDisplay};
    float: none;
`

const Max = styled.div`
    ${rangeDisplay};
    float: right;
`