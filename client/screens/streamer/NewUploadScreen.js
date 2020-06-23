import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideos } from "../../store/actions/videos";

import VideoItem from "../../components/VideoItem";
import Colors from "../../constants/Colors";
import ConfirmVideoItem from "../../components/ConfirmVideoItem";

const NewUploadScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const reduxId = useSelector((state) => state.users.id);
  const reduxVideoData = useSelector((state) => state.videos.video.data);
  const reduxUploads = useSelector((state) => state.uploads.upload);

  const openModalHandler = () => {
    setModalVisible(true);
    dispatch(fetchVideos(reduxId));
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>New Upload Screen</Text>

      <Button title="Add a New Video" onPress={openModalHandler} color="red" />

      {/* Modal Starts Here */}
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <Text>Select a video to upload!</Text>

          <Button title="Filter by Game" color="grey" />

          <View style={styles.flatlistWrapper}>
            {/* Renders all the videos on your Twitch account, VideoItem is the component each one is rendered into. */}
            <FlatList
              data={reduxVideoData}
              contentContainerStyle={styles.flatlist}
              renderItem={(itemData) => (
                <VideoItem
                  id={itemData.item.id}
                  title={itemData.item.title}
                  description={itemData.item.description}
                  duration={itemData.item.duration}
                  thumbnail_url={itemData.item.thumbnail_url}
                  url={itemData.item.url}
                />
              )}
            />
          </View>
          <View></View>

          <Button
            title="Confirm Video"
            onPress={() => {
              setModalVisible(false);
            }}
            color="green"
          />
        </View>
      </Modal>

      {/* FlatList for selected videos */}
      <FlatList
        data={reduxUploads}
        contentContainerStyle={styles.flatlist}
        renderItem={(itemData) => <ConfirmVideoItem data={itemData.item} userId={reduxId} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontSize: 16,
  },
  modal: {
    marginTop: 22,
    alignItems: "center",
  },
  flatlistWrapper: {
    width: "97.5%",
    height: 325,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: Colors.orange,
  },
  flatlist: {
    width: "100%",
  },
});

export default NewUploadScreen;
