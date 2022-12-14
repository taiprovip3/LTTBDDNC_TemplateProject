import { View, Text, SafeAreaView, Button, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useRef } from 'react';

export default function FlyGame() {

  const flyAnimateFromLeftToRight = useRef(new Animated.Value(0)).current;

  const flyNow = () => {
    Animated.timing(flyAnimateFromLeftToRight, {
      toValue: 285,
      duration: 1700
    }).start();
  }

  return (
    <SafeAreaView style={{justifyContent:'center', flex:1}}>


        <Animated.View style={{ marginLeft: flyAnimateFromLeftToRight }}>
            <MaterialIcons name="flight-takeoff" size={40} color="*black" />
        </Animated.View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1
          }}
        />
        <Button title='Fly' onPress={flyNow} />


    </SafeAreaView>
  );
}