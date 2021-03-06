import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import colors from '../config/colors.js'


function NavContainer({navigation}) {
    const onMapPress = () => navigation.navigate("Destinations")
    const onListPress = () => navigation.navigate("Checklist")
    const onCameraPress=() => navigation.navigate("Images")

    return (
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
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: colors.container,
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignItems: 'flex-end'
    },
    icon: {
        width: 50,
        height: 50,
    }
})
export default NavContainer;