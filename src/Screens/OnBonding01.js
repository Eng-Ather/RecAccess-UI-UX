import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import onbonding01image from "../Assets/Images/onbonding01image.png"
import ScreenLayout from "../Constants/ScreenLayout.js"
import Typography from '../Constants/Typography.js'
import { useNavigation } from '@react-navigation/native'
// import { Button, Heading } from '../Components/Index.js'
import { Button, Heading } from '../Components/index.js'

const OnBonding01 = () => {
  const navigation = useNavigation();
  return (
    <View style={ScreenLayout.container}>
      

      {/* <View style={{width:"100%",padding:3}}> */}
      <View style={{ width: "100%", padding: 3 }}>

        <Image
          source={onbonding01image}
          style={styles.img}
        />
      </View>


      <View style={{ width: 190, height: 72 }}>
        <Heading children="Meet people with same interests" />
      </View>

      <View style={{ width: 255, height: 65 }}>
        <Text style={[Typography.plainText, { textAlign: "center" }]}>
          Reccess gives you the oppurtunity to bond with people with same interests
        </Text>
      </View>

      <View style={{ marginTop: 24, width: '90%' }}>
        <Button buttonText="Continue" 
        onPress={()=>navigation.navigate("OnBonding02")}
        />
      </View>


    </View>
  )
}

export default OnBonding01

const styles = StyleSheet.create({

  img: {
    width: "100%",
    margin: "auto",
    height: "70%",
  }
})