import React from 'react'
import styled from 'styled-components'

import CounterCard from './CounterCard'
import { connect } from 'react-redux'
import { increment, deleteCounter, reset, blocked, initialize_state } from '../actions'

class CountersContainer extends React.Component {
  componentDidMount() {
    const getUsers = JSON.parse(localStorage.getItem('countersApp'))
    const selectedUser = getUsers.find(
      userObj => userObj.user === JSON.parse(sessionStorage.getItem('user')).username
    )
    const userIndex = getUsers.indexOf(selectedUser)
    const actualUser = getUsers[userIndex]
    this.props.initializeState(actualUser)
  }

  render() {
    return (
      <div>
        <Style.CounterName>Counters {this.props.counters.length}</Style.CounterName>
        <Style.Container>
          {this.props.counters.map(counter => (
            <CounterCard
              key={counter.counterId}
              name={counter.name}
              value={counter.value}
              blocked={counter.blocked}
              counterId={counter.counterId}
              onIncrement={() => this.props.onIncrement(counter.counterId)}
              onDelete={() => this.props.onDelete(counter.counterId)}
              onReset={() => this.props.onReset(counter.counterId)}
              onBlocked={() => this.props.onBlocked(counter.counterId)}
            />
          ))}
        </Style.Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counters: state.counters,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: counterId => dispatch(increment(counterId)),
    onDelete: id => dispatch(deleteCounter(id)),
    onReset: id => dispatch(reset(id)),
    onBlocked: id => dispatch(blocked(id)),
    initializeState: newState => dispatch(initialize_state(newState)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountersContainer)

const Style = {}

Style.Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`
Style.CounterName = styled.h2`
  text-align: center;
`
