import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Title from './Title'
import CountersContainer from './CountersContainer'
import AddCounter from './AddCounter'
import { GlobalStyles } from '../styles/globalStyles'
import { colors } from '../styles/colors'
class App extends Component {
  render() {
    return (
      <Style.Wrap>
        <GlobalStyles />
        <Style.UserName>
          <p>Hola, {JSON.parse(sessionStorage.getItem('user')).username}</p>{' '}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
              <g className="nc-icon-wrapper" stroke="none" fill="#ffffff">
                <Style.Svg d="M26 6h-4v20h4V6zm9.67 4.33l-2.83 2.83C35.98 15.73 38 19.62 38 24c0 7.73-6.27 14-14 14s-14-6.27-14-14c0-4.38 2.02-8.27 5.16-10.84l-2.83-2.83C8.47 13.63 6 18.52 6 24c0 9.94 8.06 18 18 18s18-8.06 18-18c0-5.48-2.47-10.37-6.33-13.67z" />
              </g>
            </svg>
          </Link>
        </Style.UserName>
        <Style.Container>
          <Title title="Counters App" />
          <AddCounter />
          <CountersContainer />
        </Style.Container>
      </Style.Wrap>
    )
  }
}

const mapStateToProps = state => {
  return {
    counters: state,
  }
}

export default connect(
  mapStateToProps,
  null
)(App)

const Style = {}

Style.Wrap = styled.div`
  border-top: 5px solid ${colors.mainColor};
`

Style.UserName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 'Nunito';
  background-color: ${colors.mainColor};
  color: white;
  position: absolute;
  right: 6rem;
  padding: 0 1.2rem;
  border-radius: 0 0 1rem 1rem;
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    position: absolute;
    right: 0rem;
    border-radius: 0;
    justify-content: center;
    margin-bottom: 2rem;
  }
`

Style.Container = styled.div`
  padding-right: 0rem;
  padding-left: 0rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: 4rem;
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

Style.Svg = styled.path`
  transition: color 1s, font-size 1s;
  &:hover {
    fill: black;
    border: 2px solid black;
  }
`
