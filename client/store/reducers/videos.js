import { GET_VIDEOS } from "../actions/videos";

const initialState = {
  video: [],
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        video: {
          ...state.video,
          data: action.videoData,
        },
      };
    default:
      return state;
  }
};

export default videoReducer;