import React, { useEffect } from 'react'; 
import { StyleSheet, Image, View } from 'react-native';
import ScreenLayout from '../Constants/ScreenLayout';
import { Logo } from '../Constants/Images';



const Splash = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace("OnbondingSlider");
      }, 1500);
    });
  
  return (
    <View style={ScreenLayout.container}>
      <Image source={Logo} style={styles.logo} />
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
