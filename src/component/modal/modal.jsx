import React from 'react'
import styled from 'styled-components'
import CloseModal from './closeModalButton'

const Modal = props => (
    <StyledModal
        id={props.id}
        className={"modal" + ' ' + props.className}
    >
        <CloseModal closeIcon={props.closeIcon} />
        {props.children}
    </StyledModal>
)

const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);

    max-width: 700px;
    min-width: 320px;
    min-height: 430px;

    border: 1px solid #000;
    border-radius: 8px;
    background-color: #fff;
    z-index: 20;

    transition: all .3s ease;

    &.active {
        transform: translate(-50%, -50%) scale(1);
    }
`

export default Modal