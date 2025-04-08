import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../Screens/Splash'
import ForgetPassword from '../Screens/ForgetPasword'
import OnBonding01 from '../Screens/OnBonding01'
import OnBonding02 from '../Screens/OnBonding02'
import OnBonding03 from '../Screens/OnBonding03'
import OnboardingSlider from '../Screens/OnBondingSlider'
import Login1 from '../Screens/Login1'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}} >
       
        {/* <Stack.Navigator initialRouteName="Splash"> */}
            <Stack.Screen name="Splash" component={Splash} /> 
            <Stack.Screen name="OnbondingSlider" component={OnboardingSlider} />
            <Stack.Screen name="Login1" component={Login1}/>
            <Stack.Screen name = "OnBonding01" component={OnBonding01} />
            <Stack.Screen name ="OnBonding02" component={OnBonding02}  />
            <Stack.Screen name="OnBonding03" component={OnBonding03} />
            
             {/* <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown:true}}/>             */}

            </Stack.Navigator>

           
    </NavigationContainer>
  )
}

export default AppNavigator

