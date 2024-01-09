import React, { type ReactElement, useEffect } from 'react'
import useFetch from '../../components/CustomHooks'
import { CircularProgress } from '@mui/material'
import Select from 'react-select'
import styled from 'styled-components'
import { Box } from '@mui/system'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin:30px;
`
interface OptionType {
  label: string
  value: string
}
type ValueType = OptionType | null

const StateSelection = (): ReactElement => {
  const { data, loading, error, fetch } = useFetch()
  const singleState = useFetch()

  useEffect(() => {
    fetch('https://api.covidtracking.com/v1/states/info.json')
  }, [])

  if (loading) {
    return <Container><CircularProgress color="inherit" /></Container>
  }
  const handleChange = (value: ValueType): void => {
    if (value) { singleState.fetch(`https://api.covidtracking.com/v1/states/${value.value.toLocaleLowerCase()}/current.json`) }
  }
  return (
    <Container>
      <Box sx={{ minWidth: 300 }}>
        <Select
        options={data?.map((v: any) => {
          return {
            label: v.name,
            value: v.state
          }
        })}
        onChange={handleChange}
        isClearable={true}
        backspaceRemovesValue={true}
      />
    </Box>
    </Container>
  )
}

export default StateSelection
