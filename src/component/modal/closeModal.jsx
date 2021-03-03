import React, { Fragment } from 'react'
import styled from 'styled-components'

const overlayId = 'overlay'

const CloseModal = props => (
    <Close 
        color={props.color}
        onClick={() => {
            const overlay = document.getElementById(overlayId)
            overlay.classList.remove('active')

            const activeModal = document.querySelector('.modal.active')
            activeModal.classList.remove('active')
        }}
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