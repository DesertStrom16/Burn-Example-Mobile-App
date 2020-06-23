import React from "react";
import { View, Text, StyleSheet, Picker } from "react-native";

const GamePicker = (props) => {

    return <View style={styles.wrapper}>
        <Text>Hey There!</Text>
        <Picker>
            {/* <Picker.Item label="java" /> */}
        </Picker>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        borderColor: "red",
        borderWidth: 2
    }
})

export default GamePicker;