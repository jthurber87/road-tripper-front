import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import NavContainer from '../components/NavContainer';
import colors from '../config/colors';



function Destinations({oneTrip}) {
    const foundDestinations = oneTrip.route.params.oneTrip.destinations
    const [input, setInput] = useState({
        destinations: ""
    })

    const newDestination = async(input) => {
        const trip = await fetch("https://roadtripper-back.herokuapp.com/trips/"+id, {
            method: "PUT",
            body: JSON.stringify(input),
            headers: {
                "Content-Type": "application/json",
                // "Access-Control-Allow-Origin": "*"
            }
        })
    }

    return (
        <ImageBackground 
        style={styles.background}
        resizeMode='cover'
        source={require('../assets/map-background.jpeg')}
        >
            {
                oneTrip && foundDestinations.map(destination => (
                    <TouchableOpacity
                    style={styles.box}
                    key={destination._id}
                    >
                    <Text key={destination._id} onLongPress={()=>console.log("Delete")} style={styles.text}>
                        {destination.name}
                    </Text>
                </TouchableOpacity>
                ))
            } 
                
            <TextInput style={styles.inputBox} autoCorrect={false} onChangeText={text=>{setInput({ ...input, ["destinations"]:text})}} onSubmitEditing={()=>{newDestination(input)}} placeholder="Add a Destination"/> 
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