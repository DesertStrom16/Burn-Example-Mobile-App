import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const ActiveUserLogin = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Active User Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 22
  }
});

export default ActiveUserLogin;
