import React, { type ReactElement } from 'react'
import StateSelection from './StateSelection/StateSelection'
import Cards from './Cards/Cards'

function Dashboard (): ReactElement {
  return (
    <div>
      <StateSelection></StateSelection>
      <Cards></Cards>
    </div>
  )
}

export default Dashboard
