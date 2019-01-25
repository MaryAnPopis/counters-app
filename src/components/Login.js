import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { ADD_USER } from '../actions'
import { Redirect } from 'react-router-dom'

import { ButtonPrimary } from './Button'
import { GlobalStyles } from '../styles/globalStyles'

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      isLogged: false,
      redirect: false,
    }
  }
  handleChange(e) {
    this.setState({
      username: e.target.value,
      isLogged: true,
    })
  }
  componentDidMount() {
    sessionStorage.setItem('user', JSON.stringify(this.state))
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = {
      username: this.state.username,
      isLogged: this.state.isLogged,
    }
    sessionStorage.setItem('user', JSON.stringify(user))
    this.props.onUserAdded(this.state)
    this.setState({
      redirect: true,
    })
  }

  render() {
    const redirect = this.state.redirect

    if (redirect) {
      return <Redirect to={`/home`} />
    }
    return (
      <Style.LoginContainer>
        <GlobalStyles />
        <Style.Wrap onSubmit={e => this.handleSubmit(e)}>
          <Style.Title>Login</Style.Title>
          <Style.Input type="text" placeholder="username" onChange={e => this.handleChange(e)} />
          <ButtonPrimary name="Login" />
        </Style.Wrap>
      </Style.LoginContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    counters: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUserAdded: newUser => {
      dispatch({ type: ADD_USER, newUser })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

const Style = {}

Style.Title = styled.h2`
  text-align: center;
`

Style.Wrap = styled.form`
  width: 30rem;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 4px 26px -4px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 4px 26px -4px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 4px 26px -4px rgba(0, 0, 0, 0.09);
`
Style.Input = styled.input`
  font-family: 'Nunito', sans-serif;
  font-weight: 500;
  padding: 0.8rem;
  border-radius: 1.4rem;
  border: 1px solid #707070;
  margin: 0 1rem 0.4rem;
  outline: none;
  &:focus {
    border: 1px solid #f24571;
  }
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
Style.LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`
