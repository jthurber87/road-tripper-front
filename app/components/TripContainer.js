import { Center } from 'native-base';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import colors from '../config/colors';

function TripContainer(props) {
    const test = () => console.log("Going")
    return (
        <TouchableOpacity style={styles.tripBox} onPress={test}>
            <View >
                <Text style={styles.text}>{props.tripName}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    tripBox: {
        borderRadius: 10,
        height: 40,
        width: '95%',
        backgroundColor: colors.container,
        margin: 5
    },
    text: {
        fontSize: 20, 
        padding: 10  
    }
})

export default TripContainer;