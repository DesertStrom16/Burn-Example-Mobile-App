import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

// This is a constants file for colors. Follow the file path to add more as needed.
import Colors from "../../constants/Colors";

const LandingScreen = ({ navigation }) => {
  let TouchableCmp = TouchableOpacity;

  // Operating System check for android version 21 or greater, if true TouchableNativeFeedback is applied for a nice ripple effect on android.
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.viewer}>
        <TouchableCmp
          onPress={() =>
            navigation.navigate("LandingStack", { screen: "NewViewer" })
          }
          useForeground
        >
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Viewer</Text>
          </View>
        </TouchableCmp>
        <Button
          title="To Viewer"
          onPress={() =>
            navigation.navigate("LandingStack", { screen: "NewViewer" })
          }
        />
      </View>
      <View style={styles.streamer}>
        <TouchableCmp
          onPress={() =>
            navigation.navigate("LandingStack", { screen: "NewStreamer" })
          }
          useForeground
        >
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Streamer</Text>
          </View>
        </TouchableCmp>
      </View>

      {/* This button will soon be updated for authentication without a force-login requirement. For now it does nothing. */}
      <View style={styles.login}>
        <View>
          <Text style={styles.text}>Already have an account?</Text>
        </View>
        <Button
          title="Login"
          color={Colors.orange}
          style={styles.button}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  viewer: {
    width: "100%",
    height: "45%",
    borderBottomWidth: 1.5,
    borderBottomColor: "black",
    overflow: "hidden"
  },
  streamer: {
    width: "100%",
    height: "45%",
    overflow: "hidden",
    borderTopWidth: 1.5,
    borderTopColor: "black"
  },
  titleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    fontSize: 22
  },
  login: {
    width: "100%",
    height: "10%",
    backgroundColor: Colors.grey,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 17,
    marginRight: 30
  }
});

export default LandingScreen;
