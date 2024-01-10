/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { type ReactElement } from 'react'
import BasicCard from '../Common/BasicCard'
import styled from 'styled-components'
import { useSingleStateContext } from '../../context/SingleStateContext'

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`
function formatDate (date: string): string {
  return date ? new Date(date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
}
function Cards (): ReactElement {
  const [singleStateStatics, setSingleStateStatics] = useSingleStateContext()
  return (
    <Container>
        <BasicCard title="Infected"
         date={formatDate(singleStateStatics.dateChecked)} count={singleStateStatics?.positive?.toLocaleString()} desc="Number of active cases"></BasicCard>
        <BasicCard title="Recovered"
         date={formatDate(singleStateStatics.dateChecked)} count={singleStateStatics?.recovered?.toLocaleString()} desc="Number of recovered cases"></BasicCard>
        <BasicCard title="Deaths"
        date={formatDate(singleStateStatics.dateChecked)} count={singleStateStatics?.death?.toLocaleString()} desc="Number of death cases"></BasicCard>
    </Container>
  )
}

export default Cards
