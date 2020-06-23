import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";

const UserProfile = () => {
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
      {/* <Text>Twitch Profile Img Url: {reduxProfileImg}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default UserProfile;
