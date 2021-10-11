import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import colors from '../config/colors.js'

function HomeScreen({navigation}) {
    const onMapPress = () => console.log("Map pressed")
    const onListPress = () => console.log("List pressed")
    const onCameraPress=()=>navigation.navigate('Images')

    return (
        <ImageBackground 
        style={styles.background}
        resizeMode='cover'
        source={require('../assets/map-background.jpeg')}
        >
            <View style={styles.iconContainer}>
            <TouchableOpacity onPress={onMapPress}>
                <Image onPress={onMapPress} style={styles.icon} source={require('../assets/map.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onListPress}>
                <Image style={styles.icon} source={require('../assets/list.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCameraPress}>
                <Image style={styles.icon} source={require('../assets/camera.png')}/>
            </TouchableOpacity>
            </View>
            <SafeAreaView />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        top: 20
    },
    iconContainer: {
        backgroundColor: colors.container,
        flexDirection: 'row',
        width: '95%',
        height: 70,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    icon: {
        width: 50,
        height: 50,
    }
})

export default HomeScreen;