import React from "react"
import {
    View,
    Text,
    Button
} from "react-native"



export default function Register({ navigation }){
    return(
        <View>
            <Text>This is the Register Page</Text>\
            <Button title="Go to Login" onPress={() => navigation.navigate('Login')} /> 
            <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} /> 
        </View>
    )
}

