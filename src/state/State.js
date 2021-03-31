import React, { createContext } from 'react'
import data from '../data'

export const StateContext = createContext()

export const StateProvider = ({ children }) => {
  const state = {
    data,
    caminos: ['Primitivo'],
  }
  return <StateContext.Provider value={state}>{children}</StateContext.Provider>
}
