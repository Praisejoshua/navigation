import React from "react"
import {
    View,
    Text,
    Button
} from "react-native"



export default function Profile({ navigation }) {
    return(
        <View>
            <Text>This is the Profile Page</Text>
            <Button title="Go to Login" onPress={() => navigation.navigate('Login')} /> 
            <Button title="Go to Register" onPress={() => navigation.navigate('Register')} /> 
        </View>
    )
}
