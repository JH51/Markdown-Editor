//  import * as types from '../constants/actionTypes';
import { combineReducers } from "redux";
import convertMarkdownToHTML from "./helpers.js";
const SERVER_URL = "http://localhost:3000";

const initialState = {
  editorText: "",
  previewText: "",
  authToken: "",
  user: "",
  repo: "",
  branch: "",
  filename: "README.md",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_README": {
      fetch(`http://localhost:3000/api?user=${"JH51"}&repo=${"SampleRepo"}&branch=${"main"}&filename=${"README.md"}`, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          document.getElementById("editor-text").value = responseJson.mdText;
          return {
            ...state,
            // user: responseJson.user,
            // repo: responseJson.repo,
            // branch: responseJson.branch,
            // filename: responseJson.filename,
            editorText: responseJson.mdText,
            previewText: convertMarkdownToHTML(responseJson.mdText),
          };
        })
        .catch((err) => {
          console.log(err);
          return state;
        });
    }

    case "REDIRECT_TO_GITHUB_OAUTH": {
      fetch("http://localhost:3000/login/oauth/github", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        mode: "no-cors",
        redirect: "follow",
      });
      return state;
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
