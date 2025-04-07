
import React, { useEffect } from 'react'; 
import { StyleSheet, Image, View } from 'react-native';
import logo from "../Assets/Images/logo.png"; 
import ScreenLayout from '../Constants/ScreenLayout';
  const Splash = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace("OnBonding01");
      }, 1500);
    });
  
  return (
    <View style={ScreenLayout.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({

  logo: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain', 
  },
});
