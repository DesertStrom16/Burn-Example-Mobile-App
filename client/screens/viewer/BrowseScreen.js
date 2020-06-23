import React from "react";
import { FlatList, StyleSheet } from "react-native";

import GameItem from "../../components/GameItem";
import games from "../../data/dummy-data";

const BrowseScreen = ({ navigation }) => {
  return (
    <FlatList
      data={games}
      contentContainerStyle={styles.wrapper}
      renderItem={(itemData) => (
        <GameItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          onViewGame={() =>
            navigation.navigate("BrowseDetails", {
              title: itemData.item.title,
              imageUrl: itemData.item.imageUrl,
              description: itemData.item.description,
            })
          }
          onPress={() =>
            navigation.navigate("BrowseDetails", {
              imageUrl: itemData.item.imageUrl,
              title: itemData.item.title,
              description: itemData.item.description,
            })
          }
        />
      )}
    />
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
});

export default BrowseScreen;
