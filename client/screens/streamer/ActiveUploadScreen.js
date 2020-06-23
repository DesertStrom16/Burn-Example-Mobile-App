import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActiveUploadScreen = props => {
    return <View style={styles.screen}>
        <Text style={styles.text}>Active Uploads Screen</Text>
    </View>
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16
    }
});

export default ActiveUploadScreen;