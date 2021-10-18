# Road Tripper

Easily organize your road trip so you can spend more time enjoying it.

## Features

- Add trips you're planning (i.e. PNW National Parks)
- Add destinations to your trips (i.e. Olympic, Mt. Ranier)
- Add todo's to your destinations (i.e. Paradise, Ohanapecosh)
- Add photos to associate with your destinations, as well as important documents.

## Installation

Install road-tripper-front with npm

```bash
  npm install road-tripper-front
  cd road-tripper-front
```

Open via simulator from XCode

## Lessons Learned

- React Native, while similar to React, has some interesting ways of passing props

```
<Tab.Screen
    name="Images"
    children={()=><ImageSelect oneTrip={oneTrip}/>}
/>
```

- There are many built-in components with a variety of options, but they can be tricky to configure.

```
<TouchableOpacity
    style={styles.box}
    key={trip._id}
    onPress={()=>selectTrip(trip._id)}
    onLongPress={()=>confirmDelete(trip._id)}>
        <Text key={trip._id} style={styles.containerText}>
            {trip.name}
        </Text>
</TouchableOpacity>
```

- Navigation can also be tricky. Screens, tabs, and nav bars are just a few things to be taken into account for naviagation. This project uses a little of all three.

```
 <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} /*options={{headerShown: false}}*/ />
        <Stack.Screen name="Register" component={RegisterScreen} /*options={{headerShown: false}}*/ />
        <Stack.Screen name="Trips" component={Trips}/*options={{headerShown: false}}*/ />
        <Stack.Screen name="Destinations" component={Destinations} /*options={{headerShown: false}}*/ />
        <Stack.Screen name="Checklist" component={Checklist} /*options={{headerShown: false}}*/ />
        <Stack.Screen name="Images" component={ImageSelect} /*options={{headerShown: false}}*/ />
        <Stack.Screen name="MainScreen" component={MainScreen} /*options={{headerShown: false}}*/ />
    </Stack.Navigator>
</NavigationContainer>
```

```
 <Tab.Navigator initialRouteName="Destinations">
      <Tab.Screen
          name="Destinations"
          children={()=><Destinations oneTrip={oneTrip}/>}
          screenOptions={{unmountOnBlur: false}}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require('../assets/map.png')}
                style={{
                  width: size,
                  height: size
                }}
              />
            ),
            headerShown: false
          }}
        />
      <Tab.Screen
          name="Checklist"
          children={()=><Checklist oneTrip={oneTrip}/>}
          screenOptions={{unmountOnBlur: false}}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require('../assets/list.png')}
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),
            headerShown: false
          }}
        />
      <Tab.Screen
          name="Images"
          children={()=><ImageSelect oneTrip={oneTrip}/>}
          screenOptions={{unmountOnBlur: false}}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={require('../assets/camera.png')}
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),
            headerShown: false

          }}
        />
</Tab.Navigator>
```

- Creating mobile apps with React Native is fun! Once you have the hang of it, you can see live updates on a simulated iPhone or Android device as you save.

## Code Snippets

- Adding destinations

```
const [destInput, setDestInput] = useState({
        oneTrip,
        destinations: [...foundDestinations, { name: "" }]
    })

<TextInput
  style={styles.inputBox}
  autoCorrect={false}
  onChangeText={text=>{setDestInput({ ...destInput, ["destinations"]: [...foundDestinations, { ["name"]: text }]})}}
  onSubmitEditing={()=>{newDestination(oneTripId, destInput)}}
  placeholder="Add a destination"
/>
```

## Roadmap

- Add AWS integration

- Add authentication

- Add picture associations

## Authors

- [@jthurber87](https://www.github.com/jthurber87)
