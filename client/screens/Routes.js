import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSelector } from "react-redux";

import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

import LandingScreen from "../screens/login/LandingScreen";
import NewViewerScreen from "../screens/login/NewViewerScreen";
import NewStreamerScreen from "../screens/login/NewStreamerScreen";
import ActiveUserLogin from "../screens/login/ActiveUserLogin";
import BrowseScreen from "../screens/viewer/BrowseScreen";
import GameDetailScreen from "../screens/viewer/GameDetailScreen";
import NewUploadScreen from "../screens/streamer/NewUploadScreen";
import ActiveUploadScreen from "../screens/streamer/ActiveUploadScreen";
import UserProfile from "../screens/UserProfile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Landing Stack
const LandingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.orange,
        },
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{
          title: "Welcome To Burn",
        }}
      />
      <Stack.Screen
        name="NewViewer"
        component={NewViewerScreen}
        options={{ title: "Viewer Login" }}
      />
      <Stack.Screen
        name="NewStreamer"
        component={NewStreamerScreen}
        options={{ title: "Streamer Login" }}
      />
      <Stack.Screen
        name="ActiveUserLogin"
        component={ActiveUserLogin}
        options={{ title: "Active User Login" }}
      />
    </Stack.Navigator>
  );
};

// Drawer Stack - Contains both Viewer and Streamer Stacks
const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName="DrawerStack">
      <Drawer.Screen name="Viewer" component={ViewerStack} />
      <Drawer.Screen name="Streamer" component={StreamerStack} />
    </Drawer.Navigator>
  );
};

// Viewer Stack
const ViewerStack = ({ navigation }) => {
  const reduxDisplayName = useSelector((state) => state.users.display_name);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.orange,
        },
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Stack.Screen
        name="Browse"
        component={BrowseScreen}
        options={{
          headerLeft: () => (
            <Ionicons
              name="md-menu"
              size={32}
              color="white"
              onPress={() => navigation.toggleDrawer()}
              style={{ marginLeft: 10 }}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="md-person"
              size={32}
              color="white"
              onPress={() => navigation.navigate("ViewerProfile")}
              style={{ marginRight: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="BrowseDetails"
        component={GameDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerTitleStyle: {
            fontSize: 18,
            color: "white",
          },
        })}
      />
      <Stack.Screen
        name="ViewerProfile"
        component={UserProfile}
        options={() => ({
          title: reduxDisplayName,
          headerTitleStyle: {
            fontSize: 18,
            color: "white",
          },
        })}
      />
    </Stack.Navigator>
  );
};

// Streamer Stack
const StreamerTabNav = () => {
  return (
    <Tab.Navigator>
      <Stack.Screen
        name="NewUpload"
        component={NewUploadScreen}
        options={{ title: "New Upload" }}
      />
      <Stack.Screen
        name="ActiveUpload"
        component={ActiveUploadScreen}
        options={{ title: "Active Uploads" }}
      />
    </Tab.Navigator>
  );
};
const StreamerStack = ({ navigation }) => {
  const reduxDisplayName = useSelector((state) => state.users.display_name);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.orange,
        },
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Stack.Screen
        name="Streamer Dashboard"
        component={StreamerTabNav}
        options={{
          headerLeft: () => (
            <Ionicons
              name="md-menu"
              size={32}
              color="white"
              onPress={() => navigation.toggleDrawer()}
              style={{ marginLeft: 10 }}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="md-person"
              size={32}
              color="white"
              onPress={() => navigation.navigate("StreamerProfile")}
              style={{ marginRight: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="StreamerProfile"
        component={UserProfile}
        options={() => ({
          title: reduxDisplayName,
          headerTitleStyle: {
            fontSize: 18,
            color: "white",
          },
        })}
      />
    </Stack.Navigator>
  );
};

const Routes = () => {
  const isUserLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const isAppLoading = useSelector((state) => state.users.isLoading);

  if (isAppLoading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack.Navigator initialRouteName="LandingStack" headerMode="none">
      {isUserLoggedIn === false ? (
        <Stack.Screen name="LandingStack" component={LandingStack} />
      ) : (
        <Stack.Screen name="DrawerStack" component={DrawerStack} />
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Routes;
