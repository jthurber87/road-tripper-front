import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Destinations from './Destinations';
import Checklist from './Checklist';
import ImageSelect from './ImageSelect';

const Tab = createBottomTabNavigator();

export default function MainScreen (oneTrip) {


  return (
    <Tab.Navigator initialRouteName="Destinations">
      <Tab.Screen name="Destinations" children={()=><Destinations oneTrip={oneTrip}/>}/>
      <Tab.Screen name="Checklist" children={()=><Checklist oneTrip={oneTrip}/>}/>
      <Tab.Screen name="Images" children={()=><ImageSelect oneTrip={oneTrip}/>}/>
    </Tab.Navigator>
  );
}

