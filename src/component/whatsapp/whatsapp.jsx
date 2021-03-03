import React from 'react'
import styled, { css } from 'styled-components'

const WhatsAppLink = props => (
    <WhatsAppLinkWrapper>
        <StyledWhatsAppLink 
            href={props.href || 'https://google.com'}
            target="_blink"
            onMouseEnter={() => document.getElementById('whatsapp-content').style = `
                transform: translateX(-20px);
                opacity: 1;
                z-index: 8;
            `} 
            onMouseLeave={() => document.getElementById('whatsapp-content').style = ''} 
        />
        <WhatsAppContent id="whatsapp-content">
            <p>Atendimento via</p>
            <p>WhatsApp</p>
        </WhatsAppContent>
    </WhatsAppLinkWrapper>
)

const WhatsAppLinkWrapper = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
`

const StyledWhatsAppLink = styled.a`
    display: block;
    cursor: pointer;
    width: 67px;
    height: 67px;

    position: absolute;
    right: 0;

    border: 1px solid rgba(255, 255, 255, .16);
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0, 0, 0, .3);
    background-color: #45c655;
    z-index: 10;
`

const WhatsAppContent = styled.div`
    width: 182px;
    height: 67px;
    border-radius: 500px;
    padding: 16px 0 19px 30px;
    color: #fff;
    background: linear-gradient(90deg ,#33ae64 1.75%, #45c655 91%);

    display: flex;
    flex-direction: column;
    justify-content: center;

    transition: all .5s ease-in-out;
    opacity: 0;
    pointer-events: none;

    p {
        &:first-child {
            font-size: 1.2rem;
            line-height: 16px;
        }

        &:nth-child(2) {
            font-size: 1.8rem;
            line-height: 16px;
        }
    }
`

export default WhatsAppLink