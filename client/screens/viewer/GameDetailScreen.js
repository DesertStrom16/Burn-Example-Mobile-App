import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from "react-native";

import Colors from '../../constants/Colors';

const GameDetailScreen = ({ route }) => {
  const { imageUrl, description } = route.params;
  return (
    <View style={styles.screen}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
      <Button title="Start Watching" color={Colors.orange} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  imageWrapper: {
    width: 180,
    height: 240,
    marginVertical: 10
  },
  image: {
    width: '100%',
    height: '100%'
  },
  description: {
    marginVertical: 5,
    textAlign: 'center'
  }
});

export default GameDetailScreen;
