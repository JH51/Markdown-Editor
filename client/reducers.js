//  import * as types from '../constants/actionTypes';
import { combineReducers } from "redux";
import convertMarkdownToHTML from "./helpers.js";
const SERVER_URL = "http://localhost:3000";
// const SERVER_URL = require('../server/express.js');

const initialState = {
  editorText: "",
  previewText: "",
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

    case "FETCH_README": {
      fetch(`${SERVER_URL}/api`, {
        method: "GET",
      })
        .then((response) => {
          return response.text();
        })
        .then((responseText) => {
          document.getElementById('editor-text').value = responseText;
          return {
            ...state,
            editorText: responseText,
            previewText: responseText,
          };
        })
        .catch((err) => {
          return {
            type: "ERROR",
          };
        });
    }

    default:
      return state;
  }
};

export default combineReducers({
  reducer: reducer,
});
