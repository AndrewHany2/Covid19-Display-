import React, { useState, type ReactElement } from 'react'
import { useSingleStateContext } from '../context/SingleStateContext'
import useFetch from './CustomHooks'
import { Bar, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function HistoricalDataChart (props: { chartData: any }): ReactElement {
  const { chartData } = props
  console.log('🚀 ~ HistoricalDataChart ~ chartData:', chartData)
  const [singleStateStatics, setSingleStateStatics] = useSingleStateContext()

  return (
    <div>
      <Bar data={chartData}/>
    </div>
  )
}

export default HistoricalDataChart
