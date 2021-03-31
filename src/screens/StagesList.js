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

const StagesList = ({ navigation }) => {
  const { data } = useContext(StateContext)
  return (
    <Container>
      <ListContainer>
        {Object.keys(data).map((s, i) => (
          <ItemCard
            key={i}
            title={`Stage ${s}`}
            navigation={navigation}
            where={'Accomodation'}
            data={s}
          />
        ))}
      </ListContainer>
    </Container>
  )
}

export default StagesList
