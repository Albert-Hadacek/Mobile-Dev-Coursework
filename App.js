import React from 'react'
import { StateProvider } from './src/state/State'
import CaminosList from './src/screens/CaminosList'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import Map from './src/screens/Map'
import StagesList from './src/screens/StagesList'
import AccomodationList from './src/screens/AccomodationList'
import AccomodationDetail from './src/screens/AccomodationDetail'

const Tab = createBottomTabNavigator()
const CaminosStack = createStackNavigator()

const TAB_ICON = {
  Map: 'md-map',
  Caminos: 'md-walk',
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

const CaminosNavigator = () => (
  <CaminosStack.Navigator>
    <CaminosStack.Screen
      name={'Caminos'}
      component={CaminosList}
      options={{
        title: 'Caminos',
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
    />
    <CaminosStack.Screen
      name={'Stages'}
      component={StagesList}
      options={{
        title: 'Stages',
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
    />
    <CaminosStack.Screen
      name={'Accomodation'}
      component={AccomodationList}
      options={{
        title: 'Accomodation',
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
    />
    <CaminosStack.Screen
      name={'Detail'}
      component={AccomodationDetail}
      options={{
        title: 'Accomodation Detail',
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
    />
  </CaminosStack.Navigator>
)

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  }
}

export default function App() {
  return (
    <StateProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: 'orange',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Caminos" component={CaminosNavigator} />
          <Tab.Screen name="Map" component={Map} />
        </Tab.Navigator>
      </NavigationContainer>
      <ExpoStatusBar style="auto" />
    </StateProvider>
  )
}
