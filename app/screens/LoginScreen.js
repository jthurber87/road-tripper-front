import React from 'react';
import { StyleSheet, TextInput, ImageBackground, View, SafeAreaView, Button } from "react-native";
import colors from '../config/colors.js'

function LoginScreen(props) {
    const [username, onChangeUsername] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    return (
        <ImageBackground 
            style={styles.background} 
            resizeMode='cover' 
            source={require('../assets/login-background.jpeg')}
        >
            <SafeAreaView />
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                onChangeText={onChangeUsername}
                value={username}
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
        height: '25%',
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

export default LoginScreen;