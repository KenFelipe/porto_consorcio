import React from 'react'
import styled from 'styled-components'
import PopupButton from '../../component/modal/popupButton'

const BenefitCard = props => (
    <StyledBenefitCard islink={props.islink}>
        <PopupButton modal={props.modal}></PopupButton>

        <p>{props.children || testtext}</p>
        <a href="">SAIBA MAIS &gt;</a>
    </StyledBenefitCard>
)

const StyledBenefitCard = styled.div`
    width: 300px;
    height: 130px;
    padding: 15px 15px 15px 60px;
    border: 1px solid #d2d2d2;
    border-left: none;
    background-color: #fff;
    position: relative;
    transition: all .7s ease;

    &:first-child {
        border-left: 1px solid #d2d2d2;
    }

    &:hover {
        background-color: #555861;

        p {
            color: #fff;
        }
    }

    p {
        color: rgba(28, 28, 28, .6);
        letter-spacing: 0;
        line-height: 24px;
        word-break: break-word;
        font-size: 1.4rem;
        pointer-events: none;
        transition: all .7s ease;
    }

    a {
        display: ${props => props.islink ? 'block' : 'none'};
        color: #30c5ff;
        text-decoration: none;
        font-weight: 600;
        border-radius: 4px;
        font-size: 1.1rem;
        line-height: 21px;
        letter-spacing: 1.5px;
        position: absolute;
        bottom: 15px;
    }

    button {
        display: block;
        border: none;
        padding: 0;
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        ${props => !props.islink ? 'z-index: -100' : ''};
    }

    /* &::before {
        content: '';
        width: 60px;
        position: absolute;
        left: 0; top: 0;
        background-color: #987232;
    } */
`

export default BenefitCard