import { type ReactElement } from 'react'
import Dashboard from './pages/Dashboard'
import StatisticsDisplay from './pages/StatisticsDisplay'
import HistoricalData from './pages/HistoricalData'

export const routes: Array<{ path: string, element: ReactElement, name: string }> = [
  {
    path: '/',
    name: 'Home',
    element: Dashboard()
  },
  {
    path: '/statics',
    name: 'Statics Display',
    element: StatisticsDisplay()
  }
  // {
  //   path: '/history',
  //   name: 'History Display',
  //   element: HistoricalData()
  // }
]
