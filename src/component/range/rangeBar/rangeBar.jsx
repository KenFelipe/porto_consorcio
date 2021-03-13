import React from 'react'
import styled, { css } from 'styled-components'

import Container from '../../container/container'

import { RangeBarContainer} from './rbContainer.style'
import { RangeBar } from './rangeBar.style'
import { RangeBarProgressBar } from './rbProgressBar.style'

import RangeBarRangeDisplay from './rbRangeDisplay'

export default props => (
    <Range>
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
    </Range>
)

const Range = styled.div`
    margin: 100px 0;
    ${Container};

`