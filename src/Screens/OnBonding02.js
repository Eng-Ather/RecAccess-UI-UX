import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ScreenLayout from '../Constants/ScreenLayout'
import { Button, Heading } from '../Components'
import { onBonding02 } from '../Constants/Images'
import Typography from '../Constants/Typography'

const OnBonding02 = () => {
  const navigation = useNavigation()
  return (
    <View style={ScreenLayout.container}>


      <View>
        <Image
          source={onBonding02}
          style={styles.img}
        />
      </View>


      <View style={{ height: 72 }}>
        <Heading children="Say hi to your new crew!" />
      </View>

      <View style={{ width: 255, height: 65 }}>
        <Text style={[Typography.plainText, { textAlign: "center" }]}>
          Reconnect with the outdoors through reccess!
        </Text>
      </View>

      <View style={{ marginTop: 24, width: '90%' }}>
        <Button fntweight="900" bgColor="white" buttonText="Next"
          onPress={() => navigation.navigate("OnBonding03")}
        />
      </View>


    </View>
  )
}

export default OnBonding02

const styles = StyleSheet.create({})