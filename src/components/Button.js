import React from 'react'
import styled from 'styled-components'

export const ButtonPrimary = props => {
  return <Style.Button onClick={props.onClick}>{props.name}</Style.Button>
}

export const ButtonSecondary = props => {
  return <Style.ButtonSecondary onClick={props.onClick}>{props.name}</Style.ButtonSecondary>
}

export const ButtonLocked = props => {
  return <Style.ButtonLocked onClick={props.onClick}>{props.name}</Style.ButtonLocked>
}

const Style = {}

Style.Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  background-color: #f24571;
  color: white;
  border-radius: 1.4rem;
  outline: none;
  padding: 0.5rem 1.8rem;
  margin: 0 1rem;
  border: 1px solid #fff;
  &:hover {
    background-color: #f57797;
  }
`

Style.ButtonSecondary = styled(Style.Button)`
  background-color: white;
  color: #f24571;
  padding: 0.1rem 0.5rem;
  &:hover {
    border-radius: 0;
    border-bottom: 1.5px solid #f24571;
    background-color: #fff;
    color: #f57797;
  }
`

Style.ButtonLocked = styled(Style.Button)`
  color: #00ffaa;
  background-color: transparent;
  border: 0;
  font-size: 2rem;
  transition: color 1s, font-size 1s;
  &:hover {
    background-color: transparent;
    border-radius: 0;
    border-bottom: 0;
    font-size: 2.2rem;
  }
`
