import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, View, Text} from 'react-native';
import NavContainer from '../components/NavContainer';


function Destinations({route, navigation}) {
    const { oneTrip } = route.params
    return (
        <ImageBackground 
        style={styles.background}
        resizeMode='cover'
        source={require('../assets/map-background.jpeg')}
        >
            <Text style={styles.text}>Destinations: </Text>
            {
                oneTrip && oneTrip.destinations.map(destination => (
                    <Text style={styles.text}>{destination.name}</Text>
                ))
            } 
            <NavContainer />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        top: 10,
        paddingBottom: 10
    },
})

export default Destinations;