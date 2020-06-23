import React from "react";
import { View, Text, FlatList, Button, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";

import GameItem from "../../components/GameItem";

const BrowseScreen = ({ navigation }) => {
  // This is how you get data from the Redux Storage! Variable names can be anything you want.
  const reduxId = useSelector((state) => state.users.id);
  const reduxLogin = useSelector((state) => state.users.login);
  const reduxDisplayName = useSelector((state) => state.users.display_name);
  const reduxProfileImg = useSelector((state) => state.users.profile_image_url);

  return (
    <View style={styles.result}>
      <Text style={styles.title}>Welcome, {reduxDisplayName}</Text>
      <Image style={styles.image} source={{ uri: reduxProfileImg }} />
      <Text>Twitch Id is: {reduxId}</Text>
      <Text>Twitch Login is: {reduxLogin}</Text>
      <Text>Twitch Profile Img Url: {reduxProfileImg}</Text>
      <Button
        title="Get Videos"
        color={"red"}
      />
    </View>

    // <FlatList
    //   data={games}
    //   contentContainerStyle={styles.wrapper}
    //   renderItem={itemData => (
    //     <GameItem
    //       image={itemData.item.imageUrl}
    //       title={itemData.item.title}
    //       onViewGame={() => navigation.navigate('BrowseDetails', {
    //         title: itemData.item.title,
    //         imageUrl: itemData.item.imageUrl,
    //         description: itemData.item.description
    //       })}
    //       onPress={() => navigation.navigate('BrowseDetails', {
    //         imageUrl: itemData.item.imageUrl,
    //         title: itemData.item.title,
    //         description: itemData.item.description
    //       })}
    //     />
    //   )}
    // />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    borderTopWidth: 0.5,
    borderTopColor: "black",
  },
  result: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
    textAlign: "center",
  },
  image: {
    width: "90%",
    marginLeft: "5%",
    marginBottom: 10,
    height: "50%",
  },
  button: {
    width: 100,
    height: 50,
  },
});

export default BrowseScreen;
