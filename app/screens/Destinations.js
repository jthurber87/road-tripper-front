import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, View, Text, ScrollView, SafeAreaView} from 'react-native';
import NavContainer from '../components/NavContainer';
import colors from '../config/colors';

function Destinations({route, navigation}) {
    const { oneTrip } = route.params
    return (
        <ImageBackground 
        style={styles.background}
        resizeMode='cover'
        source={require('../assets/map-background.jpeg')}
        >
            <Text style={styles.text}>Destinations: </Text>
                {/* <ScrollView style={styles.scrollView}> */}
            {
                oneTrip && oneTrip.destinations.map(destination => (
                    <Text key={destination._id} style={styles.text}>{destination.name}</Text>
                ))
            } 
                {/* </ScrollView> */}
            <NavContainer navigation={navigation}/>
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
        top: 10,
        paddingBottom: 10
    },
    scrollView: {
        width: '80%',
        padding: 10,
        backgroundColor: colors.container
    }
})

export default Destinations;