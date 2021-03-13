import styled, { css } from 'styled-components'

import { thumbSize, hiddenBarPosition } from './rbCommon.style'

const hiddenBothEndsStyle = css`
    content: '';
    display: block;
    width: ${thumbSize / 2}px;
    height: 2px;
    background-color: #fff;

    position: absolute;
    ${hiddenBarPosition}

    /* thumb z-index: 20; */
    z-index: 10;
    /* for debug */
    z-index: 30;
`

export const RangeBarContainer = styled.div`
    text-align: center;
    position: relative;

    @media (max-width: 774px) {
        margin: 0 -10px;
    }
    @media (max-width: 490px) {
        margin: 0 -8px;
    }


    /*  */
    &::before {
        ${hiddenBothEndsStyle};
        margin-left: 10%;

        @media (max-width: 774px) {
            margin-left: 5%;
        }

        @media (max-width: 490px) {
            margin-left: 2%;
        }
    }

    &::after {
        ${hiddenBothEndsStyle};
        margin-right: 10%;
        right: 0px;

        @media (max-width: 774px) {
            margin-right: 5%;
        }

        @media (max-width: 490px) {
            margin-right: 0%;
        }
    }
`
