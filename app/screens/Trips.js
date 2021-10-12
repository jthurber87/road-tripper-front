import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, View, Text, FlatList, ActivityIndicator} from 'react-native';
import NavContainer from '../components/NavContainer.js';

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
        source={require('../assets/map-background.jpeg')}
        >

                <Text style={styles.text}>
                    Trips: {trips[0].name}
                </Text>

        <NavContainer navigation={navigation}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        bottom: '80%'
    }
})

export default Trips;