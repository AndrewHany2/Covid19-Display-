import React, { useState, type ReactElement } from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { routes } from './routes'
import { SingleStateProvider } from './context/SingleStateContext'
import Navbar from './components/Navbar'

const router = createBrowserRouter(routes)

function App (): ReactElement {
  return (
    <SingleStateProvider>
        <Navbar></Navbar>
        <RouterProvider router={router} />
    </SingleStateProvider>
  )
}

export default App
