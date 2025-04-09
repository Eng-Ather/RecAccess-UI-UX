import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../Screens/Splash'
import OnboardingSlider from '../Screens/OnBondingSlider'
import Login1 from '../Screens/Login1'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}} >
       
            <Stack.Screen name="Splash" component={Splash} /> 
            <Stack.Screen name="OnbondingSlider" component={OnboardingSlider} />
            <Stack.Screen name="Login1" component={Login1}/>
            </Stack.Navigator>
           
    </NavigationContainer>
  )
}
export default AppNavigator

