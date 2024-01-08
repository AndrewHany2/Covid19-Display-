import React, { type ReactElement } from 'react'
import useFetch from '../../components/CustomHooks'
import BasicMenu from '../BasicMenu'
import { CircularProgress } from '@mui/material'

const StateSelection = (): ReactElement => {
  // Usage of custom hook for data fetching
  const { data, loading } = useFetch('https://api.covidtracking.com/v1/states/info.json')
  console.log('🚀 ~ file: StateSelection.tsx:7 ~ StateSelection ~ data:', data)

  if (loading) {
    return <CircularProgress color="inherit" />
  }

  return (
    <div>
    <BasicMenu title="States"></BasicMenu>
    </div>
  )
}

export default StateSelection
