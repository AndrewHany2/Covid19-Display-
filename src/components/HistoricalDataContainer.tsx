import React, { useState, type ReactElement, useEffect } from 'react'
import styled from 'styled-components'
import StateSelection from '../components/StateSelection/StateSelection'
import HistoricalDataChart from '../components/HistoricalDataChart'
import DateRangeSelector from '../components/Common/DateRange'
import { Line } from 'react-chartjs-2'
import type Chart from 'chart.js/auto'
import useFetch from './CustomHooks'
import { useSingleStateContext } from '../context/SingleStateContext'
import axios, { type AxiosResponse } from 'axios'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin:30px;
width:100%;`

function HistoricalDataContainer (): ReactElement {
  // const [chartData, setChartData] = useState<C>({})
  const [singleStateStatics, setSingleStateStatics] = useSingleStateContext()
  const [selectedDateRange, setSelectedDateRange] = React.useState<{ start: Date | null, end: Date | null }>({
    start: new Date(),
    end: new Date()
  })
  const [labels, setLabels] = useState<string[]>([])
  const [data, setData] = useState({
    labels,
    datasets: [{
      label: 'Expenses by Month',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgb(153, 102, 255)'
      ],
      borderColor: [
        'rgb(153, 102, 255)'
      ],
      borderWidth: 1
    }]
  })
  console.log('🚀 ~ file: HistoricalDataContainer.tsx:42 ~ HistoricalDataContainer ~ data:', data)
  const startHook = useFetch()
  const endHook = useFetch()
  console.log('selectedDateRange:', selectedDateRange)

  useEffect(() => {
    const startDate = selectedDateRange.start
    const endDate = selectedDateRange.end
    if (startDate && endDate) {
      const start = startDate.getTime()
      const end = endDate.getTime()
      const dayInMillis = 24 * 60 * 60 * 1000 // Number of milliseconds in a day

      for (let currentDate = start; currentDate <= end; currentDate += dayInMillis) {
        const date = new Date(currentDate)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        const dateNumber = parseInt(`${year}${month}${day}`)

        axios.get(`https://api.covidtracking.com/v1/states/${singleStateStatics?.state?.toLowerCase()}/${dateNumber}.json`)
          .then((response: AxiosResponse<any>) => {
            setLabels([...labels, response.data.dateChecked])
            setData({
              ...data,
              datasets: [{
                ...data.datasets[0],
                data: [
                  ...data.datasets[0].data,
                  response.data.positive]
              }]
            })
          })
          .catch(error => {
            // Handle any errors that occur during the fetch
            console.log('error:', error)
          })
      }
    }
  }, [selectedDateRange, singleStateStatics])

  // useEffect(() => {
  //   if (startHook.data && endHook.data) {

  //   }
  // }, [startHook.data, endHook.data])

  const handleDateRangeChange = ({ start, end }: { start: Date | null, end: Date | null }): void => {
    setSelectedDateRange({ start, end })
  }
  return (
    <Container>
      <StateSelection></StateSelection>
      <DateRangeSelector handleDateRangeChange={handleDateRangeChange}></DateRangeSelector>
      <HistoricalDataChart chartData={data}></HistoricalDataChart>
    </Container>
  )
}

export default HistoricalDataContainer
