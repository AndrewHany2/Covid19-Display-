import React, { type ReactElement } from 'react'
import BasicCard from '../Common/BasicCard'
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`

function Cards (): ReactElement {
  const num = 30000000000
  return (
    <Container>
        <BasicCard title="Infected" date={Date.now().toString()} count={num.toLocaleString()} desc="Number of active cases"></BasicCard>
        <BasicCard title="Recovered" date={Date.now().toString()} count="300000" desc="Number of active cases"></BasicCard>
        <BasicCard title="Deaths" date={Date.now().toString()} count="300000" desc="Number of active cases"></BasicCard>
    </Container>
  )
}

export default Cards
