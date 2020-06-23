import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";


// So this screen will eventually need to be worked on but right now it is just a slider example for the FAQ page whenever we build it. 
// Feel free to comment it out but save it for later as a reference!
const NewStreamerScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scroll} horizontal={true} pagingEnabled={true}>
        <View style={styles.p1}>
          <Text style={styles.text}>Page 1</Text>
        </View>
        <View style={styles.p2}>
          <Text style={styles.text}>Page 2</Text>
        </View>
        <View style={styles.p3}>
          <Text style={styles.text}>Page 3</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  scroll: {
    flex: 1
  },
  p1: {
    backgroundColor: "red",
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  p2: {
    backgroundColor: "blue",
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  p3: {
    backgroundColor: "yellow",
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25
  }
});

export default NewStreamerScreen;
