import { LOGIN_USER, IS_LOADING } from "../actions/users";

const initialState = {
  twitch_code: null,
  id: null,
  login: null,
  display_name: null,
  profile_image_url: null,
  access_token: null,
  refresh_token: null,
  isLoading: false,
  isLoggedIn: false,
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.appIsLoading
      } 
    case LOGIN_USER:
      return {
        ...state,
        id: action.userId,
        login: action.userLogin,
        display_name: action.userDisplayName,
        profile_image_url: action.userProfileImg,
        isLoggedIn: true,
        isLoading: false
      };
    default:
      return state;
  }
};

export default userReducer;