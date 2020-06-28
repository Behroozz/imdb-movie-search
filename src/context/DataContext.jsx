import React, { createContext, useState } from 'react'

export const DataContext = createContext()

export const DataContextProvider = props => {
  
  const [term, setTerm] = useState('')
  const [data, setData] = useState([])

  return (
    <DataContext.Provider value={
      { 
        term: [term, setTerm],
        data: [data, setData]
      }
    }>
      {props.children}
    </DataContext.Provider>
  )
}