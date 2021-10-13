import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import Trips from './app/screens/Trips';
import Destinations from './app/screens/Destinations';
import ImageSelect from './app/screens/ImageSelect';
import Checklist from './app/screens/Checklist';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={LoginScreen} /*options={{headerShown: false}}*/ />
          <Stack.Screen name="Register" component={RegisterScreen} /*options={{headerShown: false}}*/ />
          <Stack.Screen name="Trips" component={Trips}/*options={{headerShown: false}}*/ />
          <Stack.Screen name="Destinations" component={Destinations} /*options={{headerShown: false}}*/ />
          <Stack.Screen name="Checklist" component={Checklist} /*options={{headerShown: false}}*/ />
          <Stack.Screen name="Images" component={ImageSelect} /*options={{headerShown: false}}*/ />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

