import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Instructions from '../screens/Instructions';
import GameScreen from '../screens/GameScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{
        backgroundColor:'skyblue'
      }}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Instructions" component={Instructions} options={{headerShown: true}}/>
        <Stack.Screen name="Game" component={GameScreen} options={{headerShown: true, title:'Number Guessing Game'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


