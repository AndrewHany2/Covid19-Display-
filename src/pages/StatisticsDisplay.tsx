import React, { type ReactElement } from 'react'
import StateSelection from '../components/StateSelection/StateSelection'
import Cards from '../components/Cards/Cards'
import { useSingleStateContext } from '../context/SingleStateContext'

function StatisticsDisplay (): ReactElement {
  return (
    <div>
      <StateSelection></StateSelection>
      <Cards></Cards>
    </div>
  )
}

export default StatisticsDisplay
