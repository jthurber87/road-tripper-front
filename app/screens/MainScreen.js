import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Destinations from './Destinations';
import Checklist from './Checklist';
import ImageSelect from './ImageSelect';
import Trips from './Trips';

const Tab = createBottomTabNavigator();

export default function MainScreen (oneTrip) {


  return (
    <Tab.Navigator initialRouteName="Destinations">
      <Tab.Screen
          name="Destinations"
          children={()=><Destinations oneTrip={oneTrip}/>}
          screenOptions={{unmountOnBlur: false}}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require('../assets/map.png')}
                style={{
                  width: size,
                  height: size
                }}
              />
            ),
            headerShown: false
          }}
        />
      <Tab.Screen
          name="Checklist"
          children={()=><Checklist oneTrip={oneTrip}/>}
          screenOptions={{unmountOnBlur: false}}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require('../assets/list.png')}
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),
            headerShown: false
          }}
        />
      <Tab.Screen
          name="Images"
          children={()=><ImageSelect oneTrip={oneTrip}/>}
          screenOptions={{unmountOnBlur: false}}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require('../assets/camera.png')}
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),
            headerShown: false

          }}
        />
    </Tab.Navigator>
  );
}

