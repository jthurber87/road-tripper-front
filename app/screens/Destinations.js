import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, View, Text, FlatList, ActivityIndicator} from 'react-native';
import { justifyContent } from 'styled-system';
import NavContainer from '../components/NavContainer.js';
import TripContainer from '../components/TripContainer.js';

function Destinations({navigation}) {

    

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
        source={require('../assets/map-background.jpeg')}
        >
            <Text style={styles.text}>Trips: </Text>
            {
                trips && trips.map(trip => (
                    <TripContainer key={trip._id} tripName={trip.name}/> 
                ))
            } 
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