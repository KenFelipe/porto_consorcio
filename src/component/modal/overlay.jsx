import React from 'react'
import styled from 'styled-components'

import { closeModal } from './closeModal.js'

const Overlay = props => (
    <OverlayStyled 
        id='overlay' 
        onClick={closeModal}
    ></OverlayStyled>
)

const OverlayStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 15;
    background-color: rgba(0, 0, 0, .9);

    opacity: 0;
    pointer-events: none;
    transition: all .2s ease-out;

    &.active {
        opacity: 1;
        pointer-events: all;
    }
`

export default Overlay