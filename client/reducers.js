//  import * as types from '../constants/actionTypes';
import { combineReducers } from "redux";
import convertMarkdownToHTML from "./helpers.js";
const SERVER_URL = "http://localhost:3000";
// const SERVER_URL = require('../server/express.js');

const initialState = {
  editorText: "",
  previewText: "",
  authToken: "",
  user: "",
  repo: "",
  branch: "",
  filename: "",
  url: "local"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "FETCH_README": {
      fetch(`${SERVER_URL}/api`, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((responseJson, dispatch) => {
          document.getElementById("editor-text").value = responseJson.mdText;
          return {
            ...state,
            user: responseJson.user,
            repo: responseJson.repo,
            branch: responseJson.branch,
            filename: responseJson.filename,
            editorText: responseJson.mdText,
            previewText: convertMarkdownToHTML(responseJson.mdText),
          };
        })
        .catch((err) => {
          return {
            type: "ERROR",
          };
        });
    }

    case "STORE_EDITOR_TEXT": {
      return {
        ...state,
        editorText: action.payload,
        previewText: convertMarkdownToHTML(action.payload),
      };
    }

    case "UPDATE_HEADER": {
      document.getElementById("src-repo").removeAttribute("hidden");
      return state;
    }

    default:
      return state;
  }
};

export default combineReducers({
  reducer: reducer,
});
