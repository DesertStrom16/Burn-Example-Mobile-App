import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Button,
  Modal,
} from "react-native";
import { Video } from "expo-av";
import { useDispatch, useSelector } from "react-redux";
import { newUpload, delUpload } from "../store/actions/uploads";
import { WebView } from "react-native-webview";
import Colors from "../constants/Colors";

const VideoItem = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      {/* // Modal Starts Here */}
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        {/* Video Player Starts Here */}
        <View style={styles.modal}>
          <View style={styles.videoWrapper}>
            <WebView
              originWhitelist={["*"]}
              source={{
                html: `<iframe src="https://www.twitch.tv/videos/592572087" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>`,
              }}
              style={{ width: "100%" }}
            />
            {/* <WebView
              originWhitelist={["*"]}
              source={{
                html: `<script src= "https://player.twitch.tv/js/embed/v1.js"></script>
              <div id="player-div-ID"></div>
              <script type="text/javascript">
                var options = {
                  width: 1080,
                  height: 720,
                  video: "${props.id}",
                  parent: ["exp://25.22.61.204:19000"]
                };
                var player = new Twitch.Player("player-div-ID", options);
                player.setVolume(0.5);
              </script>`,
              }}
              style={{ width: "100%" }}
            /> */}
            {/* <Video
              source={{
                uri: `https://www.youtube.com/watch?v=wr_pNRdUZpA`,
              }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={{ width: 300, height: 300 }}
            /> */}
          </View>
          <View style={styles.imageWrapperModal}>
            <Image
              style={styles.image}
              source={{
                uri: props.thumbnail_url.replace(
                  "%{width}x%{height}",
                  "1920x1080"
                ),
              }}
            />
          </View>
          <Text>Title: {props.title}</Text>
          <Text>Description: {props.description}</Text>
          <Text>Duration: {props.duration}</Text>
          <Button
            title="Close Preview"
            color={Colors.orange}
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
      <View style={styles.touchable}>
        {/* // From here down feel free to edit as you see fit */}
        <View style={styles.contentWrapper}>
          <View style={styles.leftSide}>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.image}
                source={{
                  uri: props.thumbnail_url.replace(
                    "%{width}x%{height}",
                    "1920x1080"
                  ),
                }}
              />
            </View>
            <View style={styles.textWrapper}>
              <Text>{props.title}</Text>
              <Text>{props.duration}</Text>
            </View>
          </View>
          <View style={styles.rightSide}>
            <View style={styles.buttonWrapper}>
              <View style={{ marginBottom: 15 }}>
                <Button
                  title="Add"
                  color={Colors.primary}
                  onPress={() => {
                    dispatch(newUpload(props));
                    // console.log(props);
                  }}
                />
              </View>

              <Button
                title="Details"
                color={Colors.orange}
                onPress={() => setModalVisible(true)}
              />

              {/* <Text>{props.id}</Text> */}
              {/* <Text>{props.description}</Text> */}
              {/* <Text>{props.url}</Text> */}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoWrapper: {
    // borderWidth: 2,
    // borderColor: "red",
    width: 300,
    height: 200,
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    padding: 3,
  },
  leftSide: {
    width: "60%",
  },
  rightSide: {
    width: "40%",
    paddingHorizontal: 5,
    height: "95%",
  },
  imageWrapper: {
    width: "100%",
    height: "70%",
  },
  imageWrapperModal: {
    width: 250,
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textWrapper: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: "center",
  },
});

export default VideoItem;
