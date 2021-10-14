import React, {useState, useEffect} from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import NavContainer from '../components/NavContainer.js';

function Checklist({navigation}) {
   
    return (
        <ImageBackground 
        style={styles.background}
        resizeMode='cover'
        source={require('../assets/checklist-background.jpeg')}
        >
            <FlatList>
                
            </FlatList>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        top: 20
    }
})

export default Checklist;