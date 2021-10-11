import React from 'react';
import { StyleSheet, TextInput, ImageBackground, View, SafeAreaView, Button } from "react-native";

import colors from '../config/colors';

function RegisterScreen(props) {
    const [firstName, onChangeFirstName] = React.useState(null);
    const [lastName, onChangeLastName] = React.useState(null);
    const [username, onChangeUsername] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    return (
        <ImageBackground style={styles.background} resizeMode='cover' source={require('../assets/register-background.jpeg')}>
        <View style={styles.inputContainer}>
            <SafeAreaView />

            <TextInput
            style={styles.input}
            onChangeText={onChangeFirstName}
            placeholder="First Name"
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeLastName}
            placeholder="Last Name"
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeUsername}
            placeholder="Username"
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            secureTextEntry
            />
            <Button title="Submit" />
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    inputContainer: {
        backgroundColor: colors.container,
        justifyContent: 'center',
        alignItems: 'center',
        height: '40%',
        margin: 20,
        top: 50,
        borderRadius: 20
    },
    input: {
        height: 40,
        width: '95%',
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
    },
})

export default RegisterScreen;