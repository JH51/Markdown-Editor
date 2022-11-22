//  import * as types from '../constants/actionTypes';
import { combineReducers } from "redux";

const initialState = {
  editorText: "#DEFAULT EDITOR TEXT",
  previewText: "DEFAULT PREVIEW TEXT",
  username: "",
  authToken: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_EDITOR_TEXT": {
      // console.log(action.payload);
      return {
        ...state,
        editorText: action.payload,
        previewText: action.payload,
      };
    }

    default:
      return state;
  }
};

export default combineReducers({
  reducer: reducer,
});
