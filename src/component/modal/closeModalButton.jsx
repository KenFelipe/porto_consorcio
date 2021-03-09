import React, { Fragment } from 'react'
import styled from 'styled-components'

import { closeModal } from './closeModal.js'

const CloseModal = props => (
    <Close 
        color={props.color}
        onClick={() => closeModal()}
    >
        { props.closeIcon || <Fragment>&times;</Fragment> }
    </Close>
)

const Close = styled.button`
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: 3.2rem;
    line-height: 18px;
    padding: 0;
    border: none;
    background: transparent;

    color: ${props => props.color || 'inherit'};

    &:hover {
        color: #30c5ff;
    }
`

export default CloseModal