import { combineReducers } from "redux";
import convertMarkdownToHTML from "./helpers.js";

const initialState = {
  editorText: {past: [], present: "", future: []},
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
        `${SERVER_URL}/api?user=${user.value}&repo=${repo.value}&branch=${branch.value}&filename=${filename.value}`,
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
            editorText: {past: [], present: responseJson.mdText, future: []},
            previewText: convertMarkdownToHTML(responseJson.mdText),
          };
        })
        .catch((err) => {
          console.log(err);
          return state;
        });
    }

    case "REDIRECT_TO_GITHUB_OAUTH": {
      fetch(`${SERVER_URL}/login/oauth/github`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        mode: "no-cors",
        redirect: "follow",
      });
      return state;
    }

    case "STORE_EDITOR_TEXT": {
      const copyOfEditorText = {...state.editorText};
      copyOfEditorText.future = [];
      copyOfEditorText.past.push(copyOfEditorText.present);
      copyOfEditorText.present = action.payload
      return {
        ...state,
        editorText: copyOfEditorText,
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

    case "UPDATE_FILENAME": {
      return {
        ...state, 
        filename: action.payload,
      };
    }

    case "UNDO_EDITOR_TEXT": {
      const copyOfEditorText = {...state.editorText};
      copyOfEditorText.future.push(copyOfEditorText.present)
      copyOfEditorText.present = copyOfEditorText.past.pop();
      return {
        ...state,
        editorText: copyOfEditorText,
        previewText: convertMarkdownToHTML(copyOfEditorText.present),
      };
    }

    case "REDO_EDITOR_TEXT": {
      const copyOfEditorText = {...state.editorText};
      copyOfEditorText.past.push(copyOfEditorText.present)
      copyOfEditorText.present = copyOfEditorText.future.pop();
      return {
        ...state,
        editorText: copyOfEditorText,
        previewText: convertMarkdownToHTML(copyOfEditorText.present),
      };
    }

    default:
      return state;

  }
};

export default combineReducers({
  reducer: reducer,
});
