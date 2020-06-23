import { NEW_UPLOAD, DEL_UPLOAD } from "../actions/uploads";

const initialState = {
  upload: [],
};

const uploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_UPLOAD:
      return {
        ...state,
        upload: state.upload.concat(action.uploadData),
      };
    case DEL_UPLOAD:
      return {
        ...state,
        upload: state.upload.filter(el => el.id !== action.deleteData)
      }
    default:
      return state;
  }
};

export default uploadReducer;
