import { Center } from 'native-base';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import colors from '../config/colors';

function TripContainer(props, {navigation}) {
    const {trips} = props
    console.log(trips[0].name)
    const onCameraPress=() => navigation.navigate("Images")
    return (
        <TouchableOpacity onPress={onCameraPress}>
            <View style={styles.tripBox}>
                <Text style={styles.text}>{trips[0].name}</Text>
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    tripBox: {
        width: '100%',
        borderRadius: 10,
        height: 40,
        backgroundColor: colors.container,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    text: {
        fontSize: 20,
        marginLeft: 10
    }
})

export default TripContainer;