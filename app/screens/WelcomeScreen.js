import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../config/colors.js'

function WelcomeScreen({navigation}) {

    const onLoginPress=()=>navigation.navigate('Login')
    const onRegisterPress=()=>navigation.navigate('Register')
    const onTestPress=()=>navigation.navigate('Trips')

    return (

        <ImageBackground 
        style={styles.background}
        resizeMode='cover'
        source={require('../assets/background.jpeg')}
        >
            <TouchableOpacity onPress={onTestPress} style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/camper.png')} />
                <Text style={styles.text}>Road Tripper</Text>
            </TouchableOpacity>
        <SafeAreaView>
            <View onPress={onLoginPress} style={styles.loginButton}>
                <Text onPress={onLoginPress} style={styles.loginText}>Log In</Text>
            </View>
            <View onPress={onRegisterPress} style={styles.registerButton}>
                <Text onPress={onRegisterPress} style={styles.registerText}>Register</Text>
            </View>
        </SafeAreaView>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: '100%'
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: colors.primary,
    },
    registerButton: {
        width: '100%',
        height: 50,
        backgroundColor: colors.secondary,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50
    },
    logo: {
        bottom: -35
    },
    text: {
        fontSize: 25,
        // textAlign: 'center',
        // top: 10
    },
    loginText: {
        fontSize: 25,
        textAlign: 'center',
        top: 10,
        color: colors.secondary
    },
    registerText: {
        fontSize: 25,
        textAlign: 'center',
        top: 10,
        color: colors.primary
    }
})

export default WelcomeScreen;