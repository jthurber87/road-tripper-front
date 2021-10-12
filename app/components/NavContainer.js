import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import colors from '../config/colors.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


function NavContainer({navigation}) {
    const onMapPress = () => navigation.navigate("Trips")
    const onListPress = () => navigation.navigate("Checklist")
    const onCameraPress=()=>navigation.navigate("Images")

    return (
        <>
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
        </>
    );
}

const styles = StyleSheet.create({
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
export default NavContainer;