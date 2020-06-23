import React from "react";
import { Button, StyleSheet, Text, View, Platform } from "react-native";
import { Linking } from "expo";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../store/actions/users";

const NewViewerScreen = () => {
  const dispatch = useDispatch();

  const handleRedirect = (event) => {
    if (Constants.platform.ios) {
      WebBrowser.dismissBrowser();
    } else {
      removeLinkingListener();
    }

    let data = Linking.parse(event.url);
    dispatch(fetchPosts(data.queryParams.code));
  };

  // --- Android ---
  const openBrowserAsync = async () => {
    try {
      addLinkingListener();
      await WebBrowser.openBrowserAsync(
        `https://id.twitch.tv/oauth2/authorize?client_id=rggrr0wfq2zb6m42yvki7hzi71x7jn&redirect_uri=exp://25.22.61.204:19000&response_type=code&scope=user_follows_edit`
      );
    
    } catch (error) {
      console.log(error);
    }
  };

  // --- IOS ---
  const openAuthSessionAsync = async () => {
    try {
      let result = await WebBrowser.openAuthSessionAsync(
        `https://id.twitch.tv/oauth2/authorize?client_id=rggrr0wfq2zb6m42yvki7hzi71x7jn&redirect_uri=exp://25.22.61.204:19000&response_type=code&scope=user_follows_edit`
      );
      let twitchCode;
      if (result.url) {
        twitchCode = Linking.parse(result.url);
      }
      console.log(twitchCode.queryParams.code);
      dispatch(fetchPosts(twitchCode.queryParams.code));

    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const addLinkingListener = () => {
    Linking.addEventListener("url", handleRedirect);
  };

  const removeLinkingListener = () => {
    Linking.removeEventListener("url", handleRedirect);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login With Twitch!</Text>
      <Button
        onPress={
          Platform.OS === "android" ? openBrowserAsync : openAuthSessionAsync
        }
        title="Twitch Login"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
  },
  header: {
    fontSize: 25,
    marginBottom: 25,
  },
});

export default NewViewerScreen;
