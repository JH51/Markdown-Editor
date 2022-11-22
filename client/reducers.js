//  import * as types from '../constants/actionTypes';
import { combineReducers } from "redux";
import convertMarkdownToHTML from "./helpers.js";

const initialState = {
  editorText: "",
  previewText: "Type in the editor pane to begin...",
  username: "",
  authToken: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_EDITOR_TEXT": {
      return {
        ...state,
        editorText: action.payload,
        previewText: convertMarkdownToHTML(action.payload),
      };
    }

    default:
      return state;
  }
};

export default combineReducers({
  reducer: reducer,
});
