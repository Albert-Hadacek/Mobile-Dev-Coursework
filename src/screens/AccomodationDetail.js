import React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, ScrollView, Linking, Text } from 'react-native'
import { DataTable, Button, Card, View } from 'react-native-paper'
import GMap from '../components/GMap'

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`

const ListContainer = styled(ScrollView)`
  flex: 1;
`

const MapContainer = styled.View`
  margin-top: 25px;
  flex: 1;
  height: 350px;
`

const AccomodationDetail = ({ navigation, route }) => {
  const {
    title,
    phone,
    city,
    web,
    coords,
    accomodation,
    booking,
    priceShared,
    openingTime,
    tempClosed,
    img,
  } = route.params.accomodationInfo

  const image = img
    ? img
    : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'

  const handleOpenWeb = (url) => {
    Linking.openURL(url)
  }
  return (
    <Container>
      <ListContainer>
        <Card>
          <Card.Cover source={{ uri: image }} />
        </Card>
        <DataTable>
          {title && (
            <DataTable.Row>
              <DataTable.Cell>Name</DataTable.Cell>
              <DataTable.Cell>{title}</DataTable.Cell>
            </DataTable.Row>
          )}
          {phone && (
            <DataTable.Row>
              <DataTable.Cell>Phone</DataTable.Cell>
              <DataTable.Cell>{phone}</DataTable.Cell>
            </DataTable.Row>
          )}
          {tempClosed && (
            <DataTable.Row>
              <DataTable.Cell>Closed</DataTable.Cell>
              <DataTable.Cell>YES</DataTable.Cell>
            </DataTable.Row>
          )}
          {city && (
            <DataTable.Row>
              <DataTable.Cell>City</DataTable.Cell>
              <DataTable.Cell>{city}</DataTable.Cell>
            </DataTable.Row>
          )}
          {accomodation.map((acc, i) => {
            return (
              <DataTable.Row key={i}>
                <DataTable.Cell>
                  {acc.type === 'shared' ? 'Shared' : 'Private'}
                </DataTable.Cell>
                <DataTable.Cell>
                  {acc.amount} {acc.amount > 1 ? 'beds' : 'bed'}
                </DataTable.Cell>
              </DataTable.Row>
            )
          })}
          {web && (
            <DataTable.Row>
              <DataTable.Cell>Website</DataTable.Cell>
              <DataTable.Cell>
                <Button
                  compact
                  mode={'contained'}
                  color={'orange'}
                  onPress={() => handleOpenWeb(web)}
                >
                  Open
                </Button>
              </DataTable.Cell>
            </DataTable.Row>
          )}
          {booking && (
            <DataTable.Row>
              <DataTable.Cell>Booking</DataTable.Cell>
              <DataTable.Cell>
                <Button
                  compact
                  mode={'contained'}
                  color={'orange'}
                  onPress={() => handleOpenWeb(booking)}
                >
                  Open
                </Button>
              </DataTable.Cell>
            </DataTable.Row>
          )}
          {openingTime && (
            <DataTable.Row>
              <DataTable.Cell>Opening Time</DataTable.Cell>
              <DataTable.Cell>{openingTime}</DataTable.Cell>
            </DataTable.Row>
          )}
          {priceShared && (
            <DataTable.Row>
              <DataTable.Cell>Price (shared)</DataTable.Cell>
              <DataTable.Cell>{priceShared}</DataTable.Cell>
            </DataTable.Row>
          )}
        </DataTable>
        {coords && (
          <MapContainer>
            <GMap
              lat={coords[0]}
              long={coords[1]}
              title={title}
              points={null}
              iLatD={0.0922}
              iLongD={0.0421}
            />
          </MapContainer>
        )}
      </ListContainer>
    </Container>
  )
}

export default AccomodationDetail
