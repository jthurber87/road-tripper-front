import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import NavContainer from '../components/NavContainer.js';
import colors from '../config/colors.js';

const TripContext = React.createContext()

function Trips({navigation}) {
    
    const [trips, setTrips] = useState()

    const getTrips = async () => {
        const tripsResults = await fetch("http://10.0.0.89:9000/trips/");
        const parsedTrips = await tripsResults.json();
        setTrips(parsedTrips);
      }
      
    const selectTrip = async(id) => {
        const foundTrip = await fetch("http://10.0.0.89:9000/trips/" + id)
        const parsedTrip = await foundTrip.json()
        navigation.navigate("MainScreen", {
            oneTrip: parsedTrip
        })
    }


    const deleteTrip = async (id) => {
        const foundTrip = await fetch("http://10.0.0.89:9000/trips/" + id)
        const parsedTrip = await foundTrip.json()
        console.log(parsedTrip)
    }

    useEffect(() => {
        getTrips();
    }, [trips]);

    return (
        <ImageBackground 
        style={styles.background}
        resizeMode='cover'
        source={require('../assets/trips-background.jpeg')}
        >
            <Text style={styles.text}>Trips: </Text>
            {
                trips && trips.map(trip => (
                <TouchableOpacity 
                    style={styles.tripBox} 
                    trip={trip} 
                    key={trip._id}
                    onPress={()=>selectTrip(trip._id)}
                    onLongPress={()=>deleteTrip(trip._id)}>
                    <Text style={styles.containerText}>
                        {trip.name}
                    </Text>
                </TouchableOpacity>
                ))
            } 
            {/* <TextInput
                style={styles.input}
                onChangeText={onChangeUsername}
                value={username}
                placeholder="Username"
                /> */}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: 10,
        top: 10,
        color: colors.secondary
    },
    tripBox: {
        borderRadius: 10,
        height: 40,
        width: '95%',
        backgroundColor: colors.container,
        margin: 5,
        top: 20
    },
    containerText: {
        fontSize: 20, 
        padding: 10  
    }
})

export default Trips;