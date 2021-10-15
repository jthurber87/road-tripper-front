import React, {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import { fontFamily, paddingLeft, style } from 'styled-system';
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
                        <TextInput style={styles.todo} autoCorrect={false} onChangeText={text=>{setInput({ ...input, ["destinations"]:text})}} onSubmitEditing={()=>{newDestination(input)}} placeholder="Add Todo"/> 
                    </>
                ))
            }
            <TextInput style={styles.inputBox} autoCorrect={false} onChangeText={text=>{setInput({ ...input, ["destinations"]:text})}} onSubmitEditing={()=>{newDestination(input)}} placeholder="Add a Destination"/> 
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
        fontFamily: 'Chalkduster'
    },
    todoText: {
        color: colors.primary,
        fontSize: 15,
        paddingTop: 5,
        fontFamily: 'Chalkduster'
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



// import React, { Component } from 'react'; 
// import { Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
 
// export default class App extends Component { 
//     constructor() { 
//         super(); 
//         this.state = { expanded: false }
//         if (Platform.OS === 'android' { 
//             UIManager.setLayoutAnimationEnabledExperimental(true); 
//         } 
//     } 

//     changeLayout = () => { LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); this.setState({ expanded: !this.state.expanded }); } 
//     render() { 
//         return ( 
//             <View style={styles.container}> 
//                 <View style={styles.btnTextHolder}> 
//                     <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={styles.Btn}> 
//                         <Text style={styles.btnText}>
//                             Expand / Collapse
//                         </Text> 
//                     </TouchableOpacity> 
//                     <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}> 
//                         <Text style={styles.text}> 
//                             Lorem Ipsum 
//                         </Text> 
//                     </View> 
//                 </View> 
//             </View> )
//             ; 
// } } 

// const styles = StyleSheet.create({ 
//     container: { 
//         flex: 1, paddingHorizontal: 10, justifyContent: 'center', paddingTop: (Platform.OS === 'ios') ? 20 : 0 
//     }, 
//     text: { 
//         fontSize: 17, color: 'black', padding: 10 
//     }, 
//     btnText: { 
//         textAlign: 'center', color: 'white', fontSize: 20 
//     }, 
//     btnTextHolder: { 
//         borderWidth: 1, borderColor: 'rgba(0,0,0,0.5)' 
//     }, 
//     Btn: { 
//         padding: 10, backgroundColor: 'rgba(0,0,0,0.5)' 
//     } 
// });

