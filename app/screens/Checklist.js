import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import NavContainer from '../components/NavContainer.js';
import colors from '../config/colors.js';

function Checklist({oneTrip}) {
    const foundChecklist = oneTrip.route.params.oneTrip.checklist
    return (
        <ImageBackground 
        style={styles.background}
        resizeMode='cover'
        source={require('../assets/checklist-background.jpeg')}
        >
        <SafeAreaView />
        
        <View key={oneTrip._id} style={styles.box}>
            <Text key={oneTrip._id} style={styles.text}>Checklist for {oneTrip.route.params.oneTrip.name}</Text>
        </View>
            {
                oneTrip && foundChecklist.map(checklist => (
                    <View key={checklist._id} style={styles.todo}>
                        <Text key={checklist._id} onLongPress={()=>console.log("Delete")} style={styles.todoText}>
                        {checklist}
                        </Text>
                    </View>
                ))
            } 
            <TextInput style={styles.todo} onSubmitEditing= {()=>{onEdit()}} placeholder="Add item"/>        
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
        paddingTop: 8,
    },
    todo: {
        borderRadius: 10,
        height: 30,
        width: '90%',
        backgroundColor: colors.secondary,
        // marginLeft: 15,
        marginTop: 5, 
        top: 15,
        paddingLeft: 10
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
        paddingLeft: 10
    },
})

export default Checklist;