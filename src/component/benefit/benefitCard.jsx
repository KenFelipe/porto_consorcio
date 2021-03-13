import React from 'react'
import styled from 'styled-components'

import PopupButton from '../../component/modal/popupButton'

const BenefitCard = props => (
    <Wrapper>
        <StyledBenefitCard islink={props.islink}>
            {props.islink && 
                <PopupButton 
                    type="fill"
                    modal={props.modal} 
                ></PopupButton>
            }
            <p>{props.children}</p>
            <a href="">SAIBA MAIS &gt;</a>
        </StyledBenefitCard>
    </Wrapper>
)

const Wrapper = styled.div`
    width: 299px;
    height: 130px;
    border: 1px solid #d2d2d2;
    border-left: none;
    color: rgba(28, 28, 28, .6);
    box-sizing: content-box;

    position: relative;
    background-color: #fff;

    &:first-child {
        // comment on loop: true;
        /* width: 298px;
        border-left: 1px solid #d2d2d2; */
    }

    &:hover {
        transition: all .7s ease;
        background-color: #555861;
        color: #fff;
    }
`
const StyledBenefitCard = styled.div`
    padding: 15px 15px 15px 60px;

    p {
        color: inherit;
        letter-spacing: 0;
        line-height: 24px;
        word-break: break-word;
        font-size: 1.4rem;
        pointer-events: none;
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
`

export default BenefitCard