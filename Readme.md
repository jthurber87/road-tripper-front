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
    // trip={trip}
    key={trip._id}
    onPress={()=>selectTrip(trip._id)}
    onLongPress={()=>confirmDelete(trip._id)}>
        <Text key={trip._id} style={styles.containerText}>
            {trip.name}
        </Text>
</TouchableOpacity>
```

- Navigation can also be tricky. Screens, tabs, and nav bars are just a few things to be taken into account for naviagation. This project uses a little of all three.

- Creating mobile apps with React Native is fun! Once you have the hang of it, you can see live updates on a simulated iPhone or Android device as you save.

## Roadmap

- Add AWS integration

- Add authentication

- Add picture associations

## Authors

- [@jthurber87](https://www.github.com/jthurber87)
