import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, TextInput, Alert} from 'react-native';
// import NavContainer from '../components/NavContainer.js';
import colors from '../config/colors.js';


function Trips({navigation}) {

    const [trips, setTrips] = useState()
    const [input, setInput] = useState({
        name: ""
    })

    const getTrips = async () => {
        const tripsResults = await fetch("https://roadtripper-back.herokuapp.com/trips/");
        const parsedTrips = await tripsResults.json();
        setTrips(parsedTrips);
      }

    const selectTrip = async (id) => {
        const foundTrip = await fetch("https://roadtripper-back.herokuapp.com/trips/" + id)
        const parsedTrip = await foundTrip.json()
        navigation.navigate("MainScreen", {
            oneTrip: parsedTrip
        })
    }

    const confirmDelete = async (id) => {
        const foundTrip = await fetch("https://roadtripper-back.herokuapp.com/trips/" + id)
        const parsedTrip = await foundTrip.json()
        Alert.alert(
            `Delete ${parsedTrip.name}?`,
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { 
                    text: "Delete", onPress: async() => {
                        const deleteTrip = await fetch("https://roadtripper-back.herokuapp.com/trips/" + id, {
                        method: 'DELETE',
                    })}
                    }
                
            ]
        )
    }
                

    useEffect(() => {
        getTrips();
    }, [trips]);

    const newTrip = async(input) => {
        await fetch("https://roadtripper-back.herokuapp.com/trips/", {
            method: "POST",
            body: JSON.stringify(input),
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    return (
        <ImageBackground
        style={styles.background}
        resizeMode='cover'
        source={require('../assets/bus-background.jpeg')}
        >
            {
                trips && trips.map(trip => (
                <TouchableOpacity
                    style={styles.box}
                    // trip={trip}
                    key={trip._id}
                    onPress={()=>selectTrip(trip._id)}
                    onLongPress={()=>confirmDelete(trip._id)}>
                    <Text key={trip._id} style={styles.containerText}>
                        {trip.name}
                    </Text>
                </TouchableOpacity>
                ))
            }
                <TextInput style={styles.inputBox} onChangeText={text=>{setInput({ ...input, ["name"]:text})}} onSubmitEditing={()=>{newTrip(input)}} placeholder="Add a trip"/>
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
    containerText: {
        color: colors.secondary,
        fontSize: 20,
        paddingTop: 8,
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

export default Trips;