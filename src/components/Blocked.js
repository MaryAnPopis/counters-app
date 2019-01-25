import React from 'react'
import styled from 'styled-components'

import { ButtonLocked } from './Button'

export default function Blocked(props) {
  return (
    <Style.Block>
      <ButtonLocked name="unlocked counter" onClick={props.onClick} />
    </Style.Block>
  )
}

const Style = {}

Style.Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  width: 31.25rem;
  position: relative;
  margin: 0.5rem 1rem;
  padding: 0rem 4rem 1rem;
  height: 18.5rem;
  border-radius: 1rem;
  position: absolute;
  @media (max-width: 768px) {
    width: 20rem;
    height: 22rem;
  }
  transition: all 0.3s ease-out;
`
