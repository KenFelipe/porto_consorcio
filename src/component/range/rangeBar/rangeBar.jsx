import React from 'react'
import styled, { css } from 'styled-components'

import Container from '../../container/container'

import { RangeBarContainer} from './rbContainer.style'
import { RangeBar } from './rangeBar.style'
import { RangeBarProgressBar } from './rbProgressBar.style'

import RangeBarRangeDisplay from './rbRangeDisplay'


import CurrentValueDisp from '../display/dispCurrentValue' // for debug
import ResultValueDisp from '../display/dispResultValue' // for debug


export default props => (
    <Range>
        <CurrentValueDisp isParcela={true} />

        <RangeBarContainer>
            <RangeBar 
                id="rangebar" 
                type="range" 
                min="500" 
                max="1000000" 
                step="1" 
                data-selected="" 
                data-formula=""
            ></RangeBar>
            <RangeBarProgressBar />
        </RangeBarContainer>
        <RangeBarRangeDisplay 
            min={500}
            max={1000000}
        ></RangeBarRangeDisplay>

        <ResultValueDisp />
    </Range>
)

const Range = styled.div`
    margin: 60px 0;
    ${Container};
`