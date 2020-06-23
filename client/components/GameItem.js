import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

const GameItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onViewGame} useForeground>
          <View style={styles.contentWrapper}>
            <View style={styles.game}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.title}>
              <Text style={styles.text}>{props.title}</Text>
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    borderTopWidth: .5,
    borderTopColor: 'black',
    borderBottomWidth: .5,
    borderBottomColor: 'black',
    backgroundColor: 'white'
  },
  touchable: {
    overflow: "hidden",
    width: "100%",
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  game: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 2,
    overflow: "hidden",
    width: 75,
    height: 100,
    marginVertical: 5,
    marginLeft: 5,
  },
  image: {
    width: "100%",
    height: "100%"
  },
  title: {
    alignItems: "center",
    marginLeft: 5
  },
  text: {
    fontSize: 14,
    marginTop: 2
  }
});

export default GameItem;