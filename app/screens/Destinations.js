import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import colors from '../config/colors';

function Destinations({oneTrip}) {

    const foundDestinations = oneTrip.route.params.oneTrip.destinations
    
    const [destInput, setDestInput] = useState({
        destinations: ""
    })
    const [todoInput, setTodoInput] = useState({
        todo: ""
    })

    const newDestination = async(input) => {
        console.log(input)
        await fetch("https://roadtripper-back.herokuapp.com/trips/" + oneTrip.id, {
            method: "PUT",
            body: JSON.stringify(input),
            headers: {
                "Content-Type": "application/json",
                // "Access-Control-Allow-Origin": "*"
            }
        })
    }

    const newTodo = async(input) => {
        console.log(input)
        await fetch("https://roadtripper-back.herokuapp.com/trips/" + oneTrip.id, {
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
        <SafeAreaView />
        <ScrollView style={styles.scrollBox}>
            {
                foundDestinations && foundDestinations.map(destination => (
                    <>
                        <TouchableOpacity style={styles.box} key={destination._id}>
                            <Text style={styles.text} key={destination._id} onLongPress={()=>console.log("Delete")}>
                                {destination.name}
                            </Text>
                        </TouchableOpacity>
                        {
                            
                            destination.todo && destination.todo.map(todo=>(
                                <View style={styles.todo}>
                                    <Text style={styles.todoText}>
                                        {todo}
                                    </Text>
                                </View>

                            ))
                        }
                        <TextInput style={styles.todo} autoCorrect={false} onChangeText={text=>{setTodoInput({ ...todoInput, ["todo"]:text})}} onSubmitEditing={()=>{newTodo(todoInput)}} placeholder="Add Todo"/> 
                    </>
                ))
            }
            <TextInput style={styles.inputBox} autoCorrect={false} onChangeText={text=>{setDestInput({ ...destInput, ["destinations"]:text})}} onSubmitEditing={()=>{newDestination(destInput)}} placeholder="Add a Destination"/> 
        </ScrollView>
                
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
    todo: {
        borderRadius: 10,
        height: 30,
        width: '90%',
        backgroundColor: colors.secondary,
        marginLeft: 15,
        marginTop: 5, 
        top: 15,
        paddingLeft: 10
    },
    text: {
        color: colors.secondary,
        fontSize: 20,
        paddingTop: 8,
    },
    todoText: {
        color: colors.primary,
        fontSize: 15,
        paddingTop: 5,
    },
    inputBox: {
        borderRadius: 10,
        height: 40,
        width: '95%',
        backgroundColor: colors.secondary,
        margin: 5,
        top: 20,
        paddingLeft: 10,
        marginBottom: 50
    },
    scrollBox: {
        flex: 1,
        height: '90%',
        width: '95%'
    }
})

export default Destinations;
