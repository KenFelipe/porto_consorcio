import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Container from '../container/container'

const BreadCrumbs = props => (
    <BreadCrumbsWrapper>
        <List>
            {props.links && props.links.map((linkData, i) => (
                <Link key={i} target="_blink" to={linkData.to}>{linkData.label}</Link>
            ))}
        </List>
    </BreadCrumbsWrapper>
)

const BreadCrumbsWrapper = styled.div`
    /* border-top: 1px solid rgba(210, 210, 210, .4);
    border-bottom: 1px solid rgba(210, 210, 210, .4); */

    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
`
const List = styled.div`
    ${Container};
    vertical-align: top;
    line-height: 30px;
    margin-bottom: 3px;

    a {
        color: #555861;
        font-size: 1.2rem;
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
`

export default BreadCrumbs