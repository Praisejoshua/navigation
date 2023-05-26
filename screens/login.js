import React from "react"
import {
    View,
    Text,
    Button
} from "react-native"


export default function Login({ navigation }){
    return(
        <View>
            <Text>This is the Login Page</Text>
            <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} /> 
            <Button title="Go to Register" onPress={() => navigation.navigate('Register')} /> 
        </View>
    ) 
}

