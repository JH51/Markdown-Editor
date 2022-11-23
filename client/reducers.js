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
      const user = document.getElementById("input-user"),
        repo = document.getElementById("input-repo"),
        branch = document.getElementById("input-branch"),
        filename = document.getElementById("input-filename");
      console.log(state.reducer);
      fetch(
        `http://localhost:3000/api?user=${user.value}&repo=${repo.value}&branch=${branch.value}&filename=${filename.value}`,
        {
          method: "GET",
        }
      )
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

    case "UPDATE_QUERIES": {
      return {
        ...state,
        user: action.payload.user,
        repo: action.payload.repo,
        branch: action.payload.branch,
        filename: action.payload.filename,
      };
    }

    default:
      return state;
  }
};

export default combineReducers({
  reducer: reducer,
});
