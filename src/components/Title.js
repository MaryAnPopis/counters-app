import React from 'react'
import styled from 'styled-components'

export default function Title(props) {
  return <Style.Title>{props.title}</Style.Title>
}

const Style = {}

Style.Title = styled.h2`
  font-size: 3rem;
  text-align: center;
`
