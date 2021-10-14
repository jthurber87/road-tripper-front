import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, View, Text, ScrollView, SafeAreaView} from 'react-native';
import NavContainer from '../components/NavContainer';
import colors from '../config/colors';



function Destinations({oneTrip}) {

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
            <View style={styles.box}><Text style={styles.text}>Add a destination</Text></View>
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

export default Destinations;