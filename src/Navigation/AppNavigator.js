import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../Screens/Splash'
import OnboardingSlider from '../Screens/OnBondingSlider'
import Login1 from '../Screens/Login1'
import Signup01 from '../Screens/Signup01'
import ForgetPassword01 from '../Screens/ForgetPasword01'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}} >
            <Stack.Screen name="Splash" component={Splash} /> 
            <Stack.Screen name="OnbondingSlider" component={OnboardingSlider} />
            <Stack.Screen name="Signup01" component={Signup01} />
            <Stack.Screen name="ForgetPassword01" component={ForgetPassword01} />
            <Stack.Screen name="Login1" component={Login1}/>
            </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigator

