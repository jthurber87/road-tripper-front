import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput} from 'react-native';
import NavContainer from '../components/NavContainer';
import colors from '../config/colors';



function Destinations({oneTrip}) {

    // function addDestination = ()
    return (
        <ImageBackground 
        style={styles.background}
        resizeMode='cover'
        source={require('../assets/map-background.jpeg')}
        >
            {/* <Text style={styles.text}>Destinations: </Text> */}
                {/* <ScrollView style={styles.scrollView}> */}
            {
                oneTrip && oneTrip.route.params.oneTrip.destinations.map(destination => (
                    <View style={styles.box}>
                    <Text key={destination._id} style={styles.text}>{destination.name}</Text>
                    </View>
                ))
            } 
                {/* </ScrollView> */}
            {/* <NavContainer navigation={navigation}/>  */}
            <TextInput style={styles.inputBox} onSubmit={console.log("Submitted")} placeholder="Add a destination"/>        
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    box: {
        borderRadius: 10,
        height: 40,
        width: '95%',
        backgroundColor: colors.primary,
        margin: 5,
        top: 20,
        paddingLeft: 10
    },
    text: {
        color: colors.secondary,
        fontSize: 20,
        paddingTop: 8
    },
    inputBox: {
        borderRadius: 10,
        height: 40,
        width: '95%',
        backgroundColor: colors.secondary,
        margin: 5,
        top: 20,
        paddingLeft: 10
    }
})

export default Destinations;