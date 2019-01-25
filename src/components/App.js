import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

import Title from './Title'
import CountersContainer from './CountersContainer'
import AddCounter from './AddCounter'

const GlobalStyles = createGlobalStyle`
  html *{
    box-sizing: border-box;
  }

  body {
      @import url('https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700');
      font-family: 'Nunito', sans-serif;
      font-size: 16px;
      margin:0;
      color: #707070;
    }

  a {
    text-decoration: none;
  }

`

class App extends Component {
  render() {
    return (
      <styled.Wrap>
        <Title title="Counters App" />
        <Style.Container>
          <GlobalStyles />
          <AddCounter />
          <CountersContainer />
        </Style.Container>
      </styled.Wrap>
    )
  }
}

export default App

const Style = {}

styled.Wrap = styled.div`
  border-top: 5px solid #c7395d;
`

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
