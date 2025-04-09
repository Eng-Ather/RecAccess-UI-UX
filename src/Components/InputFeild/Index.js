import { StyleSheet,TextInput, View } from 'react-native'
import React from 'react'

const InputFeild = ({placeholder,icon}) => {
  return (
    <View style={styles.inputFeildContainer}>
        {icon && <View>{icon}</View>}
      <TextInput 
      placeholder={placeholder}
        placeholderTextColor="gray"
      style={styles.inputFieldStyle}
      />
    </View>
  )
}
export default InputFeild
const styles = StyleSheet.create({
    inputFeildContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth:1,
        borderColor:"gray",
        borderRadius:8,
        padding:3,
    },
//   icon: {
//     marginRight: 10,
//   },
  inputFieldStyle: {
    flex: 1,
    fontSize: 16,
    color:'black'
  },
})