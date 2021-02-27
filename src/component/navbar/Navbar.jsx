import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Navbar = props => (
    <Wrapper>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/imoveis'>Imoveis</Link>
            <Link to='/veiculos'>Veiculos</Link>
            {/* <Link to='/placasolar'>Placa Solar</Link> */}
            {/* <Link to='/veiculospesados'>Veiculos Pesados</Link> */}
            <Link to='/nonexists'>NonExists</Link>
        </ul>
    </Wrapper>
)

const Wrapper = styled.nav`
    ul {
        margin: 0;
        padding: 10px 20px;
        background-color: gray;
    }

    a {
        color: maroon;
        font-size: 1.8rem;
        padding: 0px 4px;
        margin: 0 8px;
        text-decoration: none;
        transition: color .5s ease;

        &:hover {
            color: #fa1ff8;
        }

        &:first-child {
            margin-left: 0;
            padding-left: 0;
        }

        &:last-child {
            margin-right: 0;
            padding-right: 0;
        }
    }
`

export default Navbar