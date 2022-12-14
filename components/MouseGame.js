import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MouseGame() {

  const [mouse1, setMouse1] = React.useState({ topValue: new Animated.Value(0), leftValue: new Animated.Value(0) });
  const [mouse2, setMouse2] = React.useState({ topValue: new Animated.Value(0), leftValue: new Animated.Value(0) });
  const [mouse3, setMouse3] = React.useState({ topValue: new Animated.Value(0), leftValue: new Animated.Value(0) });
  const windowWidth = Dimensions.get('window').width - 20;
  const windowHeigh = Dimensions.get('window').height - 20;

  React.useEffect(() => {

    const t1 = Math.floor(Math.random() * windowHeigh);
    const l1 = Math.floor(Math.random() * windowWidth);
    Animated.timing(mouse1.topValue, {
        toValue: t1,
        duration: 1000,
        useNativeDriver: false
    }).start();
    Animated.timing(mouse1.leftValue, {
        toValue: l1,
        duration: 1000,
        useNativeDriver: false
    }).start();
    setTimeout(() => {
        setMouse1({ topValue: new Animated.Value(t1), leftValue: new Animated.Value(l1) });
    }, 1000);

    const t2 = Math.floor(Math.random() * windowHeigh);
    const l2 = Math.floor(Math.random() * windowWidth);
    Animated.timing(mouse2.topValue, {
        toValue: t2,
        duration: 1000,
        useNativeDriver: false
    }).start();
    Animated.timing(mouse2.leftValue, {
        toValue: l2,
        duration: 1000,
        useNativeDriver: false
    }).start();
    setTimeout(() => {
        setMouse2({ topValue: new Animated.Value(t2), leftValue: new Animated.Value(l2) });
    }, 1000);

    const t3 = Math.floor(Math.random() * windowHeigh);
    const l3 = Math.floor(Math.random() * windowWidth);
    Animated.timing(mouse3.topValue, {
        toValue: t3,
        duration: 1000,
        useNativeDriver: false
    }).start();
    Animated.timing(mouse3.leftValue, {
        toValue: l3,
        duration: 1000,
        useNativeDriver: false
    }).start();
    setTimeout(() => {
        setMouse3({ topValue: new Animated.Value(t3), leftValue: new Animated.Value(l3) });
    }, 1000);
  },[]);

  const onMouse1Click = () => {
    const t1 = Math.floor(Math.random() * windowHeigh);
    const l1 = Math.floor(Math.random() * windowWidth);
    Animated.timing(mouse1.topValue, {
        toValue: t1,
        duration: 1000,
        useNativeDriver: false
      }).start();
      Animated.timing(mouse1.leftValue, {
        toValue: l1,
        duration: 1000,
        useNativeDriver: false
      }).start();
      setTimeout(() => {
        setMouse1({ topValue: new Animated.Value(t1), leftValue: new Animated.Value(l1) });
      }, 1000);
      console.log('Mouse1: ' + t1 + ', ' + l1);
  };
  const onMouse2Click = () => {
    const t2 = Math.floor(Math.random() * windowHeigh);
    const l2 = Math.floor(Math.random() * windowWidth);
    Animated.timing(mouse2.topValue, {
        toValue: t2,
        duration: 1000,
        useNativeDriver: false
    }).start();
    Animated.timing(mouse2.leftValue, {
        toValue: l2,
        duration: 1000,
        useNativeDriver: false
    }).start();
    setTimeout(() => {
        setMouse2({ topValue: new Animated.Value(t2), leftValue: new Animated.Value(l2) });
    }, 1000);
  };
  const onMouse3Click = () => {
    const t3 = Math.floor(Math.random() * windowHeigh);
    const l3 = Math.floor(Math.random() * windowWidth);
    Animated.timing(mouse3.topValue, {
        toValue: t3,
        duration: 1000,
        useNativeDriver: false
    }).start();
    Animated.timing(mouse3.leftValue, {
        toValue: l3,
        duration: 1000,
        useNativeDriver: false
    }).start();
    setTimeout(() => {
        setMouse3({ topValue: new Animated.Value(t3), leftValue: new Animated.Value(l3) });
    }, 1000);
  };
  const onPressView = (e) => {
  };

  return (
    <View style={styles.container}
        onStartShouldSetResponder={() => true}
        onResponderGrant={onPressView}
    >

        
        <Animated.View style={{ position:'absolute', top:mouse1.topValue, left:mouse1.leftValue }}>
            <MaterialCommunityIcons name="mouse-variant" size={24} color="purple" onPress={onMouse1Click} />
        </Animated.View>

        <Animated.View style={{ position:'absolute', top:mouse2.topValue, left:mouse2.leftValue }}>
            <MaterialCommunityIcons name="mouse-variant" size={24} color="red" onPress={onMouse2Click} />
        </Animated.View>

        <Animated.View style={{ position:'absolute', top:mouse3.topValue, left:mouse3.leftValue }}>
            <MaterialCommunityIcons name="mouse-variant" size={24} color="green" onPress={onMouse3Click} />
        </Animated.View>



    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
      position: 'relative'
    }
  });