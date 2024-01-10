import React, { type ReactElement, createContext, useContext, useState, type ReactNode } from 'react'

interface SingleStateStaticsContextType {
  data: any
  setData: any
}
interface PropsType {
  children?: ReactNode
}
const SingleStateContext = createContext<any>(null)

export const SingleStateProvider = (props: PropsType): ReactElement => {
  const { children } = props
  const [data, setData] = useState({})
  // the value passed in here will be accessible anywhere in our application
  // you can pass any value, in our case we pass our state and it's update method
  return (
    <SingleStateContext.Provider value={[data, setData]}>
        {children}
    </SingleStateContext.Provider>
  )
}

// useToggleContext will be used to use and update state accross the app
// we can access to data and setData using this method
// anywhere in any component that's inside ToggleProvider
export const useSingleStateContext = (): any => useContext(SingleStateContext)
