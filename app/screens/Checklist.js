import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput} from 'react-native';
import NavContainer from '../components/NavContainer.js';
import colors from '../config/colors.js';

function Checklist({oneTrip}) {
    const onEdit = ()=>console.log("Yep")
    return (
        <ImageBackground 
        style={styles.background}
        resizeMode='cover'
        source={require('../assets/checklist-background.jpeg')}
        >

            {
                oneTrip && oneTrip.route.params.oneTrip.checklist.map(checklist => (
                    <View key={checklist._id} style={styles.box}>
                        <Text key={checklist._id} onLongPress={()=>console.log("Delete")} style={styles.text}>
                        {checklist}
                    </Text>
                    </View>
                ))
            } 
            <TextInput style={styles.inputBox} onSubmitEditing= {()=>{onEdit()}} placeholder="Add item"/>        
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

export default Checklist;