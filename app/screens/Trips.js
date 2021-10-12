import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, View, Text, FlatList, ActivityIndicator} from 'react-native';
import { justifyContent } from 'styled-system';
import NavContainer from '../components/NavContainer.js';
import TripContainer from '../components/TripContainer.js';

function Trips({navigation}) {

    const [trips, setTrips] = useState([])

    const getTrips = async () => {
        const tripsResults = await fetch("http://10.0.0.89:9000/trips/");
        const parsedTrips = await tripsResults.json();
        setTrips(parsedTrips);
      }
    useEffect(() => {
    getTrips();
    }, []);
    return (
        <ImageBackground 
        style={styles.background}
        resizeMode='cover'
        source={require('../assets/trips-background.jpeg')}
        >
            <Text style={styles.text}>Trips: </Text>
            {/* <TripContainer navigation={navigation} trips={trips} /> */}
            {
                trips && trips.map(trip => (
                <TripContainer key={trip._id} tripName={trip.name} />
                ))
            } 

        <NavContainer style={styles.nav} navigation={navigation}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        top: 10,
        paddingBottom: 10
    },
})

export default Trips;