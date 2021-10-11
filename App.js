// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import HomeScreen from './app/screens/HomeScreen';
import ImageSelect from './app/screens/ImageSelect';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={LoginScreen} /*options={{headerShown: false}}*/ />
          <Stack.Screen name="Register" component={RegisterScreen} /*options={{headerShown: false}}*/ />
          <Stack.Screen name="Home" component={HomeScreen} /*options={{headerShown: false}}*/ />
          <Stack.Screen name="Images" component={ImageSelect} /*options={{headerShown: false}}*/ />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

