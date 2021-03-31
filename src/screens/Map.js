import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import GMap from '../components/GMap'
import { StateContext } from '../state/State'

const getPoints = (data) => {
  const points = []
  for (let key in data) {
    for (let acc of data[key]) {
      if (acc.coords) {
        points.push({
          lat: acc.coords[0],
          long: acc.coords[1],
          title: acc.title || 'Albergue',
        })
      }
    }
  }
  return points
}

const Map = () => {
  const { data } = useContext(StateContext)
  return (
    <GMap
      lat={43.133}
      long={-7.067}
      points={getPoints(data)}
      iLatD={5}
      iLongD={5}
    />
  )
}

export default Map
