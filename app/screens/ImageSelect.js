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

        {image && <Image source={{uri:image}} style={{width: 200, height: 200}}/>}
        <View onPress={PickImage} style={styles.box}>
            <TouchableOpacity onPress={PickImage}>
                <Text style={styles.text}>Add Image</Text>
            </TouchableOpacity>
        </View>
        {/* <NavContainer navigation={navigation}/> */}
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
      width: '30%',
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
