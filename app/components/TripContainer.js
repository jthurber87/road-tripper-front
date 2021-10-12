import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import colors from '../config/colors';

function TripContainer(props) {
    return (
        <View>
            <Text>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tripBox: {
        width: '90%',
        height: 40,
        backgroundColor: colors.container
    }
})

export default TripContainer;