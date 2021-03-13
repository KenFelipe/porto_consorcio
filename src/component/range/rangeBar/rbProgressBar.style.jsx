import styled from 'styled-components'

import { progressBarPosition } from './rbCommon.style'

export const RangeBarProgressBar = styled.div`
    content: '';
    /* margin: 0 auto; */

    // margin = (100% - 80%) / 2 = 10%
    margin-left: 10%;

    @media (max-width: 774px) {
        margin-left: 5%;
    }

    @media (max-width: 490px) {
        margin-left: 2%;
    }

    width: 0;
    /* width: 100%; // debug */
    height: 2px;
    border-radius: 1px;
    background-color: #00adef;

    display: block;
    position: absolute;
    ${progressBarPosition};

    /* z-index: 50; // debug */
`