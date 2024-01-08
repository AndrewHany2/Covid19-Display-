import Dashboard from './pages/Dashboard'
import { type RouteObject } from 'react-router-dom' // Assuming you're using react-router-dom

export const routes: RouteObject[] = [
  {
    path: '/',
    element: Dashboard()
  }
]
