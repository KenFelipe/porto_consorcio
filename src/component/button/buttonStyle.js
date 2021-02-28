import { css } from 'styled-components'

const ButtonStyle = css`
    display: inline-block;
    width: 280px;
    padding: 8.5px;
    color: #fff;
    text-align: center;
    cursor: pointer;

    font-size: 1.1rem;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 1.5px;
    border: none;
    border-radius: 4px;

    background-size: 250% 100%;
    background-position: 98%;

    transition: all .3s ease-out 0s;

    &:hover, &:focus  {
        outline: none;
        background-position: 0;
    }
`

export const Green = css`
    ${ButtonStyle};
    background-image: linear-gradient(270deg, #27c145 0, #3cc127 50%, #379f26 60%, #379f26 100%);
`

export const Blue = css`
    ${ButtonStyle};
    background-image: linear-gradient(270deg, #3DACFF 0, #2FC5FF 50%, #148DBB 60%, #148DBB 100%);
`