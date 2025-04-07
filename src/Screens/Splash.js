
import React, { useEffect } from 'react'; 
import { StyleSheet, Image, View } from 'react-native';
import logo from "../Assets/Images/logo.png"; 

  const Splash = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace("OnBonding01");
      }, 3000);
    });
  
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
    borderColor:"red",
    borderWidth: 2,        
    borderRadius: 10, 
  },
  logo: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain', 
  },
});
