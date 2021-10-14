import React, {useState, useEffect} from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import NavContainer from '../components/NavContainer.js';
import colors from '../config/colors.js';

function Checklist({oneTrip}) {
   
    return (
        <ImageBackground 
        style={styles.background}
        resizeMode='cover'
        source={require('../assets/checklist-background.jpeg')}
        >

            {
                oneTrip && oneTrip.route.params.oneTrip.checklist.map(checklist => (
                    <View style={styles.box}>
                        <Text key={checklist.id} style={styles.text}>{checklist}</Text>
                    </View>
                ))
            } 
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    text: {
        fontSize: 25,
        top: 10,
        paddingBottom: 10
    },
    box: {
        borderRadius: 10,
        height: 40,
        width: '95%',
        justifyContent: 'center',
        backgroundColor: colors.container,
        margin: 5,
        paddingLeft: 10
    }
})

export default Checklist;