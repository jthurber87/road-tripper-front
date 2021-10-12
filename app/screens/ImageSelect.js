import React, {useState, useEffect} from 'react';
import * as ImagePicker from 'expo-image-picker'
import {ImageBackground, StyleSheet, View, SafeAreaView, Platform, Image, Text} from 'react-native';
import colors from '../config/colors.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavContainer from '../components/NavContainer.js';



export default function ImageSelect({navigation}) {
    const [image, setImage] = useState(null)
    useEffect(() => {
      if (Platform.OS !== 'web') {
        const { status } = ImagePicker.requestMediaLibraryPermissionsAsync()
      }
    }, [])
  
    const PickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,3], 
        quality: 1
      })
      console.log(result)
      if (!result.cancelled) {
        setImage(result.uri) 
      }
    }
  
    return (
        <ImageBackground 
        style={styles.background} 
        resizeMode='cover'
        source={require('../assets/images-background.jpg')}
        >
        <SafeAreaView />
        <View onPress={PickImage} style={styles.inputContainer}>
            <TouchableOpacity onPress={PickImage}>
                <Image source={require('../assets/camera.png')} style={{width: 100, height: 100}}/>
            </TouchableOpacity>
        </View>
        {image && <Image source={{uri:image}} style={{width: 200, height: 200}}/>}
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
    inputContainer: {
      backgroundColor: colors.container,
      margin: 20,
      padding: 10,
      bottom: 500,
      borderRadius: 20
    },
})
