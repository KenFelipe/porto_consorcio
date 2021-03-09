import React from 'react'
import styled from 'styled-components'

import Button from '../button/button'
import ButtonStyle from '../button/buttonStyle'

const overlayId = 'overlay'

const PopupButton = props => (
    <Button
    className={props.className}
        color={props.color}
        onClick={() => {
            const modal = document.getElementById(props.modal)
            if(!modal) {
                return
            }
            modal.classList.add('active')

            const overlay = document.getElementById(overlayId)
            overlay.classList.add('active')
        }}
    >{props.children}</Button>
)

export default PopupButton