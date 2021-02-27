import React from 'react'
import styled from 'styled-components'

import ContainerStyle from '../container/containerStyle'
import Button from '../../component/button/button'

const Catching = props => (
    <StyledCatching>
        <Column1>
            <Header>Já é cliente?</Header>
            <Parag>Agilize seu atendimento em nossos canais digitais.</Parag>
            <Parag>É fácil, prático e sem espera.</Parag>
        </Column1>
        <Column2>
            <ul>
                <ListItem>oferte seu lance</ListItem>
                <ListItem>confira resultados de assembleias</ListItem>
                <ListItem>acesse 2ª via de boleto e muito mais!</ListItem>
            </ul>
        </Column2>
        <Column3>
            <Button color="Blue">BAIXE O APLICATIVO</Button>
        </Column3>
    </StyledCatching>
)

const StyledCatching = styled.div`
    ${ContainerStyle};
    display: flex;
    height: 160px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: calc(100% / 3);
    height: 100%;
    padding: 0 14px;
    background-color: #f1f1f1;
`

const Column1 = styled(Column)`
    padding-left: 30px;
    padding-right: 0;
    width: 40%;
`

const Column2 = styled(Column)`
    width: 30%;
`

const Column3 = styled(Column)`
    width: 30%;
`

const Header = styled.div`
    width: 100%;
    margin-bottom: 10px;
    font-size: 34px;
    letter-spacing: .5px;
    line-height: 44px;
`

const ListItem = styled.li`
    font-size: 1.6rem;
    padding: 2px 5px 2px 20px;
    position: relative;

    &::before {
        content: "";
        width: 3px;
        height: 3px;
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -1px;
        border-radius: 50%;
        background-color: #33beff;
    }
`

const Parag = styled.p`
    width: 100%;
`

export default Catching