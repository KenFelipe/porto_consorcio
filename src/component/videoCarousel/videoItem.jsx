import React from 'react'
import styled from 'styled-components'

import PopupButton from '../modal/popupButton'

const VideoItem = props => (
    <Wrapper width={props.width}>
        <PopupButton 
            type="fill"
            modal={props.modal}
        ></PopupButton>
        <img src={props.img} alt={props.alt}/>
        <h4>{props.children}</h4>
    </Wrapper>
)

const Wrapper = styled.div`
    width: ${props => props.width || '300px'};
    height: 230px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 1px 45px 40px -45px rgb(0 0 0 / 40%);

    h4 {
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 15px;
        font-size: 1.4rem;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
        line-height: 24px;
        text-align: center;
        color: #fff;
    }

    &::after {
        content: '';
        display: block;
        color: pink;
        width: 54px;
        height: 54px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        transition: all .3s ease;
        background-image: url('https://www.portoseguro.com.br/NovoInstitucional/static_files/images/play.svg');
    }

    &:hover::after {
        transition: all .3s ease;
        background-image: url('https://www.portoseguro.com.br/NovoInstitucional/static_files/images/play-hover.svg');
    }
`

export default VideoItem