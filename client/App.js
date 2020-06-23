import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import RouteScreen from './screens/Routes';
import userReducer from "./store/reducers/users";
import videoReducer from "./store/reducers/videos";
import uploadReducer from "./store/reducers/uploads";

const rootReducer = combineReducers({
  users: userReducer,
  videos: videoReducer,
  uploads: uploadReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <RouteScreen />
    </NavigationContainer>
  </Provider>
  );
}
