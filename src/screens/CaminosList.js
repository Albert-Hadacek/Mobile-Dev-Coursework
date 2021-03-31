import React, { useContext } from 'react'
import { SafeAreaView, ScrollView, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import ItemCard from '../components/ItemCard'
import { StateContext } from '../state/State'

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`

const ListContainer = styled(ScrollView)`
  flex: 1;
`

const CaminosList = ({ navigation }) => {
  const { caminos } = useContext(StateContext)
  return (
    <Container>
      <ListContainer>
        {caminos.map((c, i) => (
          <ItemCard
            key={i}
            title={c}
            navigation={navigation}
            where={'Stages'}
            data={'Primitivo'}
          />
        ))}
      </ListContainer>
    </Container>
  )
}

export default CaminosList
