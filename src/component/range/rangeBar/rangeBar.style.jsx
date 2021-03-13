import styled from 'styled-components'

import { thumbSize } from './rbCommon.style'

export const RangeBar = styled.input`
    -webkit-appearance: none;
    margin: 0 10px;
    width: 80%;

    @media (max-width: 774px) {
        width: 90%;
    }

    @media (max-width: 490px) {
        width: 96%;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background-color: #ccc;
            background-color: #000; // for debug
        border-radius: 1px;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: ${thumbSize}px;
        height: ${thumbSize}px;
        // background-color: #000;
        // background-color: #30c5ff;
        background-color: #00adef;
        margin-top: -${thumbSize / 2}px;
        border-radius: 50%;
        position: relative;
        z-index: 20;
    }
`