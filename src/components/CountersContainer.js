import React from 'react'
import styled from 'styled-components'

import CounterCard from './CounterCard'
import { connect } from 'react-redux'
import { increment, deleteCounter, reset, blocked } from '../actions'

const CountersContainer = props => {
  return (
    <div>
      <Style.CounterName>Counters {props.counters.length}</Style.CounterName>
      <Style.Container>
        {props.counters.map(counter => (
          <CounterCard
            key={counter.counterId}
            name={counter.name}
            value={counter.value}
            blocked={counter.blocked}
            counterId={counter.counterId}
            onIncrement={() => props.onIncrement(counter.counterId)}
            onDelete={() => props.onDelete(counter.counterId)}
            onReset={() => props.onReset(counter.counterId)}
            onBlocked={() => props.onBlocked(counter.counterId)}
          />
        ))}
      </Style.Container>
    </div>
  )
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
