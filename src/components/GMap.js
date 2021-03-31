import React from 'react'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
const GMap = ({ lat, long, title, points, iLatD, iLongD }) => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: Number(lat),
        longitude: Number(long),
        latitudeDelta: iLatD,
        longitudeDelta: iLongD,
      }}
    >
      {!points && (
        <Marker
          coordinate={{
            latitude: Number(lat),
            longitude: Number(long),
          }}
          title={title}
        />
      )}
      {points &&
        points.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: Number(marker.lat),
              longitude: Number(marker.long),
            }}
            title={marker.title}
          />
        ))}
    </MapView>
  )
}

export default GMap
