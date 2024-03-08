import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import {routeNames} from '../constants/screenNames';
import SplashScreen from 'react-native-splash-screen';

// Creating stack navigation instance
const Stack = createNativeStackNavigator();

// Navigation Component for entire app's screens
const Navigation = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routeNames.HOME}>
        <Stack.Screen name={routeNames.HOME} component={Home} />
        <Stack.Screen name={routeNames.DETAILS} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
