import React, { Component } from 'react'
import { ButtonPrimary } from '../components/Button'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { ADD_COUNTER } from '../actions'

class AddCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      counterId: Math.floor(Math.random() * 10000),
      value: 0,
      blocked: false,
    }
    this.onFieldChange = this.onFieldChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onFieldChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const counterName = this.state.name
    const generateNumber = Math.floor(Math.random() * 10000)

    this.setState({
      name: counterName,
      counterId: `${counterName}-${generateNumber}`,
      value: 0,
    })

    this.props.onCounterAdded(this.state)
    this.setState({
      name: '',
    })
  }

  render() {
    return (
      <div>
        <Style.Form onSubmit={this.handleSubmit}>
          <Style.Input
            type="text"
            placeholder="name of the counter"
            name="name"
            value={this.state.name}
            onChange={this.onFieldChange}
          />
          <ButtonPrimary name="+" />
        </Style.Form>
      </div>
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
    onCounterAdded: newCounter => {
      dispatch({ type: ADD_COUNTER, newCounter })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCounter)

const Style = {}

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
Style.Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-bottom: 2rem;
`
