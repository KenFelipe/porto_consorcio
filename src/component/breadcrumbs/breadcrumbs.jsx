import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ContainerStyle from '../container/containerStyle'

const BreadCrumbs = props => (
    <BreadCrumbsWrapper>
        <ul>
            <Link target="_blink" to='/'>Home</Link>
            <Link target="_blink" to='/imoveis'>Imoveis</Link>
            <Link target="_blink" to='/veiculos'>Veiculos</Link>
        </ul>
    </BreadCrumbsWrapper>
)

const BreadCrumbsWrapper = styled.div`
    /* border-top: 1px solid rgba(210, 210, 210, .4);
    border-bottom: 1px solid rgba(210, 210, 210, .4); */
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;

    ul {
        ${ContainerStyle};
        vertical-align: top;
        line-height: 30px;

        a {
            color: #555861;
            font-size: 1.2rem;
            /* padding: 0px 4px; */
            /* margin: 0 8px; */
            margin-left: 12px;
            text-decoration: none;
            transition: color .5s ease;

            &:hover {
                color: #1c1c1c;
            }

            &::before {
                content: '|';
                margin-right: 12px;
            }

            &:first-child {
                margin-left: 18px;

                &::before {
                    display: none;
                }
            }
        }
    }
`

export default BreadCrumbs