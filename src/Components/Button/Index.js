
import React from "react"
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import Typography from "../../Constants/Typography"

// import Heading from "../../Components/index"
const Button = ({buttonText="submit",onPress})=>{

    return(
            <TouchableOpacity 
            onPress={onPress}
            style={Styles.buttonStyle}>
                <Text style={{color:"white"}}>{buttonText}</Text>
            </TouchableOpacity>
    )
}
export default Button

const Styles = StyleSheet.create({
    buttonStyle:{
        width:"100%",
        alignItems:"center",
        height:46,
        borderRadius:8,
        justifyContent:"center",
        backgroundColor:"black"

    }
})