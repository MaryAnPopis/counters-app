import React from 'react'
import styled from 'styled-components'

import { ButtonPrimary, ButtonSecondary } from './Button'
import Blocked from './Blocked'

class CounterCard extends React.Component {
  render() {
    const {
      counterId,
      name,
      value,
      blocked,
      onIncrement,
      onDelete,
      onReset,
      onBlocked,
    } = this.props

    return (
      <Style.Wrap>
        {blocked ? <Blocked onClick={() => onBlocked(counterId)} /> : null}

        <Style.Card id={counterId}>
          <Style.CounterName>{name}</Style.CounterName>
          <Style.Counter>
            <ButtonSecondary name={`+${value}`} onClick={() => onIncrement(counterId)} />
          </Style.Counter>
          <Style.ButtonContainer>
            <ButtonSecondary name="delete" onClick={() => onDelete(counterId)} />
            <ButtonPrimary name="reset" onClick={() => onReset(counterId)} />
            <ButtonSecondary name="block" onClick={() => onBlocked(counterId)} />
          </Style.ButtonContainer>
        </Style.Card>
      </Style.Wrap>
    )
  }
}

export default CounterCard

const Style = {}

Style.Wrap = styled.div`
  display: table-row;
`

Style.CounterName = styled.h2`
  text-align: center;
`

Style.ButtonContainer = styled.div`
  padding: 0.1rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

Style.Card = styled.div`
  min-width: 20rem;
  max-width: 31.25rem;
  height: 18.5rem;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 1rem;
  padding: 0rem 4rem 1rem;
  -webkit-box-shadow: 0px 4px 26px -4px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 4px 26px -4px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 4px 26px -4px rgba(0, 0, 0, 0.09);
  border-radius: 1rem;
  border: 1px solid #e2e2e2;
  @media (max-width: 768px) {
    height: 22rem;
  }
`

Style.Counter = styled.div`
  padding: 1.6875rem 3.125rem;
  margin: 0 auto;
  font-size: 3.5rem;
  border-radius: 0.6rem;
  -webkit-box-shadow: 0px 4px 26px -4px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 4px 26px -4px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 4px 26px -4px rgba(0, 0, 0, 0.09);
  margin-bottom: 1.5rem;
`
