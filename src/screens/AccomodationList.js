import React, { useContext, useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import AccomodationCard from '../components/AccomodationCard'
import { StateContext } from '../state/State'
import { Searchbar } from 'react-native-paper'

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`

const ListContainer = styled(ScrollView)`
  flex: 1;
`

const AccomodationList = ({ navigation, route }) => {
  const [search, setSearch] = useState('')
  const state = useContext(StateContext)
  const params = route.params
  return (
    <Container>
      <ListContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={(text) => setSearch(text)}
          value={search}
        />
        {state.data[params.data]
          .filter((a) => a.title.toLowerCase().includes(search.toLowerCase()))
          .map((a, i) => (
            <AccomodationCard
              key={i}
              navigation={navigation}
              route={route}
              accomodationInfo={a}
            />
          ))}
      </ListContainer>
    </Container>
  )
}

export default AccomodationList
