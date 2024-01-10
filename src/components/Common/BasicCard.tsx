import React, { type ReactElement } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'

interface PropsType {
  title: string
  count: string
  date: string
  desc: string
}
const Container = styled.div`
margin: 10px
`
export default function BasicCard (props: PropsType): ReactElement {
  const { title, count, date, desc } = props
  return (
    <Container>
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="div">
            {count ?? 'Unknown'}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {date}
          </Typography>
          <Typography variant="body2">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}
