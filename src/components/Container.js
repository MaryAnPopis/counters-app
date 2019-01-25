import React from 'react'
import styled from 'styled-components'

export default function Container() {
  return <Style.Container />
}

const Style = {}

Style.Container = styled.div`
  padding-right: 0rem;
  padding-left: 0rem;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    width: 46.875rem;
  }
  @media (min-width: 992px) {
    width: 60.625rem;
  }
  @media (min-width: 1200px) {
    width: 73.125rem;
  }
`
