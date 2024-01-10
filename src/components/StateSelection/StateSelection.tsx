import React, { type ReactElement, useEffect } from 'react'
import useFetch from '../../components/CustomHooks'
import { CircularProgress } from '@mui/material'
import Select from 'react-select'
import styled from 'styled-components'
import { Box } from '@mui/system'
import { useSingleStateContext } from '../../context/SingleStateContext'

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
  const [singleStateStatics, setSingleStateStatics] = useSingleStateContext()

  const singleState = useFetch()

  useEffect(() => {
    singleState.fetch('https://api.covidtracking.com/v1/states/mn/current.json')
    fetch('https://api.covidtracking.com/v1/states/info.json')
  }, [])

  useEffect(() => {
    if (singleState.data) { setSingleStateStatics(singleState.data) }
  }, [singleState])

  if (loading) {
    return <Container><CircularProgress color="inherit" /></Container>
  }
  const handleChange = (value: ValueType): void => {
    if (value) {
      singleState.fetch(`https://api.covidtracking.com/v1/states/${value.value.toLocaleLowerCase()}/current.json`)
    }
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
        defaultValue={{ label: 'Minnesota', value: 'MN' }}
        onChange={handleChange}
        isClearable={true}
        backspaceRemovesValue={true}
      />
    </Box>
    </Container>
  )
}

export default StateSelection
