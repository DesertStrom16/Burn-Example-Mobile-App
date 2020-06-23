import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Picker,
  Button,
} from "react-native";
import Colors from "../constants/Colors";

const ConfirmVideoItem = (props) => {
  const [selectedValue, setSelectedValue] = useState("10");
  
  const publishHandler = () => {
    fetch(`http://172.16.12.117:8080/streamer/publish-video`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: props.data,
        views: selectedValue,
        userId: props.userId
      }),
    })
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.topWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{
              uri: props.data.thumbnail_url.replace(
                "%{width}x%{height}",
                "1920x1080"
              ),
            }}
          />
        </View>
        <View style={styles.rightSide}>
          <Text>{props.data.title}</Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="10" value="10" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="50" value="50" />
          </Picker>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <View style={{ marginRight: 10 }}>
          <Button title="Delete" color={Colors.lightRed}/>
        </View>
        <Button title="Publish" color={Colors.lightBlue} onPress={publishHandler} />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 7.5,
    width: windowWidth * 0.9,
    height: windowHeight * 0.25,
  },
  topWrapper: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
    flexDirection: "row",
  },
  imageWrapper: {
    width: "50%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rightSide: {
    width: "50%",
  },
  buttonWrapper: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "black"
  },
});

export default ConfirmVideoItem;
