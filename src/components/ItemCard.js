import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components/native'

const Card = styled(TouchableOpacity)`
  margin: 16px;
  flex: 1;
  justify-content: flex-end;
  height: 80px;
  border-radius: 10px;
  background-color: #d7d7d7;
`

const CardText = styled(Text)`
  color: white;
  font-size: 28px;
  font-weight: bold;
  margin: 10px;
`

const ItemCard = ({ title, navigation, where, data }) => {
  return (
    <Card elevation={5} onPress={() => navigation.push(where, { data })}>
      <CardText>{title}</CardText>
    </Card>
  )
}

export default ItemCard
