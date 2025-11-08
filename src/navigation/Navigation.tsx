import React,{FC} from 'react';
import {NavigationContainer}from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from '../modules/Home/index';
import Splash from '../modules/Onboard/index';
import { navigationRef } from './NavigationUtils';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const Navigation:FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
        initialRouteName='Splash'
        >
            <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name='MainNavigator' component={MainNavigator}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation